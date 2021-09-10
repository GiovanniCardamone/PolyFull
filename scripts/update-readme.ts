import { read, write, replaceTag } from './utils'

import ts from 'typescript'
import fs, { stat } from 'fs'
import glob from 'glob-promise'

interface InterfaceMap {
	[key: string]: MethodMap
}

interface MethodMap {
	[key: string]: {
		docs: string
	}
}

Promise.all([read(process.stdin), methodsTable()])
	.then(([text, table]) => replaceTag('POLYFULL-METHODS-TABLE', text, table))
	.then((text) => write(process.stdout, text))

async function methodsTable(): Promise<string> {
	const files = await glob('src/**/*.ts')

	const interfaceMap: InterfaceMap = {}

	for (const file of files) {
		const textFile = fs.readFileSync(file).toString()

		const sourceFile = ts.createSourceFile(
			file,
			textFile,
			ts.ScriptTarget.ES2015
		)

		sourceFile.statements.forEach((statement) => {
			if (statement.kind === ts.SyntaxKind.InterfaceDeclaration) {
				const name: string = (statement as ts.InterfaceDeclaration)?.name
					?.escapedText as string

				if (name in interfaceMap === false) {
					interfaceMap[name] = extractMethods(
						textFile,
						statement as ts.InterfaceDeclaration
					)
				}
			}
		})
	}

	return interfaceMapToTable(interfaceMap)
}

function extractMethods(
	textFile: string,
	statement: ts.InterfaceDeclaration
): MethodMap {
	const methodMap: MethodMap = {}

	statement?.members.forEach((member) => {
		const name: string = (member?.name as ts.Identifier)?.escapedText as string

		if (name !== undefined && member.kind === ts.SyntaxKind.MethodSignature) {
			methodMap[name] = {
				docs: extractDocs(textFile, member as ts.MethodSignature),
			}
		}
	})

	return methodMap
}

function extractDocs(textFile: string, member: ts.MethodSignature): string {
	// @ts-expect-error not annotated in typescript
	return member?.jsDoc?.[0]?.comment?.replace('\n', ' ') || ''
}

function interfaceMapToTable(interfaceMap: InterfaceMap): string {
	return Object.entries(interfaceMap).reduce(
		(accInterface, [interfaceName, methodsMap]) => {
			return (
				accInterface +
				TEMPLATE_INTERFACE.replace('{{InterfaceName}}', interfaceName) +
				Object.entries(methodsMap).reduce(
					(accMethod, [methodName, methodData]) => {
						return (
							accMethod +
							TEMPLATE_ROW.replace('{{MethodName}}', methodName).replace(
								'{{description}}',
								methodData.docs
							) +
							'\n'
						)
					},
					''
				) +
				'\n'
			)
		},
		''
	)
}

const TEMPLATE_INTERFACE = `### {{InterfaceName}}

| Method | Description |
| ------ | ----------- |
`

const TEMPLATE_ROW = '| {{MethodName}} | {{description}} |'

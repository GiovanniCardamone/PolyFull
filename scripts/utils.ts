export function replaceTag(tag: string, content: string, text: string): string {
	const tagRegex = new RegExp(
		`(<!-- ${tag}:START .+?-->)(.|\n)*(<!-- ${tag}:END -->)`,
		'gm'
	)

	return content.replace(tagRegex, `$1${text}$3`)
}

export async function read(stream: NodeJS.ReadStream): Promise<string> {
	const chunks = []
	for await (const chunk of stream) chunks.push(chunk)
	return Buffer.concat(chunks).toString('utf8')
}

export function write(stream: NodeJS.WriteStream, data: string) {
	stream.write(Buffer.from(data))
}

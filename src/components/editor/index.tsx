import Checklist from '@editorjs/checklist'
import CodeTool from '@editorjs/code'
import EditorJS, { OutputData } from '@editorjs/editorjs'
import Embed from '@editorjs/embed'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'
import InlineCode from '@editorjs/inline-code'
import List from '@editorjs/list'
import Marker from '@editorjs/marker'
import Quote from '@editorjs/quote'
import Warning from '@editorjs/warning'
import { useEffect } from 'react'

let nookEditor: EditorJS

type Props = {
	content: OutputData | null | undefined
}

const Editor = ({ content }: Props) => {
	useEffect(() => {
		nookEditor = new EditorJS({
			holder: 'editorjs',
			readOnly: true,
			tools: {
				header: {
					class: Header, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
					config: {
						levels: [2, 3, 4, 5],
						defaultLevel: 2,
					},
				},
				list: {
					class: List, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
					inlineToolbar: true,
				},
				checklist: {
					class: Checklist, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
					inlineToolbar: true,
				},
				quote: {
					class: Quote, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
					inlineToolbar: true,
				},
				Marker: {
					class: Marker, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
				},
				inlineCode: {
					class: InlineCode, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
				},
				code: CodeTool, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
				warning: {
					class: Warning, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
					inlineToolbar: true,
				},
				embed: {
					class: Embed, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
					config: {
						services: {
							youtube: true,
							coub: true,
						},
					},
					inlineToolbar: true,
				},
				image: {
					class: ImageTool, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
				},
			},
			data: content || undefined,
		})

		return () => {
			nookEditor.isReady
				.then(() => {
					nookEditor.destroy()
				})
				.catch((e) => console.error('ERROR editor cleanup', e))
		}
	}, [content])

	return <div className="editor-main" id="editorjs" />
}

export default Editor

import { OutputData } from '@editorjs/editorjs'

export type CategoryType = {
	id: number
	name: string
	description?: string
	created_at?: string
	updated_at?: string
	user_id: string
	image_url: string
}

export type ArticleType = {
	id: number
	slug: string
	title: string
	word: string
	ispublished: boolean
	created_at: Date
	updated_at: Date
	user_id: string
	content: OutputData | null
	categories: number[]
}

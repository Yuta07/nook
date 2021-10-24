import { GetStaticPaths, GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { NextSeo } from 'next-seo'
import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js'

import { Layout } from '@components/common/Layout'
import { Category } from '@components/domain/category'
import type { CategoryState } from '@contexts/categories'
import { supabase } from '@/supabase/supabaseClient'

export const getStaticPaths: GetStaticPaths = async () => {
	const { data }: PostgrestResponse<CategoryState> = await supabase.from('categories').select()

	const result = data || []

	const paths = result.map((data) => ({
		params: { category: data.name, id: data.id.toString() },
	}))

	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: category }: PostgrestSingleResponse<CategoryState> = await supabase
		.from('categories')
		.select()
		.eq('name', params?.category)
		.single()

	const { data }: PostgrestResponse<CategoryState> = await supabase
		.from('articles')
		.select()
		.contains('categories', [category?.id])

	return {
		props: {
			articles: {
				data,
			},
		},
		revalidate: 86400,
	}
}

const CategoryPage = ({ articles }) => {
	return (
		<>
			<NextSeo title="Home" />
			<Category />
		</>
	)
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default CategoryPage

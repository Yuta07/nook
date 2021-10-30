import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { ReactElement } from 'react'

import type { CategoryType } from '@/types/category'

import { supabase } from '@/supabase/supabaseClient'
import { Layout } from '@components/common/Layout'
import { Category } from '@components/domain/category'

export const getStaticPaths: GetStaticPaths = async () => {
	const { data }: PostgrestResponse<CategoryType> = await supabase.from('categories').select()

	const result = data || []

	const paths = result.map((data) => ({
		params: { category: data.name, id: data.id.toString() },
	}))

	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: category }: PostgrestSingleResponse<CategoryType> = await supabase
		.from('categories')
		.select()
		.eq('name', params?.category)
		.single()

	const { data: articles }: PostgrestResponse<CategoryType> = await supabase
		.from('articles')
		.select()
		.contains('categories', [category?.id])

	return {
		props: {
			articles,
			category,
		},
		revalidate: 86400,
	}
}

const CategoryPage = ({ articles, category }: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(articles)
	return (
		<>
			<NextSeo title="Home" />
			<Category category={category} />
		</>
	)
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default CategoryPage

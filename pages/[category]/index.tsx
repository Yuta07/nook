import { PostgrestResponse, PostgrestSingleResponse } from '@supabase/supabase-js'
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { ReactElement } from 'react'

import type { ArticleType, CategoryType } from '@/types/category'

import { supabase } from '@/supabase/supabaseClient'
import { CategoryLayout } from '@components/common/CategoryLayout'
import { Category } from '@components/domain/category'
import { ArticleCard } from '@components/domain/category/ArticleCard'

export const getStaticPaths: GetStaticPaths = async () => {
	const { data }: PostgrestResponse<CategoryType> = await supabase.from('categories').select()

	const result = data || []

	const paths = result.map((data) => ({
		params: { category: data.name, id: data.id.toString() },
	}))

	return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const { data: category }: PostgrestSingleResponse<CategoryType> = await supabase
		.from('categories')
		.select()
		.eq('name', params?.category)
		.single()

	const { data: articles }: PostgrestResponse<ArticleType> = await supabase
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
	return (
		<>
			<NextSeo title={`${category ? category?.name : ''} / Category`} />
			<Category category={category} />
			{articles?.map((article) => {
				return <ArticleCard key={article.id} article={article} />
			})}
		</>
	)
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
	return <CategoryLayout>{page}</CategoryLayout>
}

export default CategoryPage

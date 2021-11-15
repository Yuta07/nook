import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { ReactElement } from 'react'

import type { ArticleType } from '@/types/category'

import { supabase } from '@/supabase/supabaseClient'
import { ArticleLayout } from '@components/common/ArticleLayout'

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const { article_slug } = params as { category: string; article_slug: string }

	const { data: article }: PostgrestSingleResponse<ArticleType> = await supabase
		.from('articles')
		.select()
		.eq('slug', article_slug)
		.single()

	return {
		props: {
			article,
		},
		revalidate: 86400,
	}
}

const ArticlePage = ({ article }: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(article)
	return (
		<>
			<NextSeo title="Home" />
			<div>
				<h1>article</h1>
			</div>
		</>
	)
}

ArticlePage.getLayout = function getLayout(page: ReactElement) {
	return <ArticleLayout>{page}</ArticleLayout>
}

export default ArticlePage

import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'

import type { ArticleType } from '@/types/category'

import { supabase } from '@/supabase/supabaseClient'
import { ArticleLayout } from '@components/common/ArticleLayout'
import { ArticleBody } from '@components/domain/category/article/ArticleBody'
import { ArticleFooter } from '@components/domain/category/article/ArticleFooter'
import { ArticleHeader } from '@components/domain/category/article/ArticleHeader'

const Editor = dynamic(() => import('../../src/components/editor'), { ssr: false })

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
	return (
		<>
			<NextSeo title="Home" />
			{article ? (
				<>
					<ArticleHeader article={article} />
					<ArticleBody>
						<Editor content={article.content} />
					</ArticleBody>
					<ArticleFooter article={article} />
				</>
			) : null}
		</>
	)
}

ArticlePage.getLayout = function getLayout(page: ReactElement) {
	return <ArticleLayout>{page}</ArticleLayout>
}

export default ArticlePage

import Link from 'next/link'

import styles from './ArticleHeader.module.scss'

import { ArticleType } from '@/types/category'
import { Time } from '@components/ui/Time'
import { useCategoriesState } from '@contexts/categories'

type Props = {
	article: ArticleType
}

export const ArticleFooter = ({ article }: Props) => {
	const { categories } = useCategoriesState()

	if (categories === null) return null

	console.log(article)
	console.log(categories)

	const allCategoriesId = article.categories.filter((category) => {
		return category
	})

	return (
		<div className={styles.container}>
			<div className={styles.author}>
				<p>Author</p>
				<p>Yutaka Miyazaki</p>
			</div>
			<div>
				<p>Categories</p>
				<p>
					{allCategoriesId.map((category) => {
						const tag = categories.find((cate) => {
							return cate.id === category
						})

						if (!tag) return null

						return (
							<Link key={category} href={`/${tag.name}`}>
								{tag.name}
							</Link>
						)
					})}
				</p>
			</div>
			<div>
				<p>Updated</p>
				<p>
					<Time>{article.updated_at.toString().slice(0, 10)}</Time>
				</p>
			</div>
		</div>
	)
}

import Link from 'next/link'

import styles from './ArticleFooter.module.scss'

import { ArticleType } from '@/types/category'
import { Time } from '@components/ui/Time'
import { useCategoriesState } from '@contexts/categories'

type Props = {
	article: ArticleType
}

export const ArticleFooter = ({ article }: Props) => {
	const { categories } = useCategoriesState()

	if (categories === null) return null

	const allCategoriesId = article.categories.filter((category) => {
		return category
	})

	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<p className={styles.key}>Author</p>
				<p className={styles.value}>Yutaka Miyazaki</p>
			</div>
			<div className={styles.box}>
				<p className={styles.key}>Categories</p>
				<p className={styles.value}>
					{allCategoriesId.map((category) => {
						const tag = categories.find((cate) => {
							return cate.id === category
						})

						if (!tag) return null

						return (
							<Link key={category} href={`/${tag.name}`}>
								<a className={styles.tag}>{tag.name}</a>
							</Link>
						)
					})}
				</p>
			</div>
			<div className={styles.box}>
				<p className={styles.key}>Updated</p>
				<p className={styles.value}>
					<Time className={styles.updated}>{article.updated_at.toString().slice(0, 10)}</Time>
				</p>
			</div>
		</div>
	)
}

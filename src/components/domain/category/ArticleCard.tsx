import dayjs from 'dayjs'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './ArticleCard.module.scss'

import type { ArticleType } from '@/types/category'

import { Time } from '@components/ui/Time'

type Props = {
	article: ArticleType
}

export const ArticleCard = ({ article }: Props) => {
	const router = useRouter()
	const { category } = router.query

	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<p className={styles.posted}>
					<Time>{dayjs(article.created_at).format('MMMM DD YYYY')}</Time>
				</p>
				<Link href={`/${category}/${article.slug}`}>
					<a className={styles.anchor}>
						<h2 className={styles.title}>{article.title}</h2>
					</a>
				</Link>
			</div>
		</div>
	)
}

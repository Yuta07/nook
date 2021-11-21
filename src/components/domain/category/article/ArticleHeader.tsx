import styles from './ArticleHeader.module.scss'

import { ArticleType } from '@/types/category'

type Props = {
	article: ArticleType
}

export const ArticleHeader = ({ article }: Props) => {
	console.log(article)
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>asdf</h1>
		</div>
	)
}

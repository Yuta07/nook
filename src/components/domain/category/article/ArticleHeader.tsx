import styles from './ArticleHeader.module.scss'

import { ArticleType } from '@/types/category'

type Props = {
	article: ArticleType
}

export const ArticleHeader = ({ article }: Props) => {
	return (
		<div>
			<h1 className={styles.title}>{article.title}</h1>
			{article.word && <p className={styles.word}>{article.word}</p>}
		</div>
	)
}

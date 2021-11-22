import { FC, ReactNode } from 'react'

import styles from './ArticleBody.module.scss'

export const ArticleBody: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}

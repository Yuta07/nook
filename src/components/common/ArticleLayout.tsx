import { ReactNode, VFC } from 'react'

import styles from './Layout.module.scss'

import { Header } from '@components/common/Header'

export const ArticleLayout: VFC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.articleContainer}>{children}</main>
		</>
	)
}

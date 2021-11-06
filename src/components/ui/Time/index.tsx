import { FC, ReactNode } from 'react'

import styles from './Time.module.scss'

export const Time: FC<{ children: ReactNode }> = ({ children }) => {
	return <time className={styles.root}>{children}</time>
}

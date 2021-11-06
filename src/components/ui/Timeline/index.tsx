import { FC, ReactNode } from 'react'

import styles from './Timeline.module.scss'

export const Timeline: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className={styles.root}>{children}</div>
}

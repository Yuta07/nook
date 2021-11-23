import classnames from 'classnames'
import { FC, ReactNode } from 'react'

import styles from './Time.module.scss'

export const Time: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
	return <time className={classnames(styles.root, className)}>{children}</time>
}

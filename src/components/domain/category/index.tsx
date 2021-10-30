import styles from './Category.module.scss'

import { CategoryType } from '@/types/category'

type Props = {
	category: CategoryType
}

export const Category = ({ category }: Props) => {
	console.log(category)

	return (
		<div className={styles.container}>
			<p>about category</p>
		</div>
	)
}

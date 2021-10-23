import { Category } from './Category'
import { useCategoriesState } from '@contexts/categories'

import styles from './Categories.module.scss'

export const Categories = () => {
	const state = useCategoriesState()

	if (state.categories === null) return null

	return (
		<div className={styles.container}>
			{state.categories.map((category) => {
				return <Category key={category.name} category={category} />
			})}
		</div>
	)
}

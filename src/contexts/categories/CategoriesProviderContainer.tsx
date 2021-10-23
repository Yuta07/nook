import { createContext, ReactNode, VFC } from 'react'

import { useFetchCategories } from '@hooks/useCategories'

export type CategoryState = {
	id: number
	name: string
	description?: string
	created_at?: string
	updated_at?: string
	user_id: string
	image_url: string
}

type Props = {
	children: ReactNode
}

export const CategoriesStateContext = createContext<{ categories: CategoryState[] | null }>({ categories: null })

export const CategoriesProviderContainer: VFC<Props> = (props) => {
	const { categories } = useFetchCategories()

	return <CategoriesStateContext.Provider value={{ categories }}>{props.children}</CategoriesStateContext.Provider>
}

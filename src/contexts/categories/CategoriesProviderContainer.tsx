import { createContext, ReactNode, VFC } from 'react'

import { CategoryType } from '@/types/category'
import { useFetchCategories } from '@hooks/useCategories'

type Props = {
	children: ReactNode
}

export const CategoriesStateContext = createContext<{ categories: CategoryType[] | null }>({ categories: null })

export const CategoriesProviderContainer: VFC<Props> = (props) => {
	const { categories } = useFetchCategories()

	return <CategoriesStateContext.Provider value={{ categories }}>{props.children}</CategoriesStateContext.Provider>
}

import { useEffect, useState } from 'react'
import { PostgrestResponse } from '@supabase/supabase-js'

import type { CategoryState } from '@contexts/categories'
import { supabase } from '../supabase/supabaseClient'

export const useFetchCategories = () => {
	const [categories, setCategories] = useState<CategoryState[] | null>(null)

	useEffect(() => {
		let didCancel = false

		const requestCategories = async () => {
			try {
				const { data }: PostgrestResponse<CategoryState> = await supabase.from('categories').select()

				if (data && !didCancel) {
					setCategories(data)
				}
			} catch (e) {
				console.log(e)
			}
		}

		requestCategories()

		return () => {
			didCancel = true
		}
	}, [])

	return { categories }
}

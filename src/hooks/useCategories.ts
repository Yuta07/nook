import { PostgrestResponse } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

import { supabase } from '../supabase/supabaseClient'

import type { CategoryType } from '@/types/category'

export const useFetchCategories = () => {
	const [categories, setCategories] = useState<CategoryType[] | null>(null)

	useEffect(() => {
		let didCancel = false

		const requestCategories = async () => {
			try {
				const { data }: PostgrestResponse<CategoryType> = await supabase.from('categories').select()

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

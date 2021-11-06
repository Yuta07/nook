import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from './Category.module.scss'

import { supabase } from '@/supabase/supabaseClient'
import { CategoryType } from '@/types/category'

type Props = {
	category: CategoryType | null
}

export const Category = ({ category }: Props) => {
	const [imageUrl, setImageUrl] = useState<string>('')

	useEffect(() => {
		async function downloadImage() {
			try {
				const { data, error } = await supabase.storage.from('categories').download(category?.image_url || '')

				if (error) {
					throw error
				}

				const url = URL.createObjectURL(data)

				setImageUrl(url)
			} catch (error) {
				alert(`Error downloading image:, category_${category?.name}.`)
			}
		}

		if (category?.image_url === null) {
			setImageUrl('/logo_white.svg')

			return
		}

		downloadImage()
	}, [category])

	if (!imageUrl) return null

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<Image
					src={imageUrl}
					alt={category?.name || ''}
					className={styles.image}
					width={40}
					height={40}
					objectFit="contain"
				/>
				<h2 className={styles.title}>{category?.name}</h2>
			</div>
			<p className={styles.description}>{category?.description}</p>
		</div>
	)
}

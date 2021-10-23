import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type { CategoryState } from '@contexts/categories'
import { supabase } from '@/supabase/supabaseClient'

import styles from './Category.module.scss'

type Props = {
	category: CategoryState
}

export const Category = ({ category }: Props) => {
	const [imageUrl, setImageUrl] = useState<string>('')

	useEffect(() => {
		async function downloadImage() {
			try {
				const { data, error } = await supabase.storage.from('categories').download(category.image_url)

				if (error) {
					throw error
				}

				const url = URL.createObjectURL(data)

				setImageUrl(url)
			} catch (error) {
				alert(`Error downloading image:, category_${category.name}.`)
			}
		}

		if (category.image_url === null) return

		downloadImage()
	}, [])

	return (
		<Link href={`/${category.name}`}>
			<a className={styles.container}>
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt={category.name}
						width={48}
						height={48}
						objectFit="contain"
						className={styles.image}
					/>
				) : null}
				<p className={styles.name}>{category.name}</p>
			</a>
		</Link>
	)
}

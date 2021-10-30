import { NextSeo } from 'next-seo'

import type { NextPage } from 'next'

import { Categories, Cta } from '@components/domain/home'
import styles from 'src/styles/Home.module.scss'

const HomePage: NextPage = () => {
	return (
		<>
			<NextSeo title="Home" />
			<div className={styles.container}>
				<Cta />
				<Categories />
			</div>
		</>
	)
}

export default HomePage

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

import { Head } from '@components/common/Head'
import { CategoriesProviderContainer } from '@contexts/categories'

import '@styles/global.scss'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page)

	return getLayout(
		<CategoriesProviderContainer>
			<Head />
			<Component {...pageProps} />
		</CategoriesProviderContainer>
	)
}

export default MyApp

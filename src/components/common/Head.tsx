import { DefaultSeo } from 'next-seo'
import NextHead from 'next/head'

import config from '@config/seo.json'

export const Head = () => {
	return (
		<>
			<DefaultSeo {...config} />
			<NextHead>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</NextHead>
		</>
	)
}

import { NextSeo } from 'next-seo'

import type { NextPage } from 'next'

const ArticlePage: NextPage = () => {
	return (
		<>
			<NextSeo title="Home" />
			<div>
				<h1>article</h1>
			</div>
		</>
	)
}

export default ArticlePage

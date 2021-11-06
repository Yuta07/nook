import { ReactNode, VFC } from 'react'

export const ArticleLayout: VFC<{ children: ReactNode }> = ({ children }) => {
	return <main>{children}</main>
}

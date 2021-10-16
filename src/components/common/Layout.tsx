import { ReactNode, VFC } from 'react'

export const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<main>{children}</main>
		</>
	)
}

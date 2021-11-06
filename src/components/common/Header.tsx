import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.container}>
			<Link href="/">
				<a>
					<Image
						src="/logo_white.svg"
						alt="nook_logo"
						className={styles.logo}
						width={120}
						height={32}
						objectFit="cover"
					/>
				</a>
			</Link>
		</header>
	)
}

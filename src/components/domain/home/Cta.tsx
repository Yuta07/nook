import Image from 'next/image'

import styles from './Cta.module.scss'

export const Cta = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Image src="/logo_white.svg" alt="nook_logo_cta" width={480} height={48} />
			</div>
			<div className={styles.inner}>
				<div>
					<h1 className={styles.hero}>Base for me.</h1>
					<p className={styles.description}>
						nookはナレッジとして残したいけれど、ブログに書くのはちょっと違うなと思ったコードを蓄積していく場所です。時間をかけて少しずつコンテンツを増やしていきます。
					</p>
				</div>
				<div className={styles.author}>
					<h3>Author</h3>
					<div className={styles.profileImg}>
						<Image src="/home/profile.jpg" alt="author_image" width={120} height={120} objectFit="cover" />
					</div>
					<h2 className={styles.authorName}>y_miyazaki</h2>
					<div className={styles.links}>
						<a href="https://github.com/Yuta07" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
							<Image src="/home/github.svg" alt="github" width={20} height={20} />
						</a>
						<a href="https://github.com/Yuta07" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
							<Image src="/home/twitter.svg" alt="twitter" width={20} height={20} />
						</a>
						<a
							href="https://yutaaaaa.vercel.app/resume"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.anchor}
						>
							<Image src="/home/resume.svg" alt="resume" width={20} height={20} />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

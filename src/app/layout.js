import Navbar from './components/navbar'
import Footer from './components/footer'
import Image from 'next/image';
import './globals.css'

export const metadata = {
	title: 'Rituraj Paul | Portfolio',
	description: 'This is my portfolio. Welcome to my world!',
  keywords: ["developer", "portfolio", "MERN developer", "Next.js developer", "Linux Enthusiast", "Full stack developer", "programmer", "vercel"]
}

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body>
					<div className="parent">
					<div className="top_left_image">
						<Image
							src="/home/top-left.webp"
							alt="top-left"
							width={400}
							height={400}
						/>
					</div>
					<div className="bottom_right_image">
						<Image
							src="/home/bulb.webp"
							alt="bottom-right"
							width={256}
							height={392}
						/>
					</div>


					<Navbar />
					{children}
					<Footer />
				</div>
				

			</body>
		</html>
	)
}

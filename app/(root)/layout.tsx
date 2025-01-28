
import '@/app/globals.css'
import type { Metadata } from "next"

import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants/index"
import Header from '@/components/shared/header'
import Footer from '@/components/footer'

//this one is working
export const metadata: Metadata = {
	title: {
		template: `%s | ${APP_NAME}`,
		default: APP_NAME
	},		
	description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
}


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
		<Header/>
			<div className="flex h-screen flex-col">
				<main className="flex-1 wrapper">
					{children}
				</main>
			</div>
			<Footer />
			</>
	)
}

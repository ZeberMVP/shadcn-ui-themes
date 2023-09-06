import { Metadata } from 'next'
import './globals.css'

import { ThemeProvider } from '@/components/Providers'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Toaster as DefaultToaster } from '@/registry/default/ui/Toaster'
import { Toaster as NewYorkToaster } from '@/registry/new-york/ui/Toaster'

import { ExamplesNav } from '@/components/ExamplesNav'
import {
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from '@/components/PageHeader'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'Next.js',
		'React',
		'Tailwind CSS',
		'Server Components',
		'Radix UI',
	],
	authors: [
		{
			name: 'ZeberMVP',
			url: 'https://rubenzafra.com',
		},
	],
	creator: 'ZeberMVP',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang='en' suppressHydrationWarning>
				<head />
				<body
					className={cn(
						'min-h-screen bg-background font-sans antialiased',
						fontSans.variable
					)}
				>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<div className='relative flex min-h-screen flex-col'>
							<SiteHeader />
							<div className='flex-1'>
								<div className='container relative'>
									<PageHeader className='page-header pb-8'>
										<PageHeaderHeading className='hidden md:block'>
											Check out some examples.
										</PageHeaderHeading>
										<PageHeaderHeading className='md:hidden'>
											Examples
										</PageHeaderHeading>
										<PageHeaderDescription>
											Dashboard, cards, authentication. Some examples built
											using the components. Use this as a reference when
											selecting a theme.
										</PageHeaderDescription>
									</PageHeader>
									<section>
										<ExamplesNav />
										<div className='overflow-hidden rounded-[0.5rem] border bg-background shadow'>
											{children}
										</div>
									</section>
								</div>
							</div>
							<SiteFooter />
						</div>
						<TailwindIndicator />
					</ThemeProvider>
					<ThemeSwitcher />
					<NewYorkToaster />
					<DefaultToaster />
				</body>
			</html>
		</>
	)
}

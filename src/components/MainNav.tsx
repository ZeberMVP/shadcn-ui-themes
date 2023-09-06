'use client'

import Link from 'next/link'

import { Icons } from '@/components/Icons'
import { siteConfig } from '@/config/site'

export function MainNav() {
	return (
		<div className='mr-4 flex'>
			<Link href='/' className='mr-6 flex items-center space-x-2'>
				<Icons.logo className='h-6 w-6' />
				<span className='font-bold inline-block whitespace-nowrap'>
					{siteConfig.name}
				</span>
			</Link>
		</div>
	)
}

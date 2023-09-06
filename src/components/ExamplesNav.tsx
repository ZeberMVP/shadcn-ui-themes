'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/registry/new-york/ui/ScrollArea'

const examples = [
	{
		name: 'Dashboard',
		href: '/',
		code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard',
	},
	{
		name: 'Cards',
		href: '/cards',
		code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/cards',
	},
	{
		name: 'Tasks',
		href: '/tasks',
		code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks',
	},
	{
		name: 'Playground',
		href: '/playground',
		code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/playground',
	},
	{
		name: 'Forms',
		href: '/forms',
		code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms',
	},
	{
		name: 'Music',
		href: '/music',
		code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/music',
	},
	{
		name: 'Authentication',
		href: '/authentication',
		code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/authentication',
	},
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
	const pathname = usePathname()

	return (
		<div className='relative'>
			<ScrollArea className='max-w-[600px] lg:max-w-none'>
				<div className={cn('mb-4 flex items-center', className)} {...props}>
					{examples.map((example) => (
						<Link
							href={example.href}
							key={example.href}
							className={cn(
								'flex items-center px-4',
								pathname?.endsWith(example.href)
									? 'font-bold text-primary'
									: 'font-medium text-muted-foreground'
							)}
						>
							{example.name}
						</Link>
					))}
				</div>
				<ScrollBar orientation='horizontal' className='invisible' />
			</ScrollArea>
		</div>
	)
}

import Image from 'next/image'

import { cn } from '@/lib/utils'

import { DemoCookieSettings } from './components/CookieSettings'
import { DemoCreateAccount } from './components/CreateAccount'
import { DemoDatePicker } from './components/DatePicker'
import { DemoGithub } from './components/GithubCard'
import { DemoNotifications } from './components/Notifications'
import { DemoPaymentMethod } from './components/PaymentMethod'
import { DemoReportAnIssue } from './components/ReportAnIssue'
import { DemoShareDocument } from './components/ShareDocument'
import { DemoTeamMembers } from './components/TeamMembers'

function DemoContainer({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				'flex items-center justify-center [&>div]:w-full',
				className
			)}
			{...props}
		/>
	)
}

export default function CardsPage() {
	return (
		<>
			<div className='md:hidden'>
				<Image
					src='/cards-light.png'
					width={1280}
					height={1214}
					alt='Cards'
					className='block dark:hidden'
				/>
				<Image
					src='/cards-dark.png'
					width={1280}
					height={1214}
					alt='Cards'
					className='hidden dark:block'
				/>
			</div>
			<div className='hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3'>
				<div className='col-span-2 grid items-start gap-6 lg:col-span-1'>
					<DemoContainer>
						<DemoCreateAccount />
					</DemoContainer>
					<DemoContainer>
						<DemoPaymentMethod />
					</DemoContainer>
				</div>
				<div className='col-span-2 grid items-start gap-6 lg:col-span-1'>
					<DemoContainer>
						<DemoTeamMembers />
					</DemoContainer>
					<DemoContainer>
						<DemoShareDocument />
					</DemoContainer>
					<DemoContainer>
						<DemoDatePicker />
					</DemoContainer>
					<DemoContainer>
						<DemoNotifications />
					</DemoContainer>
				</div>
				<div className='col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1'>
					<DemoContainer>
						<DemoReportAnIssue />
					</DemoContainer>
					<DemoContainer>
						<DemoGithub />
					</DemoContainer>
					<DemoContainer>
						<DemoCookieSettings />
					</DemoContainer>
				</div>
			</div>
		</>
	)
}

import DatePickerWithRange from '@/registry/default/example/DatePickerWithRange'
import { Card, CardContent } from '@/registry/new-york/ui/Card'
import { Label } from '@/registry/new-york/ui/Label'

export function DemoDatePicker() {
	return (
		<Card>
			<CardContent className='pt-6'>
				<div className='space-y-2'>
					<Label htmlFor='date' className='shrink-0'>
						Pick a date
					</Label>
					<DatePickerWithRange className='[&>button]:w-[260px]' />
				</div>
			</CardContent>
		</Card>
	)
}

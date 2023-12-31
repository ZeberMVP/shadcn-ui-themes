'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

import { TooltipProvider } from '@/registry/new-york/ui/Tooltip'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider {...props}>
			<TooltipProvider>{children}</TooltipProvider>
		</NextThemesProvider>
	)
}

"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent,  DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"


const Modetoggle = () => {
	// * use this when getting error about hydration, because the component is not mounted yet.
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if(!mounted) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'ghost'} className="focus-visible:ring-0 focus-visible:ring-offset-0">
					<DropdownMenuLabel>
						{theme === 'system' ? (
							<SunMoonIcon />
						) : theme === 'dark' ? (
							<SunIcon />
						) : (
							<MoonIcon />

						)}
					</DropdownMenuLabel>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
					System
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
					Light
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default Modetoggle

import { Button } from "@/components/ui/button"
import Modetoggle from "./Mode-Toggle"
import Link from "next/link"
import { EllipsisVertical, ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import UserButton from "./User-Button"

const Menu = () => {
	return (
		<div className="flex justify-end gap-3">
			<nav className="hidden md:flex w-full max-w-xs gap-1">
			<Modetoggle />
					<Button variant={'ghost'} asChild>
						<Link href="/cart">
							<ShoppingCart />
							Cart
						</Link>
					</Button>
					<UserButton />
			</nav>
			<nav className="md:hidden">
				<Sheet>
					<SheetTrigger className="align-middle">
						<EllipsisVertical />
					</SheetTrigger>
					<SheetContent className="flex flex-col gap-2 items-start">
						<SheetTitle>
							Menu
						</SheetTitle>
						<Modetoggle />
						<Button variant={'ghost'} asChild>
							<Link href="/cart">
								<ShoppingCart />
								Cart
							</Link>
							</Button>
							<UserButton />
						<SheetDescription></SheetDescription>

					</SheetContent>
				</Sheet>
			</nav>
		</div>
	)
	
}

export default Menu

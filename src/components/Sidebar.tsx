import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { Button } from "./ui/button";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="w-[90%] h-[100vh] sm:w-[540px] bg-[#794827] justify-center items-center">
                <SheetHeader>
                    <SheetTitle>

                    </SheetTitle>
                    <SheetDescription>

                        {/* <Button
                              variant="link"
                              className={cn("w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800")}
                              asChild
                          >
                              <Link href="/menu" className="flex gap-2 py-6"><Dock /> <span>Menu</span></Link>
                          </Button>
                          <Button
                              asChild
                              variant="link"
                              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                          >
                              <Link href="/about-us" className="flex gap-2 py-6"><ShieldQuestion /> <span>About</span> </Link>
                          </Button>
                          <Button
                              variant="link"
                              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                              asChild
                          >
                              <Link href="/contact" className="flex gap-2 py-6"><Phone /> <span>Contact</span></Link>
                          </Button>
                          <Button
                              asChild
                              variant="link"
                              className="w-full flex justify-start px-1 p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                          >
                              <Link href="/table-booking" className="flex gap-2 py-6"><BookCheck /> <span>Booking</span> </Link>
                          </Button>
                          <Button
                              asChild
                              variant="link"
                              className="w-full flex justify-start p-0 uppercase text-accent text-white"
                          >
                              <Link href="/gift-voucher" className="flex gap-2 py-6" ><Gift /> <span>Gift Voucher</span></Link>
                          </Button> */}
                    </SheetDescription>
                </SheetHeader>
                <div className="w-full h-[95vh] flex flex-col items-center justify-center gap-14">
                    <Image src="/images/home/logo.png" width={105} height={73} alt="Foodo" />
                    <div className="flex w-full flex-col items-center justify-center gap-10 pt-14">
                        <Link
                            href="/"
                            className="font-jost uppercase flex w-full justify-center p-0 text-2xl font-[400] text-accent text-white tracking-[1.2px]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/menu"
                            className="font-jost flex w-full justify-center p-0 text-2xl uppercase font-[400] text-accent text-white tracking-[1.2px]"
                        >
                            Menu
                        </Link>
                        {/* <Link
                            href="/about-us"
                            className="font-playfair flex w-full justify-start p-0 text-4xl font-normal text-accent text-white"
                        >
                            About
                        </Link> */}
                        <Link
                            href="/about-us"
                            className="font-jost flex w-full justify-center p-0 text-2xl uppercase font-[400] text-accent text-white tracking-[1.2px]"
                        >
                            About{' '}Us
                        </Link>
                        <Link
                            href="/contact"
                            className="font-jost flex w-full justify-center p-0 text-2xl uppercase font-[300] text-accent text-white tracking-[1.2px]"
                        >
                            Contact
                        </Link>
                    </div>
                    <Link href="/menu" className="w-full flex justify-center items-center pt-14">
                        <Button
                            variant="outline"
                            className="w-4/5 flex items-center text-2xl font-jost justify-center gap-3 rounded-none border-[#b58c67] px-6 py-10 tracking-[1.2px] uppercase"
                        >
                            View Menu
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
import SearchBox from "@/components/client/SearchBox";
import CartIcon from "@/components/client/CartIcon";

import authToken from "@/lib/token";
import signOut from "@/lib/signout";

function Header({ token }) {
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header>
      <nav className="flex items-center justify-between h-16 p-4 bg-slate-400 text-white ">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-64 md:w-72 bg-slate-300 dark:bg-slate-400"
            >
              <SheetHeader>
                <SheetTitle className="text-xl font-semibold font-mono text-center">
                  Product Zone
                </SheetTitle>
                {menuItems.map((item, index) => (
                  <div className="dark:text-white text-center py-2" key={index}>
                    <Link href={item.link}>{item.name}</Link>
                  </div>
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div>
            <Link
              href="/"
              className="ml-2 font-bold inline-block md:text-xl md:block "
            >
              <span>Product</span> <span>Zone</span>
            </Link>
          </div>
        </div>
        <SearchBox />
        <div className="flex justify-between items-center gap-1 sm:gap-2 md:gap-6">
          <ModeToggle />
          <CartIcon />
          {(token && (
            <Button
              variant="outline"
              className="text-black dark:text-white hover:border text-center mx-2"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          )) || (
            <Button
              variant="outline"
              className="text-black dark:text-white hover:border text-center mx-2"
            >
              <Link href="/auth/login">Sign In</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

function CartIcon() {
  const items = useSelector((state) => state.cart);

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className=" text-white dark:text-black" />
      <div className="-top-4 absolute -right-4">
        {items.length > 0 && (
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-yellow-400 p-3 text-xs text-black">
            {items.length}
          </p>
        )}
      </div>
    </Link>
  );
}

export default CartIcon;

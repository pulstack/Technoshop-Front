"use client";

import React from "react";
import Logo from "@/assets/images/LogoVector.png";
import Image from "next/image";
import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import SearchModal from "./SearchModal";
import { useCart } from "./store/useCart";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useFavorites } from "./store/useFavorite";

const Header = () => {
  const { products } = useCart();
  const { favorites } = useFavorites();
  const pathname = usePathname();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-4 xl:gap-[56px] justify-between mb-10 mx-auto max-w-[1440px] px-10 lg:px-32 py-5">
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          width={65}
          height={22}
          className="min-w-[65px]"
        />
      </Link>

      <SearchModal />

      <div className="flex items-center justify-between gap-4 lg:gap-6">
        <Link
          href="/"
          className={`font-medium lg:text-lg ${
            pathname === "/" ? "text-black" : "text-gray-400"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`font-medium lg:text-lg ${
            pathname === "/about" ? "text-black" : "text-gray-400"
          }`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={cn(
            `whitespace-nowrap font-medium lg:text-lg ${
              pathname === "/contact" ? "text-black" : "text-gray-400"
            }`
          )}
        >
          Contact Us
        </Link>
        <Link
          href="/blog"
          className={`font-medium lg:text-lg ${
            pathname === "/blog" ? "text-black" : "text-gray-400"
          }`}
        >
          Blog
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-between gap-3 lg:gap-6">
        <Link href={"/favorites"} className="relative">
          {mounted && favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
              {favorites.length}
            </span>
          )}
          <Heart size={23} className="text-black" />
        </Link>

        <Link href="/cart" className="relative">
          {mounted && products.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
              {products.length}
            </span>
          )}
          <ShoppingCart size={23} className="text-black" />
        </Link>

        <User size={23} className="text-black" />
      </div>
    </div>
  );
};

export default Header;

import Link from "next/link";
import React from "react";
import Image from "next/image";
import SignOut from "./auth/SignOut";
export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image
            src="/logo.png"
            height={40}
            width={120}
            alt=""
            className="object-cover "
          />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <Link href="/">Home</Link>
          </li>

          <li className="py-2">
            <Link href="/recipe">Recipe</Link>
          </li>

          <li className="py-2">
            <Link href="/about">About us</Link>
          </li>

          <SignOut></SignOut>
        </ul>
      </div>
    </nav>
  );
}

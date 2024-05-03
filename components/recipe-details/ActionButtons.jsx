"use client";
import { updateUserFav } from "@/app/actions/userActions";
import useAuth from "@/app/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ActionButtons({ id }) {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const pathName = usePathname();
  const isFav = auth?.favourites?.find((Id) => Id === id.toString());
  const [favourite, setFavourite] = useState(isFav);

  const handleToggleFavourite = async (id) => {
    if (auth) {
      await updateUserFav(id, auth?._id);
      setFavourite(!favourite);
    } else {
      alert("Please login first");
      router.push("/login");
    }
  };

  const onShare = () => {
    if (auth) {
      try {
        const url = `${pathName}`;
        if (navigator.share) {
          navigator.share({ url });
        }
      } catch (err) {
        alert("Can not share !");
      }
    } else {
      alert("Please login first !!");
      router.push("/login");
    }
  };
  return (
    <div className="flex gap-4 justify-end">
      <div
        onClick={() => handleToggleFavourite(id)}
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[rgb(235,74,54)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={favourite ? "orange" : "none"}
          stroke={favourite ? "currentColor" : "orange"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart "
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
        <span>Favourite</span>
      </div>

      <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
        <svg
          onClick={onShare}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
    </div>
  );
}

import React from "react";

export default function LoadingDetails() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-5xl text-slate-700">
        Details is fetching..... <span className="mx-2">||</span> Please wait .
      </h1>
    </div>
  );
}

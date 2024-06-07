"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";

import { GlobalContext } from "@/app/context/AppContext";
import { GlobalState } from "@/app/interfaces/interfaces";

export default function Searchbar() {
  const { globalState } = useContext(GlobalContext) as GlobalState;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handlerSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="pb-9 flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between items-center">
      <p className="self-start font-medium text-base">
        Found {globalState.totalCountries} countries
      </p>
      <label
        htmlFor="searchbar"
        className="relative py-2 pl-11 pr-10 bg-282B30 rounded-lg"
      >
        <Image
          src={"/Search.svg"}
          width={24}
          height={24}
          alt="search"
          className="absolute top-2 left-3"
        />
        <input
          type="text"
          id="searchbar"
          placeholder="Search by Name, Region, Subregion"
          className="outline-none bg-282B30 text-D2D5DA text-sm placeholder:text-6C727F font-medium sm:w-64"
          onChange={(e)=>{
            handlerSearch(e.target.value)
          }}
        />
      </label>
    </div>
  );
}
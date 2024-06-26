"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useRef } from "react";

import { GlobalContext } from "@/app/context/AppContext";
import { GlobalState } from "@/app/interfaces/interfaces";

export default function Searchbar() {
  const { globalState } = useContext(GlobalContext) as GlobalState;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }
    params.delete("page");
    replace(`${pathname}?${params}`);
  };

  const handlerCancel = () => {
    const params = new URLSearchParams(searchParams);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    params.delete("page");
    params.delete("search");
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
          ref={inputRef}
          type="text"
          id="searchbar"
          placeholder="Search by Name, Region, Subregion"
          className="outline-none bg-282B30 text-D2D5DA text-sm placeholder:text-6C727F font-medium sm:w-64"
          defaultValue={searchParams.get("search")?.toString()}
          onChange={(e) => {
            handlerSearch(e.target.value);
          }}
        />

        {searchParams.get("search") && (
          <Image
            src={"/circle-x.svg"}
            alt="cancel"
            width={16}
            height={16}
            className="absolute top-3 right-3"
            onClick={() => {
              handlerCancel();
            }}
          />
        )}
      </label>
    </div>
  );
}

"use client";

import { pagination } from "@/app/lib/pagination";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ pages }: { pages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const actualPage = Number(searchParams.get("page")) || 1;

  const nextPage = () => {
    const params = new URLSearchParams(searchParams);
    if (actualPage == pages) {
      return;
    } else {
      params.set("page", (actualPage + 1).toString());
      replace(`${pathname}?${params}`);
    }
  };

  const prevPage = () => {
    const params = new URLSearchParams(searchParams);
    if (actualPage <= 1) {
      return;
    } else {
      params.set("page", (actualPage - 1).toString());
      replace(`${pathname}?${params}`);
    }
  };

  const selectPage = (page: string) => {
    const params = new URLSearchParams(searchParams);
    if (actualPage !== Number(page)) {
      params.set("page", page);
      replace(`${pathname}?${params}`);
    }
    return;
  };

  const totalPages = pagination(pages, actualPage);

  return (
    <div className="flex justify-center items-center gap-3 *:rounded-sm mt-4">
      <Image
        src={"/caret-left.svg"}
        alt="prev"
        width={24}
        height={24}
        className={`hover:bg-282B30 ${actualPage == 1 && "cursor-not-allowed"}`}
        onClick={() => prevPage()}
      />
      {totalPages?.map((page, index) => (
        <input
          key={index}
          type="button"
          value={page}
          className={`${actualPage == page && "bg-282B30"} size-6`}
          onClick={(e) => selectPage(e.currentTarget.value)}
        />
      ))}

      <Image
        src={"/caret-right.svg"}
        alt="next"
        width={24}
        height={24}
        className={`hover:bg-282B30 ${
          actualPage == pages && "cursor-not-allowed"
        }`}
        onClick={() => nextPage()}
      />
    </div>
  );
}

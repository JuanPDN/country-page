"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

import { GlobalContext } from "@/app/context/AppContext";
import { Countries, GlobalState } from "@/app/interfaces/interfaces";
import Pagination from "@/app/ui/pagination/pagination";

export default function Table({
  countries,
  searchParams,
  currentPage,
}: {
  countries: Countries[];
  searchParams?: string;
  currentPage: number;
}) {
  const router = useRouter();
  const { globalState, setGlobalState } = useContext(
    GlobalContext
  ) as GlobalState;

  if (searchParams) {
    countries = countries.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes(searchParams.toLowerCase()) ||
        country.region.toLowerCase().includes(searchParams.toLowerCase()) ||
        country.subregion?.toLowerCase().includes(searchParams.toLowerCase())
    );
  } else {
    countries = countries.filter(
      (country) =>
        globalState.selectRegion.includes(country.region) &&
        (!globalState.independent ||
          country.independent === globalState.independent) &&
        (!globalState.unMember || country.unMember === globalState.unMember)
    );
  }

  useEffect(() => {
    setGlobalState((prevGlobalState) => ({
      ...prevGlobalState,
      totalCountries: countries.length,
    }));
  }, [countries.length]);

  const itemsPage = 12;
  const start = (currentPage - 1) * itemsPage;
  const end = itemsPage * currentPage;
  const totalPage = Math.ceil(countries.length / 12);

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className=" *:text-start *:pb-4 text-xs border-282B30 border-b-2">
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area (km²)</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody className="text-D2D5DA">
          {countries.slice(start, end).map((country, index) => (
            <tr
              key={country.cca3}
              className={`${
                index === 0 ? "*:pt-4" : "*:pt-6"
              }  *:pr-4 *:pl-0 cursor-pointer`}
              onClick={() => {
                router.push(`/country/${country.cca3}`);
              }}
            >
              <td>
                <Image
                  src={country.flags.png || country.flags.svg}
                  alt={country.flags.alt || country.name.common}
                  height={36}
                  width={56}
                  className="rounded-sm h-9 max-w-14"
                />
              </td>
              <td>{country.name.common}</td>
              <td>{country.population.toLocaleString("en-US")}</td>
              <td>{country.area.toLocaleString("en-US")}</td>
              <td>{country.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalPage >= 2 && <Pagination pages={totalPage} />}
    </div>
  );
}

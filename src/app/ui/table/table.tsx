"use client";

import Image from "next/image";
import { useContext } from "react";

import { GlobalContext } from "@/app/context/AppContext";
import { Countries, GlobalState } from "@/app/interfaces/interfaces";

export default function Table({ countries }: { countries: Countries[] }) {
  const { globalState } = useContext(GlobalContext) as GlobalState;

  countries = countries.filter((country) =>
    globalState.selectRegion.includes(country.region) &&
  (!globalState.independent || country.independent === globalState.independent) &&
  (!globalState.unMember || country.unMember === globalState.unMember)
  );

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
          {countries.map((countrie, index) => (
            <tr
              key={countrie.cca3}
              className={`${index === 0 ? "*:pt-4" : "*:pt-6"}  *:pr-4 *:pl-0`}
            >
              <td>
                <Image
                  src={countrie.flags.png || countrie.flags.svg}
                  alt={countrie.flags.alt || countrie.name.common}
                  height={36}
                  width={56}
                  className="rounded-sm h-9 max-w-14"
                />
              </td>
              <td>{countrie.name.common}</td>
              <td>{countrie.population.toLocaleString("en-US")}</td>
              <td>{countrie.area.toLocaleString("en-US")}</td>
              <td>{countrie.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

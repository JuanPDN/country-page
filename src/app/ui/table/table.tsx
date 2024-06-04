"use client";

import Image from "next/image";
import { useContext } from "react";

import { RegionContext } from "@/app/context/regionContext";
import { Countries, RegionsState } from "@/app/interfaces/interfaces";

export default function Table({ countries }: { countries: Countries[] }) {
  const { regionSelect } = useContext(RegionContext) as RegionsState;

  countries = countries.filter((countrie) =>
    regionSelect.includes(countrie.region)
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

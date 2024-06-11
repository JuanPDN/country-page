"use client";

import Image from "next/image";
import { useContext } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { GlobalContext } from "@/app/context/AppContext";
import { GlobalState } from "@/app/interfaces/interfaces";

export default function SideNav() {
  const pathname = usePathname();
  const searhcParams = useSearchParams();
  const { replace } = useRouter();
  const regions: string[] = [
    "Americas",
    "Antarctic",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const handlerFilters = (value: string) => {
    const params = new URLSearchParams(searhcParams);
    if (value) {
      params.set("order", value);
    } else {
      params.delete("order");
    }
    replace(`${pathname}?${params}`);
  };

  const handlerFilterRegion = (value: string) => {
    if (globalState.selectRegion.includes(value)) {
      setGlobalState((prevGlobalState) => ({
        ...prevGlobalState,
        selectRegion: globalState.selectRegion.filter(
          (region: string) => region !== value
        ),
      }));
    } else {
      setGlobalState((prevGlobalState) => ({
        ...prevGlobalState,
        selectRegion: [...globalState.selectRegion, value],
      }));
    }
    updateURL()
  };

  const handlerFilterunMember = (checked: boolean) => {
    setGlobalState((prevGlobalState) => ({
      ...prevGlobalState,
      unMember: checked,
    }));
    updateURL()
  };
  const handlerFilterIndependent = (checked: boolean) => {
    setGlobalState((prevGlobalState) => ({
      ...prevGlobalState,
      independent: checked,
    }));
    updateURL()
  };

  const updateURL = () => {
    const params = new URLSearchParams(searhcParams);
    params.delete("page")
    replace(`${pathname}?${params}`);
  };

  const { globalState, setGlobalState } = useContext(
    GlobalContext
  ) as GlobalState;

  return (
    <div>
      <nav className="flex flex-col gap-8 text-xs">
        <label
          className="relative flex flex-col font-bold gap-2"
          htmlFor="sort"
        >
          Sort by
          <Image
            src={"/Expand_down.svg"}
            width={16}
            height={16}
            className="size-4 absolute right-4 top-[2.3rem] pointer-events-none"
            alt="Expand_down"
          />
          <select
            className="appearance-none py-3 px-4 outline-none border-282B30 border-2 rounded-lg text-D2D5DA bg-1B1D1F"
            name="sort"
            id="sort"
            defaultValue={searhcParams.get("order") || "population"}
            onChange={(e) => {
              handlerFilters(e.target.value);
            }}
          >
            <option value="name">Name</option>
            <option value="population">Population</option>
            <option value="area">Area(Km²)</option>
          </select>
        </label>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Region</p>
          <div
            className={`flex gap-3 text-sm flex-wrap *:py-2 *:px-3 font-medium ${
              searhcParams.get("search") && "*:cursor-not-allowed"
            }`}
          >
            {regions.map((e, index) => (
              <input
                key={index}
                className={`${
                  globalState.selectRegion?.includes(e) &&
                  "bg-282B30 rounded-xl text-D2D5DA"
                }`}
                disabled={searhcParams.get("search") !== null}
                type="button"
                value={e}
                onClick={(e) => {
                  handlerFilterRegion(e.currentTarget.value);
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-2 flex-col text-xs">
          <p className="font-bold">Status</p>
          <div
            className={`flex flex-col gap-3 *:flex *:gap-3 *:items-center text-D2D5DA ${
              searhcParams.get("search") && "*:cursor-not-allowed"
            }`}
          >
            <label htmlFor="unMember" className="relative">
              <input
                type="checkbox"
                name="unMember"
                id="unMember"
                disabled={searhcParams.get("search") !== null}
                className="appearance-none size-6 border-2 border-6C727F checked:bg-4E80EE checked:border-0 rounded-md peer"
                onChange={(e) => {
                  handlerFilterunMember(e.currentTarget.checked);
                }}
              />
              <p>Member of the United Nations</p>
              <Image
                src={"/Done_round.svg"}
                height={24}
                width={24}
                alt="Done_round"
                className="absolute hidden peer-checked:block"
              />
            </label>

            <label htmlFor="independent">
              <input
                type="checkbox"
                name="independent"
                id="independent"
                disabled={searhcParams.get("search") !== null}
                className="appearance-none size-6 border-2 border-6C727F checked:bg-4E80EE checked:border-0 rounded-md peer"
                onChange={(e) => {
                  handlerFilterIndependent(e.currentTarget.checked);
                }}
              />
              <p>Independent</p>
              <Image
                src={"/Done_round.svg"}
                height={24}
                width={24}
                alt="Done_round"
                className="absolute hidden peer-checked:block"
              />
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

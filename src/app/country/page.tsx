import Image from "next/image";
import CountryCard from "@/app/ui/cards/countryCard";

export default function Country() {
  return (
    <div
      className="relative self-center -top-[60px] w-full lg:w-[720px] bg-1B1D1F lg:border-[1px] 
    border-y border-282B30 lg:rounded-xl"
    >
      <div className="relative -top-12 text-6C727F flex flex-col items-center">
        <Image
          src={"https://flagcdn.com/w320/in.png"}
          width={260}
          height={196}
          alt="bandera"
          className="w-[260px] h-[196px] rounded-xl"
        />

        <h1 className="text-[32px] text-D2D5DA font-semibold mt-8">India</h1>
        <h2 className="text-base font-medium text-D2D5DA mt-2">
          Republic of India
        </h2>
        <div
          className="my-10 flex flex-col sm:flex-row gap-10 *:flex text-D2D5DA text-sm
         *:bg-282B30 *:divide-x-[1px] *:divide-1B1D1F *:rounded-lg *:py-2"
        >
          <div className="*:px-5 *:py-2 items-center">
            <p>Population</p>
            <span>1.380.004.385</span>
          </div>
          <div className="*:px-5 *:py-2 items-center">
            <p>Area (km²)</p>
            <span>2.973.190</span>
          </div>
        </div>
        <ul
          className="flex flex-col w-full divide-y divide-282B30 border-y border-282B30 text-sm
        my-5 *:flex *:justify-between *:py-5 *:px-8"
        >
          <li>
            <p>Capital</p>
            <p className="text-D2D5DA">name capital</p>
          </li>
          <li>
            <p>Subregion</p>
            <p className="text-D2D5DA">name subregion</p>
          </li>
          <li>
            <p>Languages</p>
            <p className="text-D2D5DA">name Languages</p>
          </li>
          <li>
            <p>Currencies</p>
            <p className="text-D2D5DA">name Currencies</p>
          </li>
          <li>
            <p>Continents</p>
            <p className="text-D2D5DA">name Continents</p>
          </li>
        </ul>
        <p className="pb-4 mx-8 self-start text-sm">Neighbouring Countries</p>
        <div className="w-full">
        <div className="text-6C727F overflow-x-auto mx-8">
          <div className="flex gap-3">
            <CountryCard src={"https://flagcdn.com/w320/in.png"} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

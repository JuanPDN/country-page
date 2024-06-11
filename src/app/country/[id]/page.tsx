import Image from "next/image";
import CountryCard from "@/app/ui/cards/countryCard";
import { country } from "@/app/lib/repository";

export default async function Country({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await country(id);
  const currencies = Object.values(data?.currencies).map((name) => name.name);

  return (
    <div
      className="relative self-center -top-[60px] w-full lg:w-[720px] bg-1B1D1F lg:border-[1px] 
    border-y border-282B30 lg:rounded-xl"
    >
      <div className="relative -top-12 text-6C727F flex flex-col items-center">
        <Image
          src={data.flags.png || data.flags.svg}
          width={260}
          height={196}
          alt={data.flags.alt || data.name.common}
          className="w-[260px] h-[196px] rounded-xl"
        />

        <h1 className="text-[32px] text-D2D5DA font-semibold mt-8">
          {data.name.common}
        </h1>
        <h2 className="text-base font-medium text-D2D5DA mt-2">
          {data.name.official}
        </h2>
        <div
          className="my-10 flex flex-col sm:flex-row gap-10 *:flex text-D2D5DA text-sm
         *:bg-282B30 *:divide-x-[1px] *:divide-1B1D1F *:rounded-lg *:py-2"
        >
          <div className="*:px-5 *:py-2 items-center">
            <p>Population</p>
            <span>{data.population.toLocaleString("en-US")}</span>
          </div>
          <div className="*:px-5 *:py-2 items-center">
            <p>Area (km²)</p>
            <span>{data.area.toLocaleString("en-US")}</span>
          </div>
        </div>
        <ul
          className="flex flex-col w-full divide-y divide-282B30 border-y border-282B30 text-sm
        my-5 *:flex *:justify-between *:py-5 *:px-8"
        >
          <li>
            <p>Capital</p>
            <p className="text-D2D5DA">{data.capital}</p>
          </li>
          <li>
            <p>Subregion</p>
            <p className="text-D2D5DA">{data.subregion}</p>
          </li>
          <li>
            <p>Languages</p>
            <p className="text-D2D5DA">
              {Object.values(data.languages).join(", ")}
            </p>
          </li>
          <li>
            <p>Currencies</p>
            <p className="text-D2D5DA">{currencies.join(", ")}</p>
          </li>
          <li>
            <p>Continents</p>
            <p className="text-D2D5DA">{data.continents}</p>
          </li>
        </ul>
        {data.borders && (
          <p className="pb-4 mx-8 self-start text-sm">Neighbouring Countries</p>
        )}
        {data.borders && (
          <div className="w-full">
            <div className="text-6C727F overflow-x-auto mx-8">
              <div className="flex gap-4">
                <CountryCard neighbour={data.borders} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

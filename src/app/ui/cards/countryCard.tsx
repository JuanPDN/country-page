import { Countries } from "@/app/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";

export default async function CountryCard({
  neighbour,
}: {
  neighbour: string[];
}) {
  const neighboursData = await Promise.all(
    neighbour.map((country) => {
      return fetch(`http://localhost:3000/api/countries/${country}`).then(
        async (response) => {
          const data = await response.json();
          return data;
        }
      );
    })
  );

  const neighbours: Countries[] = neighboursData.map(
    (neighbour) => neighbour[0]
  );

  return neighbours.map((border, index) => (
    <Link
      href={`/country/${border.cca3}`}
      key={index}
      className="flex flex-col gap-2 shrink-0 pb-4"
    >
      <Image
        unoptimized
        src={border.flags.png || border.flags.svg}
        width={80}
        height={56}
        alt={border.flags.alt || border.name.common}
        className="w-20 h-14 rounded-md"
      />
      <p className="text-xs">{border.name.common}</p>
    </Link>
  ));
}

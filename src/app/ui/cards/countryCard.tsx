import Image from "next/image";
import Link from "next/link";

import { allNeighbours } from "@/app/lib/repository";

export default async function CountryCard({
  neighbour,
}: {
  neighbour: string[];
}) {

  const neighboursData = await allNeighbours(neighbour);

  return neighboursData.map((border, index) => (
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

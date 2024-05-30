import Image from "next/image";

export default function CountryCard({ src }: { src: string }) {
  return (
    <div className="flex flex-col gap-2 shrink-0">
      <Image
        src={src}
        width={80}
        height={56}
        alt="bandera"
        className="w-20 h-14 rounded-md"
      />
      <p className="text-xs">name</p>
    </div>
  );
}

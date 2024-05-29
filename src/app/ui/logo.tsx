import Image from "next/image";

export default function Logo() {
  return (
    <div className="bg-hero w-full h-72 bg-center flex justify-center">
      <Image
        src={"/Logo.svg"}
        height={25}
        width={175}
        alt="logo"
        priority={true}
        className="w-44 h-6 top-4  mt-20 xl:mt-[120px] mb-24"
      />
    </div>
  );
}

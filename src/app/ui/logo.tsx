import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="relative bg-hero w-full h-[300px] bg-center flex justify-center">
        <Image
          src={"/Logo.svg"}
          height={25}
          width={175}
          alt="logo"
          priority={true}
          className="w-44 h-6  mt-[120px]"
        />
      </div>
    </Link>
  );
}

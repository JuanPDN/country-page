import Image from "next/image";

export default function SideNav() {
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
            defaultValue={"population"}
          >
            <option value="name">Name</option>
            <option value="population">Population</option>
            <option value="area">Area(Km²)</option>
          </select>
        </label>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Region</p>
          <div className="flex gap-3 text-sm flex-wrap *:py-2 *:px-3 font-medium">
            <input
              className="bg-282B30 rounded-xl text-D2D5DA"
              type="button"
              value="Americas"
            />
            <input type="button" value="Antartic" />
            <input type="button" value="Africa" />
            <input type="button" value="Asia" />
            <input type="button" value="Europe" />
            <input type="button" value="Oceania" />
          </div>
        </div>

        <div className="flex gap-2 flex-col text-xs">
          <p className="font-bold">Status</p>
          <div className="flex flex-col gap-3 *:flex *:gap-3 *:items-center text-D2D5DA">
            <label htmlFor="unMember" className="relative">
              <input
                type="checkbox"
                name="unMember"
                id="unMember"
                className="appearance-none size-6 border-2 border-6C727F checked:bg-4E80EE checked:border-0 rounded-md peer"
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
                className="appearance-none size-6 border-2 border-6C727F checked:bg-4E80EE checked:border-0 rounded-md peer"
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

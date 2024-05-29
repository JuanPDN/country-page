import Table from "@/app/ui/table/table";
import Searchbar from "@/app/ui/searhbar/searchbar";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Home() {
  return (
    
      <main className="relative -top-12 lg:mx-9 bg-1B1D1F lg:border-[1px] border-y border-282B30 lg:rounded-xl px-8 py-9 text-6C727F">
        <Searchbar />
        <div className="grid gap-8 xl:grid-cols-[250px_auto] lg:grid-cols-[200px_auto]">
          <SideNav />
          <Table />
        </div>
      </main>
    
  );
}

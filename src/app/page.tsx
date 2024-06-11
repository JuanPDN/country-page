import Table from "@/app/ui/table/table";
import Searchbar from "@/app/ui/searchbar/searchbar";
import SideNav from "@/app/ui/dashboard/sidenav";
import { loadAllCountries, orderBy } from "@/app/lib/repository";


export default async function Home({
  searchParams,
}: {
  searchParams?: { order?: string; search?: string; page?: string };
}) {
  const countries = await loadAllCountries();
  const search = searchParams?.search;
  const order = searchParams?.order || "";
  const page = Number(searchParams?.page) || 1;

  orderBy(order, countries);

  return (
    <main className="relative -top-[60px] lg:mx-9 bg-1B1D1F lg:border-[1px] border-y border-282B30 lg:rounded-xl px-8 py-9 text-6C727F">
      <Searchbar />
      <div className="grid gap-8 xl:grid-cols-[250px_auto] lg:grid-cols-[200px_auto]">
        <SideNav />
        <Table countries={countries} searchParams={search} currentPage={page} />
      </div>
    </main>
  );
}

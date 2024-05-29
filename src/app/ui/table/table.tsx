import Image from "next/image";

export default function Table() {
  return (
    <main>
      <table>
        <caption>WorldRanks</caption>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area (km²)</th>
            <th>Region</th>
          </tr>
        </thead>
      </table>
    </main>
  );
}

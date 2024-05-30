import Image from "next/image";

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="mb-4">
          <tr className="*:text-start *:pb-4 text-xs border-282B30 border-b-2">
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area (km²)</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody className="text-D2D5DA mt-4">
          <tr className="*:pt-4 *:pr-4 *:pl-0">
            <td>Colombia</td>
            <td>Colombia</td>
            <td>1800000</td>
            <td>345mil</td>
            <td>America</td>
          </tr>
          <tr className="*:pt-6 *:pr-4 *:pl-0">
            <td>Colombia</td>
            <td>Colombia</td>
            <td>1800000</td>
            <td>345mil</td>
            <td>America</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

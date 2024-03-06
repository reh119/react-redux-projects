import type { PackageSummary } from "../api/types/packageSummary"; // we know this component will recieve a packageSummary object, so we need to apply a type to props interfcae just to say "hey i expect to recieve PackageSummary object "
import { Link } from "react-router-dom";

interface PackageListItemProps {
  pack: PackageSummary;
}
// pack is short for the single package we are passing in
export default function PackageListItem({ pack }: PackageListItemProps) {
  const renderedKeywords = (pack.keywords || []).map((keyword) => {
    return (
      <div
        key={keyword}
        className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
      >
        {keyword}
      </div>
    );
  });

  return (
    <div className="border p=4 rounded flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <Link to={`/packages/${pack.name}`} className="text-xl font-bold">
          {pack.name}
        </Link>
        <p className="text-sm text-gray-500"> {pack.description} </p>
        <div className="flex gap-1">{renderedKeywords}</div>
      </div>
      <div className="mr-6">
        <Link
          to={`/packages/${pack.name}`}
          className="py-2 px-3 rounded bg-black text-white text-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
}
// package may not always have list of keywords per npm docs, solved in PackAgeSUmmary

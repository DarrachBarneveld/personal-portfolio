import { FunctionComponent } from "react";
import Tags from "./ui/Tags";
import { projectProgressData } from "@/lib/data";

type PipelineCardProps = (typeof projectProgressData)[number];

function getColorBasedOnPercentage(percent: number) {
  if (percent < 25) {
    return "bg-red-600";
  } else if (percent < 50) {
    return "bg-yellow-600";
  } else if (percent < 75) {
    return "bg-blue-600";
  } else if (percent < 90) {
    return "bg-green-600";
  } else {
    return "bg-green-600";
  }
}

const PipelineCard: FunctionComponent<PipelineCardProps> = ({
  title,
  description,
  expected,
  progress,
  tags,
}) => {
  const widthColour = getColorBasedOnPercentage(progress);

  return (
    <div className="max-w-72 relative  h-full w-full overflow-hidden rounded-xl bg-white p-4 shadow-lg md:w-96">
      <div className="mb-2 flex items-center border-b-2 py-2">
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="w-full">
        <Tags tags={tags} />
        <p className="mb-2 text-xs font-medium text-blue-600">
          Expected: {expected}
        </p>
        <p className="mb-4 text-sm text-slate-600">{description}</p>
      </div>

      <div className="mb-4 h-2.5 w-full self-end rounded-full bg-gray-200">
        <div
          className={`h-2.5 rounded-full ${widthColour} `}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PipelineCard;
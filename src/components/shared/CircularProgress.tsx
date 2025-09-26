import type { CircularProgressBarProps } from "@/types/shared/CircularProgress";

const CircularProgressBar = ({
  strokeWidth,
  sqSize,
  percentage,
  percentageText,
}: CircularProgressBarProps) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="fill-none stroke-gray-200"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="fill-none stroke-[#FFA439]"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: -dashOffset,
        }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        color="red"
        fill="#172554"
        className="text-lg font-bold sm:text-2xl"
      >
        {percentageText}
      </text>
    </svg>
  );
};

export default CircularProgressBar;

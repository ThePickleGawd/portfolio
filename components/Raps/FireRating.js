// MUI
import FireIcon from "@mui/icons-material/LocalFireDepartment";

const FireGradient = ({ fire }) => {
  const fires = [
    "url(#fire-0.2)",
    "url(#fire-0.4)",
    "url(#fire-0.6)",
    "url(#fire-0.8)",
    "url(#fire-1)",
    "red",
  ];

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="fire-0.2" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0.8} stopColor="white" />
          <stop offset={0.8} stopColor="orange" />
          <stop offset={1} stopColor="orange" />
        </linearGradient>
        <linearGradient id="fire-0.4" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0.6} stopColor="white" />
          <stop offset={0.6} stopColor="orange" />
          <stop offset={1} stopColor="orange" />
        </linearGradient>
        <linearGradient id="fire-0.6" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0.4} stopColor="white" />
          <stop offset={0.4} stopColor="orange" />
          <stop offset={1} stopColor="orange" />
        </linearGradient>
        <linearGradient id="fire-0.8" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0.2} stopColor="white" />
          <stop offset={0.2} stopColor="orange" />
          <stop offset={1} stopColor="orange" />
        </linearGradient>
        <linearGradient id="fire-1" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor="white" />
          <stop offset={0} stopColor="orange" />
          <stop offset={1} stopColor="orange" />
        </linearGradient>
      </svg>
      <FireIcon sx={{ fill: clamp(0, 5, Math.floor(fire)) }} />
    </>
  );
};

export default FireGradient;

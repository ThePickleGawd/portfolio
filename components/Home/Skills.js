// Material UI
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

// Skills from 0-5
const skills = [
  { name: "React", val: 85 },
  { name: "JS/TS", val: 85 },
  { name: "Unity", val: 95 },
  { name: "C++ & Algorithms", val: 75 },
  { name: "Java", val: 60 },
];

const Skills = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "35%",
      }}
    >
      <Typography variant="h2" alignSelf="center">
        {"Skills"}
      </Typography>
      {skills.map((x) => (
        <div key={x.name} style={{ marginTop: 10 }}>
          <Typography variant="h4">{x.name}</Typography>
          <LinearProgress
            style={{ height: 15 }}
            variant="determinate"
            value={x.val}
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {technologies.map((e) => (
        <div className="w-28 h-28" key={e.name}>
          <BallCanvas icon={e.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;

import { technologies } from "../constants";
const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {technologies.map((e) => (
        <div className="sm:w-28 sm:h-28 w-14 h-14 relative group" key={e.name}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-all"></div>
          <div className="relative w-full h-full bg-white rounded-lg flex items-center justify-center shadow-md transform transition-all group-hover:scale-110 group-hover:rotate-3">
            <img
              src={e.icon}
              alt={e.name}
              className="w-3/4 h-3/4 object-contain transition-transform transform group-hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

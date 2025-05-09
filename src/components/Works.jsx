/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  prereview_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} id="work">
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-smoke-white p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(prereview_link, "_blank")}
              className="black-gradient mr-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <div className="w-1/2 h-1/2 object-contain">🔗</div>
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt={github}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-secondary font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((e) => (
            <p key={e.name} className={`text-[14px] ${e.color}`}>
              {e.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <div className="mt-10 sm:px-24 px-5 sm:ml-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>
        <div className="w-full flex ">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl w-auto sm:leading-[30px] "
          >
            The Following projects showcases my skills and experince of my work.
            Each project is briefly described with links to code repositories
            and live demos in it.It reflects my ability to solve complex
            problems, work with different technologies and manage project
            effectively.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
          {projects.map((e, i) => (
            <ProjectCard key={i} index={i} {...e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;

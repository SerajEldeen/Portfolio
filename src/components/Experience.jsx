/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import "../index.css";
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="custom-vertical-timeline-element"
    contentStyle={{ background: "#f5f5f5", color: "#525f7f" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain rounded-xl"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[#525f7f]font-black font-bold text-[17px]">
        {experience.title}
      </h3>
      <p
        className="text-secondary text-[16px] font-semibold "
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5  list-disc ml-5 space-y-2">
      {experience.points.map((e, i) => (
        <li key={i} className=" text-[14px] pl-1 tracking-wider">
          {e}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const Experience = () => {
  return (
    <>
      <div className="mt-16 p-24 bg-slate-50">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience</h2>
        </motion.div>

        <div className="mt-14 flex flex-col">
          <VerticalTimeline>
            {experiences.map((e, i) => (
              <ExperienceCard key={i} experience={e} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;

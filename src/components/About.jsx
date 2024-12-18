import { myPhoto } from "../assets";
import { styles } from "../styles";
const About = () => {
  return (
    <>
      <div
        className="sm:flex-row px-24 flex flex-col justify-center items-center gap-10"
        id="about"
      >
        <div>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <div className="w-[300px] sm:w-full flex">
            <p className="mt-3 text-secondary text-[13px] sm:text-[17px] max-w-3xl w-auto sm:leading-[30px]  ">
              I&apos;m a passionate software developer with a talent for
              creating exceptional websites. Skilled in JavaScript and
              experienced in frameworks like React and Node.js, I&apos;m a quick
              learner with a constant drive to expand my knowledge in software
              engineering. Excited to tackle new challenges and push the
              boundaries of web development.
            </p>
          </div>
        </div>
        <div className="rounded-full p-2 bg-gradient-to-r from-primary to-secondary">
          <img
            src={myPhoto}
            className="w-[380px] rounded-full border-4 border-primary shadow-lg
            transition-transform duration-300 hover:scale-110  "
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;

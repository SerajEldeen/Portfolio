import { styles } from "../styles";
const About = () => {
  return (
    <>
      <div className="mt-10 sm:px-24 px-2 sm:ml-10" id="about">
        <div>
          <div>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </div>
          <div className="w-full flex">
            <p className="mt-3 text-secondary text-[17px] max-w-3xl w-auto sm:leading-[30px]  ">
              I&apos;m a passionate software developer with a talent for
              creating exceptional websites. Skilled in JavaScript and
              experienced in frameworks like React and Node.js, I&apos;m a quick
              learner with a constant drive to expand my knowledge in software
              engineering. Excited to tackle new challenges and push the
              boundaries of web development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

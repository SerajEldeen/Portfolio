import { styles } from "../styles";
const About = () => {
  return (
    <>
      <div className="mt-10 sm:px-24 px-5 sm:ml-10" id="about">
        <div>
          <div>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </div>
          <div className="w-full flex">
            <p className="mt-3 text-secondary text-[17px] max-w-3xl w-auto sm:leading-[30px]  ">
              I&apos;m a passionate software developer specializing in building
              high-quality web applications. Skilled in JavaScript, React, and
              Next.js, I thrive on solving complex problems and crafting
              seamless user experiences. With a strong foundation in modern web
              technologies, I am always eager to learn, adapt, and push the
              boundaries of web development. Excited to take on new challenges
              and contribute to innovative projects that make an impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

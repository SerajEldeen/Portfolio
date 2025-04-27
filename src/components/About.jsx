import { styles } from "../styles";
const About = () => {
  return (
    <>
      <div className="mt-0 sm:px-24 px-5 sm:ml-10" id="about">
        <div>
          <div>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </div>
          <div className="w-full flex">
            <p className="mt-3 text-secondary text-[17px] max-w-3xl w-auto sm:leading-[30px]  ">
              I&apos;m a passionate Software Engineer who loves turning ideas
              into powerful, real-world applications. Skilled in JavaScript,
              React, Next.js, and Node.js, I specialize in building
              high-quality, scalable web solutions. I thrive on solving complex
              problems, creating smooth user experiences, and always pushing the
              limits of what&apos;s possible. With a strong foundation in modern
              web technologies, I&apos;m eager to grow, adapt, and contribute to
              innovative projects that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

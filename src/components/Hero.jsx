import { styles } from "../styles";
import LottieComponent from "./LottieComponent";

const Hero = () => {
  return (
    <section className="relative w-full h-[480px] sm:h-screen mx-auto ">
      <div
        className={`${styles.paddingX} relative inset-0 top-[200px] max-w-7xl mx-auto flex  flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-96 h-40 blue-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} `}>
            Hi, I&apos;m <span className="text-primary">Seraj Eldeen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate Software Engineer and
            <br className="sm:block hidden" /> Building modern web applications.
          </p>
        </div>
        <div className="hidden lg:block absolute left-[65%] pointer-events-none ">
          <LottieComponent />
        </div>
      </div>
    </section>
  );
};

export default Hero;

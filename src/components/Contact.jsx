import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { github, linkedin } from "../assets";
import { styles } from "../styles";
const Contact = () => {
  return (
    <>
      <div
        className="mt-10   bg-primary flex h-72 justify-center items-center"
        id="contact"
      >
        <div className="w-full px-5 mx-auto  text-center">
          <h2
            className={`${styles.sectionSubText} text-center text-white mb-10`}
          >
            Reach me here
          </h2>
          <a href="/SerajEldeen.pdf" target="_blank">
            <button
              className=" button-effect text-secondary mb-10   bg-white rounded-md
            hover:scale-105  duration-500  uppercase 
            "
            >
              Resume
            </button>
          </a>

          <div className=" flex justify-center">
            <a href="mailto:serageldeen13@gmail.com" target="_blank">
              <div
                className=" bg-white  mr-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
              hover:opacity-40 hover:-translate-y-1.5 hover:delay-200 ease-in-out shadow-lg"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-1/2 h-1/2" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/seraj-eldeen-abdullah-8872832a3/"
              target="_blank"
            >
              <div
                className=" bg-white  mr-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
              hover:opacity-40 hover:-translate-y-1.5 hover:delay-200 ease-in-out shadow-lg"
              >
                <img src={linkedin} alt={linkedin} className="w-1/2 h-1/2" />
              </div>
            </a>
            <a href="https://github.com/SerajEldeen" target="_blank">
              <div
                className="bg-black  mr-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
              hover:opacity-40 hover:-translate-y-1.5 hover:delay-200 ease-in-out shadow-lg"
              >
                <img
                  src={github}
                  alt={github}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

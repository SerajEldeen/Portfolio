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
          <button
            onClick={() => window.open("/Seraj-Eldeen.pdf", "_blank")}
            className=" button-effect text-secondary mb-10   bg-white rounded-md
          hover:scale-105  duration-500  uppercase 
          "
          >
            Resume
          </button>

          <div className=" flex justify-center">
            <div
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=serageldeen13@gmail.com",
                  "_blank"
                )
              }
              className=" bg-white  mr-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
              hover:opacity-40 hover:-translate-y-1.5 hover:delay-200 ease-in-out shadow-lg"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-1/2 h-1/2" />
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/seraj-eldeen-abdullah-8872832a3",
                  "_blank"
                )
              }
              className=" bg-white  mr-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
              hover:opacity-40 hover:-translate-y-1.5 hover:delay-200 ease-in-out shadow-lg"
            >
              <img src={linkedin} alt={linkedin} className="w-1/2 h-1/2" />
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/SerajEldeen", "_blank")
              }
              className="bg-black  mr-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
              hover:opacity-40 hover:-translate-y-1.5 hover:delay-200 ease-in-out shadow-lg"
            >
              <img
                src={github}
                alt={github}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

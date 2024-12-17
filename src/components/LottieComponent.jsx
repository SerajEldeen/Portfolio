import Lottie from "react-lottie";
import animationData from "../assets/animation.json";
const LottieComponent = () => {
  const defaultOptions = {
    loop: true, // Set to true to loop the animation
    autoplay: true, // Set to true to autoplay the animation
    animationData: animationData, // Your animation JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // To maintain aspect ratio
    },
  };
  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LottieComponent;

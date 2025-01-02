import { useState, useEffect } from "react";
import { file, githubIcon, linkedinIcon, contact } from "../assets";

const Hero = () => {
  // Current loop number to cycle through `toRotate` array
  const [loopNum, setLoopNum] = useState(0);

  // State to determine if we are deleting characters
  const [isDeleting, setIsDeleting] = useState(false);

  // Array of words/phrases to type
  const toRotate = ["Student", "Web Developer", "Data Engineer Intern"];

  // The current text being displayed
  const [text, setText] = useState("");

  // Typing speed in milliseconds
  const [delta, setDelta] = useState(200); // Faster default typing speed

  // Time to wait before switching to the next word
  const period = 1000;

  // Effect that triggers the typing logic
  useEffect(() => {
    let ticker = setInterval(() => {
      tick(); // Calls the tick function to update text
    }, delta);

    return () => {
      clearInterval(ticker); // Cleanup the interval on component unmount
    };
  }, [text]); // Re-runs whenever `text` changes

  const tick = () => {
    // Current word to type
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    // Update text: add a character when typing, remove one when deleting
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Adjust typing speed when deleting
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    // When the full word is typed, start deleting
    if (!isDeleting && updatedText === fullText) {
      setDelta(period); // Pause for a moment before deleting
      setIsDeleting(true);
    }
    // When word is fully deleted, move to the next word
    else if (isDeleting && updatedText === "") {
      setDelta(200); // Reset typing speed for the next word
      setIsDeleting(false);
      setLoopNum(loopNum + 1); // Move to the next word in `toRotate`
    }
  };

  return (
    <section className='banner id="home" relative w-full h-screen mx-auto'>
      <div className="container mx-auto px-4 absolute inset-10 top-[200px] max-w-[1800px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column */}
          <div className="w-full md:w-1/2 xl:w-7/12 text-center md:text-left min-h-[600px] pt-14 mt-14 ">
            <h1 className="sm:text-5xl lg:text-6xl xl:text-8xl text-black font-bold mb-4 leading-none">
              {`Hi I'm Rui Sheng! \n`}
              <span className="block wrap">I am a {text}</span>
            </h1>
            <p className="text-gray-600 xl:text-3xl md:text-2xl sm:text-2xl leading-relaxed font-montserrat font-semibold mb-8">
              Welcome to my portfolio. Let’s build something great together!
            </p>
            <div className="flex items-end justify-between mt-14 w-[80%] h-[100px] mx-auto md:ml-0 md:mr-auto">
              <a
                className="w-[65px] h-[65px] hover:transform hover:-translate-y-[10px] transition-transform duration-300 ease-in hover:scale-125 opacity-80"
                href="https://github.com/RuiShengGit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="github" className="w-full h-full" />
              </a>
              <a
                className="w-[65px] h-[65px] hover:transform hover:-translate-y-[10px] transition-transform duration-300 ease-in hover:scale-125 opacity-80"
                href="https://www.linkedin.com/in/seow-rui-sheng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="linkedin"
                  className="w-full h-full"
                />
              </a>
              <a
                className="w-[65px] h-[65px] hover:transform hover:-translate-y-[10px] transition-transform duration-300 ease-in hover:scale-125 opacity-80"
                href="mailto:seow.ruisheng@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contact}
                  alt="contact"
                  className="w-full h-full filter brightness-0"
                />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 xl:w-5/12 text-center">
            <img src={file} alt="hero" className="xl:w-[900px] xl:h-[800px]" />
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-center items-start p-2"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

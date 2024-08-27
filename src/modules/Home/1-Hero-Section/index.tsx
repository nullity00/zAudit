import styled from "styled-components";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export const GradientWord = styled.span`
  background: linear-gradient(360deg, #0e0498 -16.67%, #454ae2 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

function HeroSection() {
  return (
    <div className="h-full relative sm:my-16 lg:m-56">
      <div className="mx-auto text-center">
        <h1 className="lg:leading-normal lg:text-5xl md:text-4xl sm:text-4xl font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Breaking your <span style="background: linear-gradient(360deg, #0e0498 -16.67%, #454ae2 100%); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">proofs</span>'
                )
                .pauseFor(500)
                .deleteChars(6)
                .typeString(
                  '<span style="background: linear-gradient(360deg, #0e0498 -16.67%, #454ae2 100%); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">code</span>'
                )
                .pauseFor(500)
                .deleteChars(4)
                .typeString(
                  '<span style="background: linear-gradient(360deg, #0e0498 -16.67%, #454ae2 100%); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">cryptography</span>'
                )
                .typeString(" <br /> so no one else can")
                .pauseFor(500)
                .pauseFor(20000)
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
              delay: 80,
            }}
          />
        </h1>
        <h2 className="text-center sm:text-center my-4 text-zinc-500">
          Don’t let a soundness bug rekt your protocol
        </h2>
        <Link to={"/fellowships"}>
          <button className="px-8 py-3 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-violet to-blue hover:from-white hover:text-violet duration-700">
            Get an Audit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;

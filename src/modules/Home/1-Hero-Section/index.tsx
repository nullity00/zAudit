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
    <div className="h-full relative sm:my-16 lg:m-40">
      <div className="mx-auto text-center">
        <h1 className="lg:leading-normal lg:text-6xl md:text-4xl sm:text-4xl font-bold">
          We break your <GradientWord>proofs</GradientWord> <br /> so no one
          else can
        </h1>
        <h2 className="text-center sm:text-center my-4 text-zinc-500">
          Don’t let a soundness bug rekt your protocol
        </h2>
        <Link to={"/fellowships"}>
          <button className="px-8 py-3 rounded-xl sm:w-full text-md text-blue text-bold bg-violet bg-opacity-25 hover:bg-opacity-5 hover:text-violet duration-700">
            Shield Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;

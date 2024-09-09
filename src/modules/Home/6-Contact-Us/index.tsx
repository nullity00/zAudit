import { Link } from "react-router-dom";

export default function PartnerUp() {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-24 m-40 p-24 rounded-2xl bg-[#ebecff]">
        <img src="chip.svg" className="h-[18rem] sm:m-0" />
        <div className="ml-8">
          <h1 className="leading-normal lg:leading-tight lg:text-5xl text-center text-4xl mb-8 font-bold">
            Partner up with <br /> a Protocol Audit
          </h1>
          <Link to={"/contact-us"}>
            <button className="px-8 py-3 rounded-lg text-sm text-white font-semibold bg-gradient-to-r from-violet to-blue hover:from-white hover:text-violet duration-700">
              Get an Audit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

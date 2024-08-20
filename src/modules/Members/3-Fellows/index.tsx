import { zblock1 } from "../Data/zblock1";
import { zblock2 } from "../Data/zblock2";
import { block1 } from "../Data/block1";
import { block2 } from "../Data/block2";
import { block3 } from "../Data/block3";
import { block4 } from "../Data/block4";
import { block5 } from "../Data/block5";
import { block6 } from "../Data/block6";
import { generateUniqueRandoms } from "../1-Core";

export function ZBlock1() {
  return (
    <>
      <Template title={"ZK Block 1 - June 2023"} fellows={zblock1} />
    </>
  );
}

export function ZBlock2() {
  return (
    <>
      <Template title={"ZK Block 2 - Jan to May 2024"} fellows={zblock2} />
    </>
  );
}

export function Block1() {
  return (
    <>
      <Template title={"Block 1 - October 2021"} fellows={block1} />
    </>
  );
}

export function Block2() {
  return (
    <>
      <Template title={"Block 2 - April 2022"} fellows={block2} />
    </>
  );
}
export function Block3() {
  return (
    <>
      <Template title={"Block 3 - June 2022"} fellows={block3} />
    </>
  );
}
export function Block4() {
  return (
    <>
      <Template title={"Block 4 - November 2022"} fellows={block4} />
    </>
  );
}
export function Block5() {
  return (
    <>
      <Template title={"Block 5 - April 2023"} fellows={block5} />
    </>
  );
}

export function Block6() {
  return (
    <>
      <Template title={"Block 6 - March 2024"} fellows={block6} />
    </>
  );
}

export function Template({
  title,
  fellows,
}: {
  title: string;
  fellows: {
    name: string;
    url: string;
    promotedToResident: boolean;
  }[];
}) {
  const randoms = generateUniqueRandoms(25);
  return (
    <div className="my-24">
      <h2 className="text-xl font-bold sm:text-center mb-12">{title}</h2>
      <ul
        role="list"
        className="grid lg:grid-cols-3 grid-cols-2 lg:gap-x-72 md:gap-x-32 gap-y-12"
      >
        {fellows.map((person, i) => (
          <li key={person.name}>
            <div className="flex flex-row sm:flex-col items-center gap-x-6">
              <img
                className={
                  "rounded-full items-center" +
                  ` ${
                    person.promotedToResident
                      ? `h-19 w-11 sm:h-8 sm:w-9 sm:mb-2 `
                      : `h-11 w-11 ml-1 sm:h-9 sm:w-9 sm:mb-2`
                  }`
                }
                src={
                  person.promotedToResident
                    ? "resident.png"
                    : randoms[i].toString() + ".png"
                }
                alt="Core"
              />
              <div>
                <h3
                  className={
                    "sm:text-xs " +
                    `${
                      person.promotedToResident
                        ? `font-semibold text-gray-900`
                        : `text-gray-600`
                    }` +
                    `${person.url.length > 0 ? ` hover:underline` : ` `}`
                  }
                >
                  {person.url.length > 0 ? (
                    <a href={person.url} target="_blank">
                      {person.name}
                      {person.promotedToResident ? "*" : ""}
                    </a>
                  ) : (
                    person.name + (person.promotedToResident ? "*" : "")
                  )}
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

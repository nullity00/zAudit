function Icon({
  src,
  alt,
  href,
  width,
}: {
  src: string;
  alt: string;
  href: string;
  width: string;
}) {
  return (
    <a href={href} target="_blank">
      <img
        src={src}
        width={width}
        alt={alt}
        className="opacity-50 hover:opacity-90 duration-700"
      />
    </a>
  );
}

export default function Team() {
  const team = [
    {
      name: "nullity",
      image: "nullity.svg",
      bio: "zkbrace",
    },
    {
      name: "nagu",
      image: "nagu.svg",
      bio: "dvsvswrvyears.",
    },
    {
      name: "Oba",
      image: "oba.svg",
      bio: "zkjnekc",
    },
    {
      name: "parsley",
      image: "parsley.svg",
      bio: "zkjnekc",
    },
    {
      name: "qpzm",
      image: "qpzm.svg",
      bio: "zkjnekc",
    },
    {
      name: "teddav",
      image: "teddav.svg",
      bio: "zkjnekc",
    },
    {
      name: "zeroqn",
      image: "zeroqn.svg",
      bio: "zkjnekc",
    },
    {
      name: "FlyingNobita",
      image: "flyingnobita.svg",
      bio: "zkjnekc",
    },
  ];
  return (
    <div className="lg:mx-56 lg:my-20">
      <h1 className="lg:text-5xl text-3xl font-bold mb-10 text-center">
        Team
      </h1>
      <p>
        zAudit's technical team consists of zkbrains, zkchads, and
        zkgigabraingigachads. If you're in the zk space, you may already know
        them.
      </p>
      <div className="grid grid-cols-4 gap-16 mt-10">
        {team.map((member) => (
          <div className="">
            <img
              src={member.image}
              alt={member.name}
              className="pb-3 h-[8rem]"
            />
            <h2 className="font-bold text-lg">{member.name}</h2>
            <p className="text-sm">{member.bio}</p>
            {/* <Icon
              src="twitter.png"
              alt="Twitter"
              href="https://twitter.com/yAcademyDAO"
              width="20"
            />
            <Icon
              src="github.png"
              alt="Github"
              href="https://github.com/yAcademy-Residents"
              width="25"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

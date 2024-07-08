export default function MeetTheTeam() {
  return (
    <>
      <div className="flex my-5 text-xl italic">
        <p>Meet the Team</p>
        <span className="border-[1px] h-1/2 ml-3 my-auto grow border-black"></span>
      </div>
      <div className="flex flex-wrap">
        <ImageCollection />
      </div>
    </>
  );
}

function ImageCollection() {
  return membersInfo.map((memberInfo, index) => (
    <MemberImage key={index} name={memberInfo.name} />
  ));
}

function MemberImage({ name }: { name: String }) {
  return (
    <div className="basis-1/2 sm:flex-1 flex border-2 border-[#F5F5F5] h-[300px] bg-vega-pink sm:hover:flex-[2] transition-all">
      <p className="text-white font-bold text-2xl mt-auto mb-3 ml-3">{name}</p>
    </div>
  );
}

const membersInfo = [
  {
    name: "Sally",
    image: null,
    bio: null,
  },
  {
    name: "Evie",
    image: null,
    bio: null,
  },
  {
    name: "Joe",
    image: null,
    bio: null,
  },
  {
    name: "Calum",
    image: null,
    bio: null,
  },
  {
    name: "Kirsty",
    image: null,
    bio: null,
  },
  {
    name: "Clara",
    image: null,
    bio: null,
  },
];

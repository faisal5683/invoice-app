import TeamMember from "./component/TeamMember";
import teamData from "./teamData/teamData";

const MyTeam = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-10 text-center">
        Our Team
      </h1>
      {teamData.map((member, idx) => (
        <TeamMember key={`${member.name}-${idx}`} member={member} />
      ))}
    </div>
  );
};

export default MyTeam;

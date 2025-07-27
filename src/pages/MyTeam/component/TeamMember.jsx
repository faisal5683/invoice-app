import { useState, memo, useMemo } from "react";

const dummyAvatar = "https://i.pravatar.cc/48?u=";

const TeamMember = ({ member, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMembers = member.members && member.members.length > 0;

  const avatarUrl = useMemo(
    () => `${dummyAvatar}${member.name.replace(/\s/g, "")}`,
    [member.name]
  );

  return (
    <div
      className={`relative pl-6 ${
        level > 0 ? "ml-6 border-l-2 border-indigo-300" : ""
      }`}
    >
      {/* lines for nested level */}
      {level > 0 && (
        <span className="absolute top-0 left-2 h-full border-l-2 border-indigo-300"></span>
      )}

      <div
        className="flex items-center bg-white shadow-md rounded-md p-4 mb-4 cursor-pointer hover:bg-indigo-50 transition"
        onClick={() => hasMembers && setExpanded((prev) => !prev)}
      >
        <img
          src={avatarUrl}
          alt={member.name}
          className="w-12 h-12 rounded-full border-2 border-indigo-400 object-cover"
          loading="lazy"
        />

        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
          <p className="text-sm text-indigo-600">{member.role}</p>
        </div>

        {hasMembers && (
          <button
            aria-label={
              expanded ? "Collapse team members" : "Expand team members"
            }
            className={`transform transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            } text-indigo-500 hover:text-indigo-700`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}
      </div>

      {hasMembers && expanded && (
        <div className="ml-4 ">
          {member.members.map((subMember, idx) => (
            <TeamMember
              key={`${subMember.name}-${idx}`}
              member={subMember}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(TeamMember);

const teamData = [
  {
    name: "Mohan Yadav",
    role: "Team Lead",
    members: [
      { name: "Raj", role: "Frontend Dev" },
      { name: "Neha", role: "Backend Dev" },
      {
        name: "Amit",
        role: "QA",
        members: [{ name: "Sneha", role: "Intern" }],
      },
    ],
  },
  {
    name: "Neha Shetty",
    role: "Lead HR",
    members: [
      { name: "Yash", role: "Admin" },

      {
        name: "Veena",
        role: "Senior Executive",
        members: [{ name: "Komal", role: "Intern" }],
      },
      { name: "Darshan", role: "Junior HR" },
    ],
  },
];

export default teamData;

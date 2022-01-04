import bcrypt from "bcryptjs";

const userData = {
  users: [
    {
      id: 1,
      name: "Tedbree Limited",
      email: "jobs@tedbree.com",
      password: bcrypt.hashSync("tedbree"),
      avatar:
        "https://content.app-sources.com/s/14630223212260103/uploads/Logos/Tedbree-5151946.png",
    },
  ],
};
export default userData;

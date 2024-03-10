//TEMP DATA
// const users = [
//   { id: 1, name: "Jhon" },
//   { id: 2, name: "Denis" },
// ];
// const posts = [
//   { id: 1, title: "Hello World1", body: "Demo body1", userId: 1 },
//   { id: 2, title: "Hello World2", body: "Demo body2", userId: 2 },
//   { id: 1, title: "Hello World3", body: "Demo body3", userId: 1 },
//   { id: 1, title: "Hello World4", body: "Demo body4", userId: 2 },
//   { id: 1, title: "Hello World5", body: "Demo body5", userId: 1 },
// ];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  return posts.find((post) => post.id === parseInt(id));
};

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};

interface User {
  name: string;
  image_url: string;
  id: number;
}

const Home = () => {
  const user1: User = {
    name: "Sudip",
    image_url: "https://facebook.com/pdlsensei",
    id: 1,
  };
  return (
    <div>
      <h1>{user1.name}</h1>
      <h2>{user1.image_url}</h2>
      <h1>user id is {user1.id}</h1>
    </div>
  );
};

export default Home;

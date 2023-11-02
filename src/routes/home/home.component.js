import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>This is Home Page</p>
      <Outlet />
    </div>
  );
};

export default Home;

import { Outlet } from "react-router-dom";

import Menu from "../../components/menu/menu.component";

const Home = () => {
  return (
    <div>
      <Menu />
      <Outlet />;
    </div>
  );
};

export default Home;

import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const AppLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <main>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div style={{width: "100%"}}><div className="loading" style={{margin: "0 auto"}}></div></div> : <Outlet />}
      </section>
    </main>
  );
};
export default AppLayout;

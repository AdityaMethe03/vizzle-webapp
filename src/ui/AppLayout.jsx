import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import LaunchingPage from "./LaunchingPage";
import Newsletter from "./Newsletter";

function AppLayout() {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <LaunchingPage />
      <Newsletter />
      <Footer />
    </>
  );
}

export default AppLayout;

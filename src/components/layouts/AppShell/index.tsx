import Navbar from "../Navbar";
import Footer from "../Footer";
import { AppShellProps } from "@/types";
import { useRouter } from "next/router";

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const router = useRouter();
  const showNavbar = router.pathname.startsWith("/layouts/home");

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default AppShell;

import Footer from "../components/elements/Footer";
import NavbarUser from "../components/elements/NavBarUser";
import LatestNews from "../components/section/LatestNews";
import OtherNews from "../components/section/OtherNews";

const BeritaPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <NavbarUser />
      <div className="flex flex-col bg-slate-200 h-fit mt-[80px] py-10 items-center gap-6">
        <LatestNews />
        <OtherNews />
      </div>
      <Footer />
    </>
  );
};

export default BeritaPage;

import NavBarUser from "../components/elements/NavBarUser";
import PertanyaanUmum from "../components/section/PertanyaanUmum";
import FormPertanyaan from "../components/section/FormPertanyaan";
import Footer from "../components/elements/Footer";

const Faq = () => {
  return (
    <>
      <NavBarUser />
      <div className="flex flex-col md:h-[100vh] h-fit items-center justify-center pt-20 bg-slate-100">
        <div className="flex md:flex-row flex-col md:gap-20 gap-10 text-black xl:w-[1280px] w-full px-6 py-3 md:items-start items-center">
          <PertanyaanUmum />
          <FormPertanyaan />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;

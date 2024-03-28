import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import InputText from "../elements/InputText";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";

const FormPertanyaan = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="md:w-[50%] w-[80%]">
      <h2
        className="text-xl font-bold text-black items-start pb-5"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Masih Belum Menemukan Jawaban ?
      </h2>
      <div
        className="flex flex-col gap-6 "
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        <InputText type="text" placeholder="Nama" />
        <InputText type="text" placeholder="Email" />
        <InputText type="text" placeholder="Subjek" />
        <TextArea placeholder="Isi Pertanyaan Anda disini" />
        <Button type="submit" className="w-full">
          Kirim
        </Button>
      </div>
    </div>
  );
};

export default FormPertanyaan;

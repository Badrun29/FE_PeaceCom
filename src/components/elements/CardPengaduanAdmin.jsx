import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CheckIcon from "../../assets/icons/Check.svg";
import Button from "../../components/elements/Button";
import axios from "axios";
const CardPengaduanAdmin = (props) => {
  const { image, nama, tanggal, alamat, laporan, badgetitle, btndisplay, id } =
    props;

  const navigate = useNavigate();

  const updateStatus = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:5000/api/v1/reports",
        {
          reportId: id, // Pass the unique identifier for the report
          status: "Diterima",
        }
      );

      if (response.status === 200) {
        console.log("Status updated successfully");
        Swal.fire({
          icon: "success",
          title: "Berhasil memperbarui status",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/pengaduan");
      } else {
        console.error("Failed to update status");
        Swal.fire({
          icon: "error",
          title: "Gagal memperbarui status",
          showConfirmButton: false,
          timer: 2000,
        });
        // Handle error scenarios
      }
    } catch (error) {
      console.error("Error updating status:", error);
      // Handle error scenarios
    }
  };

  return (
    <div className="flex flex-row w-full h-fit bg-white border p-6 rounded-xl gap-8">
      <div className="bg-slate-200 rounded-lg w-[300px] h-[169px] flex-none ">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col items-end justify-between">
        <div className="w-full">
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row">
              <p className="text-xl font-bold">{nama}</p>
              <span
                className={`badge badge-neutral ${
                  badgetitle === "Diterima" ? "bg-green-500" : "bg-red-500"
                } border-none text-white badge-sm ml-3`}
              >
                {badgetitle}
              </span>
            </div>
            <p className="text-sm text-slate-400">{tanggal}</p>
          </div>
          <p className="text-lg font-semibold">{alamat}</p>
          <p className="text-sm font-regular">{laporan}</p>
        </div>
        {badgetitle === "Diterima" ? null : (
          <Button
            className={`w-fit btn-sm items-center ${btndisplay}`}
            onClick={updateStatus}
          >
            Terima
            <img src={CheckIcon} alt="" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardPengaduanAdmin;

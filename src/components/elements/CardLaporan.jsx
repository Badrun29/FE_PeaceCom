const CardLaporan = (props) => {
  const { image, tanggal, nama, laporan, status } = props;
  return (
    <div className="flex bg-white shadow-xl w-full h-fit flex-row md:p-4 p-5 rounded-2xl gap-4">
      <div className="w-[300px] h-[169px] flex-none">
        <img
          src={image}
          alt="Laporan"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="w-full h-auto full flex flex-col items-end justify-between">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xl font-bold bg-blue-700 rounded-full text-white w-fit px-4">
            {tanggal}
          </p>
          <p className="text-xl font-bold">{nama}</p>
          <p className="text-md font-regular">{laporan}</p>
        </div>
        <p
          className={`text-md font-semibold ${
            status === "Diterima" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default CardLaporan;

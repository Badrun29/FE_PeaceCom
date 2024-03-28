const DataShow = (props) => {
  const { title, icon, jumlah } = props;
  return (
    <div className="flex flex-col sm:w-full w-[280px] h-[150px] bg-blue-700 rounded-3xl text-2xl text-white font-bold justify-center p-8 gap-4">
      {title}
      <div className="flex flex-row gap-6">
        <img src={icon} alt="" className="w-10 h-10" />
        <p>{jumlah}</p>
      </div>
    </div>
  );
};

export default DataShow;

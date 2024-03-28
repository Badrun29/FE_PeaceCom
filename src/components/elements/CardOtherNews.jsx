const CardOtherNews = (props) => {
  const { Judul, date, desc, ImageNews } = props;
  return (
    <div className="md:w-full w-[300px] bg-white shadow-xl rounded-lg p-6">
      <h2 className="font-bold md:text-lg text-sm text-left text-black pb-1">
        {Judul}
      </h2>
      <p className="pb-3 md:text-base text-xs font-bold">{date}</p>
      <div className="flex flex-col md:flex-row gap-3 justify-center">
        <img
          src={ImageNews}
          alt="news"
          className="rounded-lg md:w-[288px] w-[250px] object-cover h-auto"
        />
        <p className="text-black md:text-base text-sm font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default CardOtherNews;

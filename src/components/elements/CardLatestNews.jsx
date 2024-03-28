const CardLatestNews = (props) => {
  const { className, date, ImageNews, Judul } = props;
  return (
    <div
      className={`card w-fit sm:max-w-[400px] bg-white shadow-xl ${className}`}
    >
      <figure className="flex flex-col gap-3 px-6 pt-6">
        <img
          src={ImageNews}
          alt="News"
          className="rounded-xl w-[533px] h-[210px]"
        />
        <p className="text-left w-full font-bold">{date}</p>
      </figure>
      <div className="card-body items-center text-left text-black p-6">
        <h2 className="card-title text-left w-full font-bold md:text-xl text-lg">
          {Judul}
        </h2>
      </div>
    </div>
  );
};

export default CardLatestNews;

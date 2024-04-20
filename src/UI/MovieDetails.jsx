import categoryMovie from "../assets/icon-category-movie.svg";

export default function MovieDetails() {
  return (
    <div className="absolute">
      <div className="flex items-center justify-center gap-2 text-bodyS md:text-bodyM text-white opacity-75">
        <p>2019</p>
        <div className="w-[3px] h-[3px] rounded-full bg-white bg-opacity-75"></div>
        <div className="flex items-center justify-center gap-[6px] ">
          <img src={categoryMovie} alt="Category Movie Icon" />
          <p>Movie</p>
        </div>
        <div className="w-[3px] h-[3px] rounded-full bg-white bg-opacity-75"></div>
        <p>PG</p>
      </div>
      <h2 className=" text-bodyM font-medium md:text-headingS text-white">
        Beyond Earth
      </h2>
    </div>
  );
}

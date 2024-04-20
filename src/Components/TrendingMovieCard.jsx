import TransparentGradientBg from "../UI/TransparentGradientBg";
import beyondearth from "../assets/thumbnails/beyond-earth/trending/large.jpg";
import MovieDetails from "../UI/MovieDetails";
export default function TrendingMovieCard() {
  return (
    <div className="w-[240px] h-[140px] md:w-[470px] md:h-[230px] relative flex items-end justify-start p-4 md:p-6">
      <img
        src={beyondearth}
        className="absolute top-0 left-0 w-full h-full"
        alt=""
      />
      <TransparentGradientBg />
      <MovieDetails />
    </div>
  );
}

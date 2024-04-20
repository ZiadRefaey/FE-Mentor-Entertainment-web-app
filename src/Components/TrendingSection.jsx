import BookMarkIcon from "../UI/BookMarkIcon";
import Card from "../UI/Card";
import SectionTitle from "../UI/SectionTitle";
import TrendingCard from "./TrendingMovieCard";

export default function TrendingSection() {
  return (
    <section>
      <SectionTitle>Trending</SectionTitle>
      <div className="flex gap-10 ">
        <Card>
          <TrendingCard />
          <BookMarkIcon />
        </Card>
        <Card>
          <TrendingCard />
          <BookMarkIcon />
        </Card>
        <Card>
          <TrendingCard />
          <BookMarkIcon />
        </Card>
      </div>
    </section>
  );
}

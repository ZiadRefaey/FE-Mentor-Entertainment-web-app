import iconSearch from "../assets/icon-search.svg";
export default function Search() {
  return (
    <div className="flex items-center justify-start">
      <img src={iconSearch} className="mr-4" />
      <input
        type="text"
        className="bg-transparent outline-none placeholder:text-md placeholder:font-light placeholder:text-white placeholder:opacity-50 text-white"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

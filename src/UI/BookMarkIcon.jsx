import bookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
export default function BookMarkIcon() {
  return (
    <div className="rounded-full flex items-center justify-center w-8 h-8 bg-dark-blue bg-opacity-50 absolute top-2 right-2 cursor-pointer">
      <img src={bookmarkIconEmpty} alt="bookmark icon" />
    </div>
  );
}

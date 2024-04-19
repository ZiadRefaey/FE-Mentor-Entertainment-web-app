import { MdLocalMovies } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { PiTelevisionBold } from "react-icons/pi";
import { IoIosBookmark } from "react-icons/io";

import NavListItem from "./NavListItem";
export default function NavFilterButtons() {
  return (
    <ul className="h-full flex items-center justify-center xl:flex-col gap-6 md:gap-8 xl:gap-10">
      <NavListItem>
        <AiFillAppstore className="w-full h-full" />
      </NavListItem>
      <NavListItem>
        <MdLocalMovies className="w-full h-full" />
      </NavListItem>
      <NavListItem>
        <PiTelevisionBold className="w-full h-full" />
      </NavListItem>
      <NavListItem>
        <IoIosBookmark className="w-full h-full mt-[1px]" />
      </NavListItem>
    </ul>
  );
}

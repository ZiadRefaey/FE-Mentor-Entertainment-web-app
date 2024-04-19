import NavAvatar from "./NavAvatar";
import Logo from "./Logo";
import NavFilterButtons from "./NavFilterButtons";

export default function SideBar() {
  return (
    <nav className=" bg-semi-dark-blue h-full md:rounded-[20px] px-4 md:px-6 xl:py-9 flex flex-row xl:flex-col gap-10 justify-between items-center">
      <Logo />
      <NavFilterButtons />
      <NavAvatar />
    </nav>
  );
}

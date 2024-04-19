import logo from "../assets/logo.svg";
export default function Logo() {
  return (
    <div>
      <img src={logo} className="w-[25px] md:w-[32px]" />
    </div>
  );
}

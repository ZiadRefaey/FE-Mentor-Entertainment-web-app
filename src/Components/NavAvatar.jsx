import avatar from "../assets/image-avatar.png";
export default function NavAvatar() {
  return (
    <div>
      <img
        src={avatar}
        className="w-6 md:w-8 xl:w-10 object-cover rounded-full border-white border xl:border-[2px]"
      />
    </div>
  );
}

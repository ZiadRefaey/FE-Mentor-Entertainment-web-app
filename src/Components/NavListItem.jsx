export default function NavListItem({ children }) {
  return (
    <li className="w-5 md:w-6 text-gray-blue hover:text-red cursor-pointer">
      {children}
    </li>
  );
}

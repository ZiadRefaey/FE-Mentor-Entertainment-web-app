export default function SideBarContainer({ children }) {
  return (
    <aside className="row-span-2 xl:px-9 md:px-6 md:pt-6 xl:py-8 xl:h-[100vh]">
      {children}
    </aside>
  );
}

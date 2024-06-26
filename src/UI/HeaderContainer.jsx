export default function HeaderContainer({ children }) {
  return (
    <header className="py-6 px-4 md:px-6 bg-transparent w-full flex items-center justify-start">
      {children}
    </header>
  );
}

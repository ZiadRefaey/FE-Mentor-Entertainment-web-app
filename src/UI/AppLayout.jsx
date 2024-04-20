export default function AppLayout({ children }) {
  return (
    <div className="min-h-[100vh] grid grid-rows-[0rem,3.5rem,4.5rem,1fr] md:grid-rows-[0rem,6rem,6rem,1fr] xl:grid-cols-[10.5rem,1fr] xl:grid-rows-[8.125rem,1fr] bg-dark-blue overflow-x-hidden">
      {children}
    </div>
  );
}

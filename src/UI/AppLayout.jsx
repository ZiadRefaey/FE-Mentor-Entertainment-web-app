export default function AppLayout({ children }) {
  return (
    <div className="min-h-[100vh] grid grid-rows-[0rem,4.5rem,1fr] md:grid-rows-[0rem,6.125rem,1fr] xl:grid-cols-[10.5rem,1fr] xl:grid-rows-[8.125rem,1fr] bg-dark-blue">
      {children}
    </div>
  );
}

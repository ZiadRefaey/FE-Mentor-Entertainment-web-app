export default function Card({ children }) {
  return (
    <div className="rounded-lg relative overflow-hidden inline-block">
      {children}
    </div>
  );
}

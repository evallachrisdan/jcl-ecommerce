export default function ProductCard({ children, imgSrc, title }) {
  return (
    <div className="max-w-sm overflow-hidden mx-auto">
      <img
        className="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="text-2xl mb-2 bentham-regular">{title}</div>
        {children}
      </div>
    </div>
  );
}

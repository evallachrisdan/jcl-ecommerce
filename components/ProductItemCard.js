export default function ProductItemCard({
  children,
  imgSrc,
  itemTitle,
  itemPrice,
  className,
}) {
  return (
    <div
      className={`max-w-xs overflow-hidden mx-auto my-5 ${
        className ? className : ""
      }`}
    >
      <img src={imgSrc} alt="Kara" className="mx-auto max-w-full" />
      <div className="px-6 py-4">
        <p className="uppercase">{itemTitle}</p>
        <p>{itemPrice}</p>
      </div>
    </div>
  );
}

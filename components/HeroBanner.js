export default function HeroBanner({ imgSrc, children }) {
  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className="hero-content">
        <div className="hero-text text-center">{children}</div>
      </div>
    </section>
  );
}

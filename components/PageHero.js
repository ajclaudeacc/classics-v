import Photo from "./Photo";

export default function PageHero({ title, intro, img, alt, children, areas = true }) {
  return (
    <section className="page-hero">
      <Photo src={img} alt={alt} className="page-hero-img" priority sizes="100vw" widths={[750, 1000, 1500, 2500]} />
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="container page-hero-inner">
        <h1>{title}</h1>
        {intro && <p className="page-hero-intro">{intro}</p>}
        {areas && <p className="page-hero-areas">Amherst · Buffalo · Cheektowaga · North Tonawanda · Niagara Falls</p>}
        {children && <div className="page-hero-actions">{children}</div>}
      </div>
    </section>
  );
}

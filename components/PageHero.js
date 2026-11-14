import Photo from "./Photo";

// Inner-page opening: one full-bleed photograph, the title and introduction set at its foot.
export default function PageHero({ title, intro, img, alt, kicker, children, areas = true }) {
  return (
    <section className="page-top">
      <div className="page-top-img">
        <Photo src={img} alt={alt} priority sizes="(max-width: 700px) 250vw, 100vw" widths={[750, 1000, 1500, 2500]} />
      </div>
      <div className="page-top-shade" aria-hidden="true" />
      <div className="wrap page-top-inner" data-enter>
        <div>
          {kicker && <p className="kicker">{kicker}</p>}
          <h1>{title}</h1>
        </div>
        <div>
          {intro && <p className="lead">{intro}</p>}
          {children && <div className="actions">{children}</div>}
          {areas && <p className="page-top-areas">Amherst · Buffalo · Cheektowaga · North Tonawanda · Niagara Falls</p>}
        </div>
      </div>
    </section>
  );
}

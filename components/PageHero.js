import Photo from "./Photo";

// Inner-page opening: the title and introduction side by side, then one wide photograph.
export default function PageHero({ title, intro, img, alt, kicker, children, areas = true }) {
  return (
    <section className="intro">
      <div className="wrap">
        <div className="intro-grid" data-enter>
          <div>
            {kicker && <p className="kicker">{kicker}</p>}
            <h1>{title}</h1>
          </div>
          <div className="intro-side">
            {intro && <p className="lead">{intro}</p>}
            {children && <div className="actions">{children}</div>}
            {areas && <p className="intro-areas">Amherst · Buffalo · Cheektowaga · North Tonawanda · Niagara Falls</p>}
          </div>
        </div>
        <div className="frame intro-photo">
          <Photo src={img} alt={alt} priority sizes="(max-width: 700px) 250vw, 100vw" widths={[750, 1000, 1500, 2500]} />
        </div>
      </div>
    </section>
  );
}

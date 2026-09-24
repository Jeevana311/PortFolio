function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="section-heading reveal">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2>
        {title} <span>{accent}</span>
      </h2>
    </div>
  );
}

export default SectionHeading;
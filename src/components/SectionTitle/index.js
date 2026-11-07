/**
 * Centered section heading with a monospace eyebrow and an accent rule.
 * Replaces the old `col col--2 col--offset-5 section-title` grid hack.
 */
export default function SectionTitle({eyebrow, title}) {
  return (
    <div className="sectionTitle">
      {eyebrow ? <span className="sectionTitle__eyebrow">{eyebrow}</span> : null}
      <h2 className="sectionTitle__heading">{title}</h2>
      <div className="sectionTitle__rule" />
    </div>
  );
}

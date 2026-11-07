import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Hero header shared by the landing page and the LiD page.
 * Same look as baolan2005.com: monospace eyebrow, gradient accent,
 * dotted-grid texture.
 */
export default function PageHero({eyebrow, title, highlight, lede, children}) {
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        {eyebrow ? <p className={styles.heroEyebrow}>{eyebrow}</p> : null}
        <h1 className={styles.heroTitle}>
          {title} {highlight ? <span className={styles.heroName}>{highlight}</span> : null}
        </h1>
        {lede ? <p className={styles.heroLede}>{lede}</p> : null}
        {children ? <div className={styles.heroActions}>{children}</div> : null}
      </div>
    </header>
  );
}

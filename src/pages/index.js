import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import PageHero from '@site/src/components/PageHero';
import SectionTitle from '@site/src/components/SectionTitle';
import styles from './index.module.css';

const POPULAR_SITES = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    description: 'Mạng xã hội tìm việc, bạn có thể tìm việc thông qua kênh này.',
  },
  {
    name: 'stepstone',
    href: 'https://www.stepstone.de/',
    description: 'Một trong những trang web tìm việc lớn nhất nước Đức.',
  },
  {
    name: 'xing',
    href: 'https://www.xing.com/',
    description: 'Một trong những trang web tìm việc lớn nhất nước Đức.',
  },
  {
    name: 'Make It in Germany',
    href: 'https://www.make-it-in-germany.com/en/working-in-germany/job-listings',
    description:
      'Trang web của Chính phủ Đức về thông tin visa và công việc, các bạn có thể tìm việc cũng như thông tin về loại visa phù hợp với mình.',
  },
  {
    name: 'Agentur für Arbeit',
    href: 'https://www.arbeitsagentur.de/jobsuche/',
    description:
      'Trang web của Cơ quan quản lý lao động liên bang Đức, bạn có thể tìm kiếm thông tin các vị trí phù hợp qua trang web này.',
  },
  {
    name: 'stellenanzeigen',
    href: 'https://www.stellenanzeigen.de/',
    description: 'Một trong những trang web tìm việc lớn nhất nước Đức.',
  },
  {
    name: 'Jobs beim Staat',
    href: 'https://www.jobs-beim-staat.de/',
    description: 'Trang web về việc làm tại các cơ quan công quyền Đức.',
  },
];

const STATES = [
  {
    name: 'Baden-Württemberg',
    links: [
      {label: 'Các công việc nhân viên của bang Baden-Württemberg', href: 'https://www.baden-wuerttemberg.de/de/service/stellen/stellenboerse-des-landes'},
      {label: 'Danh sách các cổng việc làm tại các cơ quan của bang', href: 'https://www.baden-wuerttemberg.de/de/service/stellen/stellenportale-und-karriereseiten-des-landes'},
      {label: 'Việc làm tại thành phố Karlsruhe', href: 'https://www.karlsruhe.de/stadt-rathaus/karriere-ausbildung/stellenportal'},
      {label: 'Việc làm tại Karlsruhe Institute of Technology', href: 'https://www.pse.kit.edu/english/karriere/121.php'},
      {label: 'Việc làm tại Hochschule Karlsruhe', href: 'https://www.h-ka.de/die-hochschule-karlsruhe/campus-karriere/stellenangebote'},
      {label: 'Việc làm tại University of Stuttgart', href: 'https://www.stellenwerk.de/en/stuttgart/'},
      {label: 'Việc làm tại University of Tübingen', href: 'https://uni-tuebingen.de/universitaet/karriere/freie-stellen/'},
    ],
  },
  {
    name: 'Bayern',
    links: [
      {label: 'Việc làm tại Technical University of Munich', href: 'https://www.tum.de/en/about-tum/careers-and-jobs/careers-at-tum'},
    ],
  },
  {
    name: 'Berlin',
    links: [
      {label: 'Các công việc nhân viên của bang Berlin', href: 'https://www.karriereportal-stellen.berlin.de/stellenangebote.html'},
    ],
  },
  {
    name: 'Brandenburg',
    links: [
      {label: 'Các công việc nhân viên của bang Brandenburg', href: 'https://karriere-in-brandenburg.de/stellenangebote'},
    ],
  },
  {
    name: 'Bremen',
    links: [
      {label: 'Job in Bremen', href: 'https://jobs.bremen.de/', note: 'Các công việc tại các công ty đang có ở Bremen'},
    ],
  },
  {
    name: 'Hamburg',
    links: [
      {label: 'Job in Hamburg', href: 'https://jobs.hamburg.de', note: 'Các công việc tại các công ty đang có ở Hamburg'},
    ],
  },
  {
    name: 'Hessen',
    links: [
      {label: 'Các công việc nhân viên của bang Hessen', href: 'https://stellensuche.hessen.de/unreg/index.html'},
    ],
  },
  {
    name: 'Mecklenburg-Vorpommern',
    links: [
      {label: 'Các công việc nhân viên của bang Mecklenburg-Vorpommern', href: 'https://karriere-in-mv.de/'},
    ],
  },
  {
    name: 'Niedersachsen',
    links: [
      {label: 'Các công việc nhân viên của bang Niedersachsen', href: 'https://www.niedersachsen.de/startseite/service/stellenausschreibungen/'},
    ],
  },
  {
    name: 'Nordrhein-Westfalen',
    links: [
      {label: 'Các công việc tại bang Nordrhein-Westfalen', href: 'https://karriere.nrw/'},
    ],
  },
  {
    name: 'Rheinland-Pfalz',
    links: [
      {label: 'Các công việc tại bang Rheinland-Pfalz', href: 'https://karriere.rlp.de/de/im-beruf/'},
    ],
  },
  {
    name: 'Saarland',
    links: [
      {label: 'Các công việc nhân viên của bang Saarland', href: 'https://www.saarland.de/DE/portale/karriere/stellenangebote'},
    ],
  },
  {
    name: 'Sachsen',
    links: [
      {label: 'Các công việc nhân viên của bang Sachsen', href: 'https://www.karriere.sachsen.de/'},
    ],
  },
  {
    name: 'Sachsen-Anhalt',
    links: [
      {label: 'Các công việc nhân viên của bang Sachsen-Anhalt', href: 'https://www.sachsen-anhalt.de/bs/stellenausschreibungen-der-landesverwaltung'},
    ],
  },
  {
    name: 'Schleswig-Holstein',
    links: [
      {label: 'Các công việc nhân viên của bang Schleswig-Holstein', href: 'https://www.schleswig-holstein.de/SiteGlobals/Forms/Stellensuche/Stellensuche_Formular.html?nn=497efc1d-9df5-4648-ad15-951e9ec47b69&callerId.HASH=1b58DemWTCZ1Z4DizWUNFfMCmxbsdcU%3D&callerId=497efc1d-9df5-4648-ad15-951e9ec47b69'},
    ],
  },
  {
    name: 'Thüringen',
    links: [
      {label: 'Các công việc nhân viên của bang Thüringen', href: 'https://karriere.thueringen.de/stellensuche'},
    ],
  },
];

function hostOf(href) {
  try {
    return new URL(href).hostname.replace(/^www\./, '');
  } catch {
    return href;
  }
}

function PopularSites() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle eyebrow="I. Phổ biến" title="Các trang tìm việc phổ biến" />
        <div className={styles.grid}>
          {POPULAR_SITES.map((site) => (
            <Link key={site.href} to={site.href} className={styles.siteCard}>
              <span className={styles.siteHost}>{hostOf(site.href)}</span>
              <h3 className={styles.siteName}>
                {site.name} <span className={styles.arrow}>↗</span>
              </h3>
              <p className={styles.siteDesc}>{site.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StateSites() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <SectionTitle eyebrow="II. Địa phương" title="Các trang web của các bang" />
        <div className={styles.grid}>
          {STATES.map((state, i) => (
            <div key={state.name} className={styles.stateCard}>
              <div className={styles.stateHeader}>
                <span className={styles.stateIndex}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.stateName}>{state.name}</h3>
              </div>
              <ul className={styles.linkList}>
                {state.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href}>{link.label}</Link>
                    {link.note ? <span className={styles.linkNote}>{link.note}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Tổng hợp các trang web tìm việc tại Đức"
      description="Tổng hợp các trang web tìm việc tại Đức: các trang phổ biến và các cổng việc làm của từng bang.">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2297027240894987"
          crossOrigin="anonymous"
        />
      </Head>
      <PageHero
        eyebrow="Jobsuche · Tìm việc ở Đức"
        title="Tổng hợp các trang web"
        highlight="tìm việc tại Đức"
        lede="Danh sách các trang tìm việc phổ biến và cổng việc làm của 16 bang. Lưu ý: để sang Đức làm việc, các bạn KHÔNG CẦN CÔNG TY SPONSOR! Trang đang được cập nhật thêm.">
        <Link className="button button--primary button--lg" to="/lidvn">
          Ôn thi Leben in Deutschland
        </Link>
        <Link className="button button--accent-outline button--lg" to="https://baolan2005.com">
          baolan2005.com
        </Link>
      </PageHero>
      <main>
        <PopularSites />
        <StateSites />
        <section className={styles.coffee}>
          <div className="container">
            <p>Nếu bạn thấy trang này hữu ích, các bạn có thể mua cho tôi 1 ly cà phê</p>
            <a href="https://www.buymeacoffee.com/baolanlequang" target="_blank" rel="noopener noreferrer">
              <img
                className="buymecoffee"
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
              />
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

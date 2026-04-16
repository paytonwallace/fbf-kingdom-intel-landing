import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kingdom Intel Podcast | Fueled By Fire",
  description:
    "Spirit-led conversations for founders, CEOs, and entrepreneurial leaders building profitable companies with clarity, conviction, and Kingdom intelligence.",
};

const platformPills = ["YouTube", "Spotify", "Apple Podcasts"];

const featuredEpisodes = [
  {
    number: "Episode 01",
    title: "Building highly profitable companies without losing the assignment.",
    summary:
      "A flagship conversation on profit, obedience, leadership pressure, and what it really looks like to build business God's way.",
  },
  {
    number: "Episode 02",
    title: "The operator's edge: structure, speed, and Spirit-led decision making.",
    summary:
      "Tactical conversations for founders and executives who need clear frameworks, faster decisions, and alignment at scale.",
  },
  {
    number: "Episode 03",
    title: "Faith, family, finance, and the cost of getting success out of order.",
    summary:
      "Honest stories and practical wisdom for leaders who want growth without sacrificing the people and priorities that matter most.",
  },
];

const topicCards = [
  {
    title: "Kingdom Intelligence",
    copy: "How discernment, stewardship, and bold obedience change the way leaders build.",
  },
  {
    title: "CEO Conversations",
    copy: "Real talk for founders, operators, and executives carrying the weight of leadership.",
  },
  {
    title: "Profit & Performance",
    copy: "Margin, execution, and wise growth without vanity metrics running the company.",
  },
  {
    title: "Faith & Family Alignment",
    copy: "Winning in business without letting success fracture home, marriage, or calling.",
  },
  {
    title: "Marketplace Influence",
    copy: "Stories and strategy for leaders called to create impact in the marketplace.",
  },
  {
    title: "Practical Frameworks",
    copy: "Shortcuts to clarity through patterns, principles, and hard-earned lessons.",
  },
];

const listenerPoints = [
  "Founders who want clarity, conviction, and stronger execution.",
  "CEOs building profitable companies with Kingdom-centered leadership.",
  "Operators carrying real complexity and real responsibility.",
  "Leaders hungry for substance, not more motivational noise.",
];

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p className={`${styles.eyebrow} ${light ? styles.eyebrowLight : ""}`}>{eyebrow}</p>
      <h2 className={light ? styles.lightHeading : styles.heading}>{title}</h2>
      {description ? (
        <p className={`${styles.sectionCopy} ${light ? styles.sectionCopyLight : ""}`}>{description}</p>
      ) : null}
    </div>
  );
}

export default function PodcastPage() {
  return (
    <main id="top" className={styles.pageShell}>
      <div className={styles.topBanner}>
        <div className={styles.container}>
          <div className={styles.topBannerInner}>
            <span>New Kingdom Intel Podcast conversations for CEOs, founders, and builders</span>
            <a href="#featured">Explore the show</a>
          </div>
        </div>
      </div>

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={`${styles.container} ${styles.heroLayout}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroKicker}>Fueled by Fire Leadership Network</p>
            <div className={styles.heroWordmark} aria-label="Kingdom Intel Podcast">
              <span>Kingdom</span>
              <span className={styles.heroWordmarkAccent}>Intel</span>
              <span>Podcast</span>
            </div>
            <p className={styles.heroSubtitle}>
              Spirit-led conversations for leaders building with conviction.
            </p>
            <p className={styles.heroDescription}>
              The Kingdom Intel Podcast is where marketplace leaders hear real conversations on
              leadership, profit, execution, stewardship, and what it takes to build business God's
              way in the middle of real pressure.
            </p>
            <div className={styles.heroActions}>
              <a className={`${styles.button} ${styles.buttonGold}`} href="#featured">
                Explore The Show
              </a>
              <a className={`${styles.button} ${styles.buttonGhost}`} href="#topics">
                See The Topics
              </a>
            </div>
            <div className={styles.platformRow}>
              {platformPills.map((platform) => (
                <span key={platform}>{platform}</span>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroFrame}>
              <Image
                src="/images/staci-speaking.jpg"
                alt="Staci Wallace speaking on stage"
                fill
                priority
                className={styles.heroImage}
                sizes="(max-width: 900px) 100vw, 42vw"
              />
              <div className={styles.heroImageShade} />
            </div>
            <div className={styles.heroNote}>
              <p className={styles.cardEyebrow}>Podcast Direction</p>
              <h3>Clear conversations for Kingdom-minded builders.</h3>
              <p>
                Leadership pressure, Spirit-led strategy, practical execution, and the kind of
                wisdom you can actually use in the marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className={styles.featuredSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="What The Show Covers"
            title="A sharp, substance-first podcast built for founders and high-capacity leaders."
            description="Built around practical, faith-rooted business conversations instead of generic inspiration, this page is meant to feel premium, clear, and easy to say yes to."
          />

          <div className={styles.featuredGrid}>
            {featuredEpisodes.map((episode) => (
              <article key={episode.number} className={styles.featuredCard}>
                <p className={styles.cardEyebrow}>{episode.number}</p>
                <h3>{episode.title}</h3>
                <p>{episode.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="topics" className={styles.topicsSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Inside The Conversations"
            title="The themes behind the microphone."
            description="Built to feel like Kingdom Intel: strategic, high-trust, and grounded in real-world leadership."
            light
          />

          <div className={styles.topicsGrid}>
            {topicCards.map((card) => (
              <article key={card.title} className={styles.topicCard}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.audienceSection}>
        <div className={`${styles.container} ${styles.audienceGrid}`}>
          <div className={styles.audienceImageWrap}>
            <Image
              src="/images/staci-larry-split.webp"
              alt="Larry and Staci Wallace"
              fill
              className={styles.audienceImage}
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div className={styles.audienceCopy}>
            <SectionHeading
              eyebrow="Who It's For"
              title="For leaders who want more than surface-level business content."
              description="This page is designed to attract the right listener quickly: founders, CEOs, operators, and entrepreneurial leaders who want clarity, substance, and Kingdom-centered perspective."
            />
            <ul className={styles.audienceList}>
              {listenerPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className={styles.pullQuote}>
              <p>
                "The strongest version of this page should feel like a premium entry point into the
                Kingdom Intel ecosystem, not just a generic podcast listing."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={`${styles.container} ${styles.finalShell}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Podcast Launch</p>
            <h2 className={styles.lightHeading}>A premium landing page built to grow with the show.</h2>
            <p className={`${styles.sectionCopy} ${styles.sectionCopyLight}`}>
              Ready for real platform links, featured episode embeds, guest highlights, and future
              call-to-action updates without changing the core design system.
            </p>
          </div>
          <a className={`${styles.button} ${styles.buttonRed}`} href="#featured">
            Explore The Show
          </a>
        </div>
      </section>
    </main>
  );
}

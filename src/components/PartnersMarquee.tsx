const partners = [
  {
    name: "GSM Group",
    logo: "https://cdn.brandfetch.io/idBz5VIvsz/w/1791/h/1848/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1689131148936",
  },
  {
    name: "ICEA LION",
    logo: "https://assets-eu-01.kc-usercontent.com/ad38edda-3d08-01a1-9d06-234f976ab5b7/7815f022-7eef-4739-9aec-5a53134d26a3/Icea%20Lion%20Logo.png",
  },
  {
    name: "Simplify VFD",
    logo: "https://simplify.co.tz/og-image.png",
  },
  {
    name: "Azania Bank",
    wordmark: "AZANIA BANK",
    monogram: "AB",
  },
  {
    name: "flySunBird",
    logo: "https://cdn.prod.website-files.com/6950ef0ec33ebffff4d16a9c/6968dae1b22d93f91f7de2d5_FSB_Bird.png",
    wordmark: "flySunBird",
  },
  {
    name: "I&M Bank",
    logo: "https://media.licdn.com/dms/image/v2/C4D1BAQGIz6lEJ_PBaA/company-background_10000/company-background_10000/0/1605081795747/i_m_bank_tanzania_limited_cover?e=2147483647&t=6pZDXY8qtk3H3ScB3xErGF2viLlOinzsHF29WTyixRs&v=beta",
  },
  {
    name: "Ramani",
    logo: "https://images.squarespace-cdn.com/content/v1/5355ed0ae4b0753f93e22adc/1643198535266-ZFDQP71KAVXDCUQ7VAUN/Ramani%2BLogo.png?format=1500w",
  },
] as const;

function PartnerLogo({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div className="corporate-partner-card" title={partner.name}>
      {"logo" in partner && partner.logo ? (
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="corporate-partner-logo"
        />
      ) : (
        <span className="corporate-partner-wordmark" aria-label={partner.name}>
          {"monogram" in partner && partner.monogram ? <span className="corporate-partner-monogram">{partner.monogram}</span> : null}
          <span>{partner.wordmark ?? partner.name}</span>
        </span>
      )}
      {"wordmark" in partner && partner.wordmark && "logo" in partner && partner.logo ? (
        <span className="corporate-partner-caption">{partner.wordmark}</span>
      ) : null}
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section className="corporate-partners-section" aria-labelledby="partners-heading">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="corporate-kicker">Our partners</p>
          <h2 id="partners-heading" className="corporate-title mx-auto mt-4">Trusted Relationships. Shared Momentum.</h2>
          <p className="corporate-copy mt-5">
            We work across a growing network of organizations in financial services, technology, enterprise, and mobility.
          </p>
        </div>
      </div>

      <div className="corporate-partner-marquee mt-10" aria-label="Partner logos">
        <div className="corporate-partner-track">
          <div className="corporate-partner-group">
            {partners.map((partner) => <PartnerLogo key={partner.name} partner={partner} />)}
          </div>
          <div className="corporate-partner-group" aria-hidden="true">
            {partners.map((partner) => <PartnerLogo key={`duplicate-${partner.name}`} partner={partner} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

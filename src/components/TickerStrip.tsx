import { tickerItems } from "@/lib/data";

export default function TickerStrip() {
  const fullLoop = [...tickerItems, ...tickerItems];

  return (
    <section
      className="overflow-hidden bg-spark-accent py-3.5 text-spark-dark"
      aria-hidden="true"
    >
      <div className="ticker-track flex min-w-max gap-8 whitespace-nowrap px-6">
        {fullLoop.map((item, index) => (
          <div key={`${item}-${index}`} className="inline-flex items-center gap-8">
            <span className="text-sm font-semibold uppercase tracking-wide md:text-base">
              {item}
            </span>
            <span className="text-spark-dark/40" aria-hidden="true">
              /
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

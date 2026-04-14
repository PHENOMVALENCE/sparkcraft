import { tickerItems } from "@/lib/data";

export default function TickerStrip() {
  const fullLoop = [...tickerItems, ...tickerItems];

  return (
    <section className="overflow-hidden bg-spark-accent py-4 text-spark-dark">
      <div className="ticker-track flex min-w-max gap-5 whitespace-nowrap px-6">
        {fullLoop.map((item, index) => (
          <div key={`${item}-${index}`} className="inline-flex items-center gap-5">
            <span className="text-sm font-semibold uppercase tracking-wide md:text-base">{item}</span>
            <span className="text-base">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}
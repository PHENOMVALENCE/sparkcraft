import Reveal from "@/components/ui/Reveal";
import FinSparkSection, { FinSparkHeading } from "@/components/finspark/FinSparkSection";
import { products } from "@/lib/finspark-data";

export default function ProductGrid() {
  return (
    <FinSparkSection id="products" tone="white">
      <FinSparkHeading
        eyebrow="Four products"
        title="Each one does a real job on its own."
        lede="They are not modules of a suite that has to be bought whole. A cooperative can run Reach without Score. A trader can run Till and never touch Tag. What they share is a common record — and that is where the compounding starts."
      />

      <div className="mt-14 grid gap-px border border-fs-line bg-fs-line lg:grid-cols-2">
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <Reveal key={product.id} delay={(index % 2) * 0.06} className="bg-white">
              <article className="flex h-full flex-col p-7 md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="text-xs font-black tabular-nums tracking-[0.2em] text-fs-gold"
                      aria-hidden="true"
                    >
                      {product.id}
                    </p>
                    <h3 className="mt-2 text-xl font-black tracking-tight text-fs-navy md:text-2xl">
                      {product.name}
                    </h3>
                  </div>
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center border border-fs-line bg-fs-canvas text-fs-teal"
                    aria-hidden="true"
                  >
                    <Icon size={20} />
                  </span>
                </div>

                <p className="mt-5 text-[15px] font-semibold leading-7 text-fs-navy-2">
                  {product.proposition}
                </p>

                <p className="mt-4 text-[15px] leading-7 text-fs-slate">{product.body}</p>

                <div className="mt-auto pt-7">
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fs-slate">
                    {product.servesLabel}
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.serves.map((audience) => (
                      <li
                        key={audience}
                        className="border border-fs-line bg-fs-canvas px-3 py-1.5 text-xs font-medium text-fs-ink"
                      >
                        {audience}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-fs-line pt-5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fs-teal">
                      Role in the signal
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-fs-slate">{product.signal}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <p className="mt-8 max-w-prose-wide text-sm leading-7 text-fs-slate">
          FinSpark products are in development. Nothing on this page should be read as a
          claim of a live deployment, a regulatory authorisation, or a generally available
          service.
        </p>
      </Reveal>
    </FinSparkSection>
  );
}

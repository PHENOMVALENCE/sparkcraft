import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Boxes,
  Building2,
  Gauge,
  Landmark,
  QrCode,
  Route,
  ScrollText,
  Store,
  TrendingUp,
} from "lucide-react";

export const FINSPARK_CONTACT = {
  email: "contact@sparkcraft.co.tz",
  phone: "+255 756 948 267",
  phoneHref: "tel:+255756948267",
  location: "Dar es Salaam, Tanzania",
  domain: "sparkcraft.co.tz",
  partnershipMailto:
    "mailto:contact@sparkcraft.co.tz?subject=FinSpark%20partnership%20conversation",
} as const;

/**
 * Evidence band.
 *
 * Every numeric claim below is sourced to a named published report and carries
 * its reporting year. Two figures proposed in the original FinSpark one-pager
 * (an insurance-usage rate of 43.1% and a ~$100B African agricultural financing
 * gap) could not be traced to a primary institutional source and are therefore
 * NOT published here. See docs/PROJECT-STATUS.md for the open items.
 */
export type EvidenceStat = {
  value: string;
  label: string;
  year: string;
  source: string;
  sourceHref: string;
};

export const evidenceStats: readonly EvidenceStat[] = [
  {
    value: "60.75M",
    label: "Active mobile money accounts in Tanzania",
    year: "2024",
    source: "Annual Financial Inclusion Report 2024, National Council for Financial Inclusion / Bank of Tanzania",
    sourceHref:
      "https://www.bot.go.tz/Publications/Regular/Annual%20Report/en/2025082509110517.pdf",
  },
  {
    value: "1.48M",
    label: "Mobile money agents reaching the last mile",
    year: "2024",
    source: "Annual Financial Inclusion Report 2024, National Council for Financial Inclusion / Bank of Tanzania",
    sourceHref:
      "https://www.bot.go.tz/Publications/Regular/Annual%20Report/en/2025082509110517.pdf",
  },
  {
    value: "76%",
    label: "Of Tanzanian adults formally financially included",
    year: "2023",
    source: "FinScope Tanzania 2023, Financial Sector Deepening Trust",
    sourceHref:
      "https://www.fsdt.or.tz/wp-content/uploads/2023/07/FinScope-Tanzania-2023-Full-Report-Insights-that-Drive-Innovation.pdf",
  },
  {
    value: "10%",
    label: "Of Tanzanian adults using insurance, down from 15% in 2017",
    year: "2023",
    source: "FinScope Tanzania 2023, Financial Sector Deepening Trust",
    sourceHref:
      "https://www.fsdt.or.tz/wp-content/uploads/2023/07/FinScope-Tanzania-2023-Full-Report-Insights-that-Drive-Innovation.pdf",
  },
] as const;

export const evidenceNote =
  "Payment rails already reach the last mile. Risk files do not. Access to a wallet is not the same as being legible to a credit committee — and insurance is moving in the wrong direction.";

export const problemPoints = [
  {
    title: "The behaviour exists",
    body:
      "A farmer may have delivered to the same cooperative for nine seasons. A trader may have restocked from the same distributor every fortnight for six years. That is a repayment history in everything but name.",
  },
  {
    title: "The record does not",
    body:
      "Those transactions, deliveries, repayments, cooperative memberships and yields sit in paper ledgers, WhatsApp threads, agent float records and someone's memory. They are almost never assembled into a file a lender can read.",
  },
  {
    title: "So capital prices the unknown",
    body:
      "Faced with no verifiable history, a capital provider does the rational thing: it prices the uncertainty, demands collateral the customer does not have, or declines. The customer is not judged risky. They are judged unreadable.",
  },
  {
    title: "The gap is evidentiary",
    body:
      "What is missing is not willingness to lend, and not economic activity. What is missing is legible, consented, auditable data — assembled once, at the point where the activity actually happens.",
  },
] as const;

export const problemPullQuote = "The capital is willing. The paperwork does not exist.";

export const operatingModelStatement =
  "FinSpark does not lend and does not underwrite insurance. It provides infrastructure that helps banks, MFIs, insurers, development programmes, cooperatives and distributors identify, reach and serve last-mile customers.";

export const operatingPrinciples: readonly {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: ScrollText,
    title: "Built on data partners already generate",
    body:
      "We do not ask a cooperative or a distributor to start collecting something new and unfamiliar. We instrument the operational records they already produce — deliveries, restocks, repayments, memberships — and structure them into something a risk team can use.",
  },
  {
    icon: Landmark,
    title: "Consent and data roles stated up front",
    body:
      "Ownership of the underlying data, the lawful basis for processing it, retention periods, and who acts as controller versus processor are settled in the partnership agreement before deployment — designed with the requirements of Tanzania's Personal Data Protection Act in mind, and subject to legal review for each engagement.",
  },
  {
    icon: Building2,
    title: "Regulated activity stays with regulated partners",
    body:
      "Where cover is embedded into a real transaction or an agricultural input, it is underwritten by an appropriately licensed insurer. Where credit is extended, it is extended by the licensed lender. FinSpark supplies the rails, the record and the reach.",
  },
] as const;

export type FinSparkProduct = {
  id: string;
  name: string;
  icon: LucideIcon;
  proposition: string;
  body: string;
  servesLabel: string;
  serves: readonly string[];
  signal: string;
};

export const products: readonly FinSparkProduct[] = [
  {
    id: "01",
    name: "FinSpark Score",
    icon: Gauge,
    proposition:
      "Embedded credit scoring that turns partner-held behaviour into a risk file a credit committee can actually defend.",
    body:
      "Score takes the operational and behavioural data a partner already holds — delivery consistency, repayment on input credit, cooperative standing, purchase cadence — and structures it into an explainable assessment. Every output is traceable to the evidence behind it, so a credit officer can see which factors moved the file and why. It is designed to support a lending decision, not to replace one, and it is deliberately not a black box.",
    servesLabel: "Built for",
    serves: ["Banks", "Microfinance institutions", "Development lenders", "Agri-lenders"],
    signal:
      "Consumes the record that Till, Tag and Reach create; returns an assessment the partner can act on.",
  },
  {
    id: "02",
    name: "FinSpark Tag",
    icon: QrCode,
    proposition:
      "A QR touchpoint on a physical product that carries identity, provenance, registration and — through a licensed partner — embedded cover.",
    body:
      "A tag applied to an agricultural input or comparable product gives the end customer a single scan that proves the item is genuine, registers who bought it and where, and opens the door to relevant cover underwritten by an appropriately licensed insurer. For the manufacturer or distributor it is provenance and anti-counterfeit control. For the customer it is a first verifiable footprint.",
    servesLabel: "Built for",
    serves: ["Input manufacturers", "Distributors", "Licensed insurers", "Agro-dealers"],
    signal:
      "Creates a first identity and purchase event for a customer who may have no prior record at all.",
  },
  {
    id: "03",
    name: "FinSpark Reach",
    icon: Route,
    proposition:
      "Dispatch, delivery confirmation, aggregation and credit-linked distribution for organisations serving dispersed members.",
    body:
      "Reach handles the physical last mile: what was dispatched, who received it, when it was confirmed, what came back the other way at aggregation, and how that ties to any credit extended against it. It gives a cooperative union or distributor operational control over a network that is otherwise reconstructed from phone calls — and gives a lender a confirmed delivery event rather than an assertion.",
    servesLabel: "Built for",
    serves: ["Cooperative unions", "Aggregators", "Distributors", "Development programmes"],
    signal:
      "Confirms fulfilment and aggregation events, closing the loop between credit extended and value delivered.",
  },
  {
    id: "04",
    name: "FinSpark Till",
    icon: Store,
    proposition:
      "Point of sale, inventory and automated reconciliation for the small traders who currently keep books in a notebook.",
    body:
      "Till earns its place on day one by doing an unglamorous job well: recording sales, tracking stock, and reconciling the day's takings without manual arithmetic. The by-product is what matters downstream — a consistent, time-stamped, verified transaction record for a business that previously had none, held by the trader and shareable on their terms.",
    servesLabel: "Built for",
    serves: ["Small traders", "Cooperative outlets", "Agro-dealers", "Market vendors"],
    signal:
      "Generates the continuous transaction history that makes an assessment possible in the first place.",
  },
] as const;

export const loopSteps = [
  {
    step: "01",
    name: "Till + Tag",
    role: "Capture",
    body: "Verified sales, stock movement, product identity and registration events at the point they occur.",
  },
  {
    step: "02",
    name: "Score",
    role: "Assess",
    body: "Structured, explainable risk files assembled from that record and handed to the lending partner.",
  },
  {
    step: "03",
    name: "Reach",
    role: "Deliver",
    body: "Credit, inputs or cover dispatched and confirmed against a real, named, located customer.",
  },
  {
    step: "04",
    name: "Repayment signal",
    role: "Confirm",
    body: "Performance flows back as evidence — repaid, delayed, aggregated, delivered, renewed.",
  },
] as const;

export const loopOutcome = {
  title: "A stronger next decision",
  body:
    "Each cycle leaves the partner with better evidence, cheaper servicing and a more informed decision than the one before — and leaves the customer with a record they did not previously have.",
};

export const loopStrapline = "Deliver the service. Strengthen the signal.";

export const loopTextEquivalent =
  "The Legibility Loop is a four-stage cycle. Till and Tag capture verified transaction, stock and product-registration data. Score converts that data into an explainable risk file. Reach delivers the resulting credit, inputs or cover and confirms fulfilment. The repayment and delivery signal then returns to the start of the cycle, so each subsequent decision is made on stronger evidence than the last.";

export type Audience = {
  icon: LucideIcon;
  name: string;
  proposition: string;
  points: readonly string[];
};

export const audiences: readonly Audience[] = [
  {
    icon: Landmark,
    name: "Development organisations, DFIs and agencies",
    proposition:
      "A measurement and delivery layer for programmes that need to show where value actually landed.",
    points: [
      "Confirmed delivery and beneficiary reach rather than self-reported completion",
      "Structured baseline and follow-up data collected as a by-product of the programme itself",
      "Infrastructure that can outlast the funding cycle it was built in",
    ],
  },
  {
    icon: Banknote,
    name: "Banks, MFIs and insurers",
    proposition:
      "A route into a segment you can currently neither assess nor service at an acceptable cost.",
    points: [
      "Explainable risk files on customers with no bureau history",
      "Distribution and servicing through existing cooperative and dealer networks",
      "Cover embedded into transactions that are already happening, underwritten by you",
    ],
  },
  {
    icon: Boxes,
    name: "Cooperative unions, aggregators and distributors",
    proposition:
      "Operational control over a member network that is currently managed on paper and by phone.",
    points: [
      "Dispatch, delivery confirmation and aggregation in one record",
      "Input credit tracked against the member and the season it belongs to",
      "Provenance and anti-counterfeit control across the products you move",
    ],
  },
  {
    icon: TrendingUp,
    name: "Strategic and impact investors",
    proposition:
      "Exposure to infrastructure positioned between capital providers and a segment they cannot presently reach.",
    points: [
      "Four products that each solve a standalone operational problem",
      "A shared data layer whose usefulness compounds as deployments accumulate",
      "A model built around licensed partners rather than in competition with them",
    ],
  },
] as const;

export const whySparkcraft = [
  {
    title: "We already work where the regulation is",
    body:
      "Sparkcraft Technologies has spent its working life inside African regulatory environments — permitting, compliance, local content, government liaison. Financial infrastructure at the last mile is a regulated-adjacent business, and that is the terrain we know.",
  },
  {
    title: "We start from market evidence, not a product idea",
    body:
      "Our core practice is market intelligence: establishing what is actually true on the ground before capital is committed. FinSpark is the same discipline applied to a customer segment instead of a country.",
  },
  {
    title: "We are in the room, in Dar es Salaam",
    body:
      "Institutional relationships, in-country presence and an operating base in Tanzania are prerequisites for building anything that has to reach a cooperative in the field. We are not designing this remotely.",
  },
  {
    title: "We have built beyond advice before",
    body:
      "Sparkgreen took the same route: a structural gap our clients faced, closed with a delivery capability rather than a recommendation. FinSpark is the second venture out of that pattern.",
  },
] as const;

export const ctaHeadline =
  "Bring us a community you cannot currently underwrite or serve efficiently.";

export const ctaBody =
  "Tell us about a specific group — a cooperative's membership, a distributor's dealer network, a programme's beneficiary list, a market's traders. We will work through what data already exists, what infrastructure would be needed to make it usable, how the service would actually be delivered, and what a realistic implementation path looks like.";

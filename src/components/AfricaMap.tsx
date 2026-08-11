type AfricaMapProps = {
  className?: string;
};

export default function AfricaMap({ className = "" }: AfricaMapProps) {
  return (
    <svg
      viewBox="0 0 420 500"
      className={className}
      role="img"
      aria-label="Abstract map of Africa highlighting East African operations"
    >
      <path
        d="M206 32L248 56L274 94L312 108L326 160L302 198L298 246L332 286L314 334L278 364L236 370L214 406L182 444L146 420L126 374L98 342L70 302L78 252L110 212L128 170L160 138L176 96L206 32Z"
        fill="#1A3C2E"
        stroke="#C9982A"
        strokeWidth="1"
        opacity="0.9"
      />
      <path
        d="M182 444L214 406L236 370L278 364"
        stroke="#C9982A"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="278" cy="364" r="7" fill="#C9982A" />
      <circle
        cx="278"
        cy="364"
        r="18"
        fill="none"
        stroke="#C9982A"
        strokeWidth="1"
        opacity="0.45"
      />
    </svg>
  );
}

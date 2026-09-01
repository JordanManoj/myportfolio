import { stackData } from '@/lib/data';

export const Marquee = () => {
  const items = [...stackData, ...stackData];

  return (
    <div className="border-border bg-card relative z-[1] w-full overflow-hidden border-y py-[18px]">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`font-heading text-sm font-semibold uppercase tracking-wide ${
              i % 3 === 0 ? 'text-flame1' : 'text-ink-faint'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

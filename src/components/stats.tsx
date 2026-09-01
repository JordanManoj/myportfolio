import { statsData } from '@/lib/data';

export const Stats = () => {
  return (
    <div className="border-border flex w-full flex-col border-y sm:flex-row">
      {statsData.map((stat, i) => (
        <div
          key={stat.label}
          className={`border-border min-w-[150px] flex-1 px-[30px] py-[34px] ${
            i !== statsData.length - 1
              ? 'border-b sm:border-b-0 sm:border-r'
              : ''
          }`}
        >
          <div className="font-heading text-[34px] font-black">
            <span className="text-flame1">{stat.num}</span>
          </div>
          <div className="text-muted-foreground mt-1.5 text-[13px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

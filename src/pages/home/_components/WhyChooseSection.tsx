import { Dumbbell, ShieldCheck, Smartphone } from "lucide-react";
import { whyChooseItems } from "../../../lib/site";

const icons = [Smartphone, ShieldCheck, Dumbbell] as const;

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[linear-gradient(180deg,#676c70_0%,#54595e_100%)] px-6 py-16 shadow-[0_28px_70px_rgba(61,49,33,0.18)] lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,198,106,0.13),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />

        <div className="relative mb-16 text-center">
          <p className="section-script-title">Pourquoi</p>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.34em] text-white md:text-5xl">
            NOUS CHOISIR ?
          </h2>
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 md:gap-8">
          {whyChooseItems.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="relative flex h-full rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/18 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-black/18 before:to-transparent before:content-[''] transition-all duration-300 hover:-translate-y-2"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.18) 0px -12px 16px inset, rgba(0, 0, 0, 0.18) 0px 10px 22px",
                }}
              >
                <div className="relative z-10 flex h-full w-full flex-col items-start gap-4 px-5 py-6 text-left sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/22 bg-black/18 sm:h-16 sm:w-16">
                    <Icon className="text-primary" size={24} strokeWidth={1.6} />
                  </div>
                  <div className="h-px w-full shrink-0 rounded bg-white/18 sm:h-16 sm:w-[2px]" />
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <div className="break-words text-base font-bold uppercase leading-snug tracking-[0.18em] text-[#F7C66A] sm:text-lg sm:tracking-wider">
                      {item.title}
                    </div>
                    <div className="mt-3 text-sm leading-relaxed text-white/88 sm:text-[15px]">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

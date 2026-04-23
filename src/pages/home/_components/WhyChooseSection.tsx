const iconBase = import.meta.env.BASE_URL;

const reasons = [
  {
    icon: `${iconBase}choose.svg`,
    title: "AMÉNAGEMENT",
    description:
      "Transformez votre espace de vie avec notre service d'aménagement intérieur.",
  },
  {
    icon: `${iconBase}management.svg`,
    title: "GESTION DE COPROPRIÉTÉ",
    description:
      "Notre service de gestion assure une sécurité 24h/24, l'entretien des espaces collectifs et le bon fonctionnement de la résidence.",
  },
  {
    icon: `${iconBase}commercial.svg`,
    title: "LOCAUX COMMERCIAUX",
    description:
      "Boostez votre activité avec nos locaux commerciaux en location dans des zones stratégiques.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="section-script-title">Pourquoi</p>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.34em] text-foreground md:text-5xl">
            NOUS CHOISIR ?
          </h2>
        </div>

        <div className="mx-auto mb-20 grid max-w-6xl grid-cols-1 items-stretch gap-5 md:gap-8">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="relative flex h-full rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-black/20 before:to-transparent before:content-[''] transition-all duration-300 hover:-translate-y-2"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px -12px 16px inset, rgba(0, 0, 0, 0.22) 0px 10px 22px",
              }}
            >
              <div className="relative z-10 flex h-full w-full flex-col items-start gap-4 px-5 py-6 text-left sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16">
                  <img alt="" className="h-12 w-12 sm:h-14 sm:w-14" src={item.icon} />
                </div>
                <div className="h-px w-full shrink-0 rounded bg-white/20 sm:h-16 sm:w-[2px]" />
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <div className="break-words text-base font-bold uppercase leading-snug tracking-[0.18em] text-[#F7C66A] sm:text-lg sm:tracking-wider">
                    {item.title}
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-white/85 sm:text-[15px]">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  Maximize2,
  Rotate3D,
} from "lucide-react";

const TOURS = [
  {
    id: 1,
    name: "Residence Al Maqam",
    location: "Hydra, Alger",
    type: "Penthouse 320m2",
    iframeSrc: "https://my.matterport.com/show/?m=SxQL3iGyvYk&play=1&qs=1&lang=fr",
    thumbnail:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=500&q=80",
    rooms: ["Salon", "Cuisine", "Chambre Master", "Salle de bain", "Terrasse"],
  },
  {
    id: 2,
    name: "Les Terrasses de Sidi Yahia",
    location: "Sidi Yahia, Alger",
    type: "Duplex 220m2",
    iframeSrc: "https://my.matterport.com/show/?m=j4RZx7ZGM6T&play=1&qs=1&lang=fr",
    thumbnail:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
    rooms: ["Entree", "Sejour", "Suite parentale", "2 Chambres", "Terrasse panoramique"],
  },
  {
    id: 3,
    name: "Palais du Telemly",
    location: "Telemly, Alger",
    type: "Penthouse 400m2",
    iframeSrc: "https://my.matterport.com/show/?m=AHygR9aNCz7&play=1&qs=1&lang=fr",
    thumbnail:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=500&q=80",
    rooms: ["Grand hall", "Salon double", "4 Suites", "Terrasse 100m²", "Salle de cinema"],
  },
];

export default function Visite3DPage() {
  const [selectedTour, setSelectedTour] = useState(TOURS[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentIndex = TOURS.findIndex((tour) => tour.id === selectedTour.id);

  const goNext = () => setSelectedTour(TOURS[(currentIndex + 1) % TOURS.length]);
  const goPrev = () => setSelectedTour(TOURS[(currentIndex - 1 + TOURS.length) % TOURS.length]);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="relative h-52 overflow-hidden">
        <img
          alt="Visite 3D"
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1920&q=80"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              Immersif & Interactif
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h1 className="text-center font-serif text-4xl font-bold text-foreground md:text-6xl">
            Visite 3D en Direct
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-1">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Choisir un Bien
            </h3>
            {TOURS.map((tour) => (
              <button
                key={tour.id}
                className={`w-full cursor-pointer overflow-hidden border text-left transition-all ${
                  selectedTour.id === tour.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setSelectedTour(tour)}
                type="button"
              >
                <div className="relative h-24 overflow-hidden">
                  <img alt={tour.name} className="h-full w-full object-cover" src={tour.thumbnail} />
                  {selectedTour.id === tour.id ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                      <Rotate3D className="text-primary" size={20} />
                    </div>
                  ) : null}
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold leading-tight text-foreground">{tour.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{tour.type}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-4 lg:col-span-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  {selectedTour.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {selectedTour.location} - {selectedTour.type}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  onClick={goPrev}
                  type="button"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  onClick={goNext}
                  type="button"
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  onClick={() => setIsFullscreen(true)}
                  type="button"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>

            <motion.div
              key={selectedTour.id}
              animate={{ opacity: 1 }}
              className="relative aspect-video w-full overflow-hidden border border-border bg-card"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                allowFullScreen
                className="h-full w-full"
                src={selectedTour.iframeSrc}
                title={`Visite 3D - ${selectedTour.name}`}
              />
            </motion.div>

            <div className="flex items-start gap-4">
              <Info className="mt-0.5 shrink-0 text-primary" size={14} />
              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                  Espaces de ce bien
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedTour.rooms.map((room) => (
                    <span
                      key={room}
                      className="cursor-pointer border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {room}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border border-border bg-secondary/30 p-4 sm:grid-cols-3">
              {[
                { icon: "🖱️", title: "Naviguer", desc: "Cliquez et glissez pour vous orienter" },
                { icon: "⚲", title: "Se deplacer", desc: "Double-cliquez sur un point pour avancer" },
                { icon: "⛶", title: "Plein ecran", desc: "Cliquez l'icone pour une experience totale" },
              ].map((tip) => (
                <div key={tip.title} className="flex items-start gap-3">
                  <span className="text-lg">{tip.icon}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      {tip.title}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isFullscreen ? (
        <div
          className="fixed inset-0 z-[200] flex flex-col bg-background"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-3">
            <span className="font-serif text-lg text-foreground">{selectedTour.name}</span>
            <button
              className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsFullscreen(false)}
              type="button"
            >
              Fermer ✕
            </button>
          </div>
          <div className="flex-1" onClick={(event) => event.stopPropagation()}>
            <iframe
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              className="h-full w-full"
              src={selectedTour.iframeSrc}
              title={`Visite 3D - ${selectedTour.name}`}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

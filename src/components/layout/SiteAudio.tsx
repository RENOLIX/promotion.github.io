import { Music4, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteInfo } from "../../lib/site";

export default function SiteAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showMobileLabel, setShowMobileLabel] = useState(true);

  const startPlayback = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.loop = true;
    audio.volume = 0.22;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleCanPlay = () => setIsReady(true);
    const unlockPlayback = () => {
      void startPlayback();
    };

    audio.loop = true;
    audio.volume = 0.22;
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("canplay", handleCanPlay);

    void startPlayback();

    window.addEventListener("pointerdown", unlockPlayback);
    window.addEventListener("keydown", unlockPlayback);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("canplay", handleCanPlay);
      window.removeEventListener("pointerdown", unlockPlayback);
      window.removeEventListener("keydown", unlockPlayback);
    };
  }, [startPlayback]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowMobileLabel(false);
    }, 10000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      await startPlayback();
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} preload="auto">
        <source
          src={`${import.meta.env.BASE_URL}el-azzali/site-ambience.mp3`}
          type="audio/mpeg"
        />
      </audio>

      <button
        aria-label={isPlaying ? "Couper la musique du site" : "Activer la musique du site"}
        className="fixed bottom-5 right-5 z-[80] flex items-center gap-3 rounded-full border border-[#6f5330]/18 bg-[rgba(255,248,238,0.92)] px-4 py-3 text-left shadow-[0_18px_40px_rgba(77,55,28,0.16)] backdrop-blur-xl transition-transform hover:-translate-y-0.5"
        onClick={() => {
          void togglePlayback();
        }}
        type="button"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </span>
        <span className={`${showMobileLabel ? "block" : "hidden"} sm:block`}>
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#8c6d45]">
            <Music4 size={13} />
            Ambiance du site
          </span>
          <span className="mt-1 block text-sm font-medium text-[#3f2d1b]">
            {isPlaying
              ? "Musique en lecture"
              : isReady
                ? `Activer la suite de ${siteInfo.promoterShort}`
                : "Chargement de la musique"}
          </span>
        </span>
      </button>
    </>
  );
}

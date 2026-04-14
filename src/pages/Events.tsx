import { useState } from 'react';
import { CalendarDays, MapPin, ChevronDown, ChevronUp, Play, Music as MusicIcon } from 'lucide-react';

// Mock data
const EVENTS = [
  {
    id: 1,
    title: "Santa Ceia",
    date: "03 de Maio de 2026",
    time: "20:00",
    location: "Igreja Batista Ágape",
    description: "Um momento de lembrar a morte e ressurreição de Jesus.",
    songs: [
      {
        id: "s1",
        title: "Canção da Revelação",
        composer: "Jennie Lee Riddle",
        audioDemoUrl: "/audio/cancaoDaRevelacao-Demonstrativo.mp3",
        naipes: [
          { id: "s1-soprano", name: "Soprano", pdfUrl: "/pdf/cancaoRevelacao.pdf", audioUrl: "/audio/cancaoDaRevelacao-Soprano.mp3" },
          { id: "s1-mezzo", name: "Mezzo", pdfUrl: "/pdf/cancaoRevelacao.pdf", audioUrl: "/audio/cancaoDaRevelacao-Mezzo.mp3" },
          { id: "s1-tenor", name: "Tenor", pdfUrl: "/pdf/cancaoRevelacao.pdf", audioUrl: "/audio/cancaoDaRevelacao-Tenor.mp3" },
          { id: "s1-baixo", name: "Baixo", pdfUrl: "/pdf/cancaoRevelacao.pdf", audioUrl: "/audio/cancaoDaRevelacao-Baixo.mp3" }
        ]
      },
      {
        id: "s2",
        title: "Em Jesus Amigo Temos",
        composer: "Joseph M. Scriven",
        audioDemoUrl: "/audio/emJesusAmigoTemos-Demonstrativo.mp3",
        naipes: [
          { id: "s2-soprano", name: "Soprano", pdfUrl: "/pdf/emJesusAmigoTemos.pdf", audioUrl: "/audio/emJesusAmigoTemos-Soprano.mp3" },
          { id: "s2-mezzo", name: "Mezzo", pdfUrl: "/pdf/emJesusAmigoTemos.pdf", audioUrl: "/audio/emJesusAmigoTemos-Mezzo.mp3" },
          { id: "s2-tenor-i", name: "Tenor I", pdfUrl: "/pdf/emJesusAmigoTemos.pdf", audioUrl: "/audio/emJesusAmigoTemos-Tenor I.mp3" },
          { id: "s2-tenor-ii", name: "Tenor II", pdfUrl: "/pdf/emJesusAmigoTemos.pdf", audioUrl: "/audio/emJesusAmigoTemos-Tenor II.mp3" },
          { id: "s2-baixo", name: "Baixo", pdfUrl: "/pdf/emJesusAmigoTemos.pdf", audioUrl: "/audio/emJesusAmigoTemos-Baixo.mp3" },
        ]
      }
    ]
  }
];

const Events = () => {
  const [activeSong, setActiveSong] = useState<string | null>(null);
  const [activeNaipe, setActiveNaipe] = useState<string | null>(null);

  // Usa o BASE_URL dinâmico do Vite (no deploy será /ensaioCoral/, mas localmente pode ser outro se configurado)
  const getAssetUrl = (path: string) => {
    // Se a string começar com /, remova para não duplicar com a barra do BASE_URL
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const toggleSong = (songId: string) => {
    if (activeSong === songId) {
      setActiveSong(null);
      setActiveNaipe(null);
    } else {
      setActiveSong(songId);
      setActiveNaipe(null);
    }
  };

  const toggleNaipe = (naipeId: string) => {
    setActiveNaipe(prev => prev === naipeId ? null : naipeId);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-base">

      {/* Header */}
      <div className="bg-primary text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2670&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Temporada de Concertos</h1>
          <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">
            Acompanhe nossa agenda de apresentações e explore o repertório detalhado de cada evento.
          </p>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {EVENTS.map((event) => (
          <div key={event.id} className="liquid-glass rounded-2xl overflow-hidden border border-primary/10 hover-lift relative bg-white/40">
            {/* Event Header */}
            <div className="p-8 md:p-10 border-b border-white/50">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <h2 className="font-display text-3xl text-primary font-bold mb-3">{event.title}</h2>
                  <p className="text-primary/70 font-light max-w-xl">{event.description}</p>
                </div>
                <div className="flex flex-col gap-3 shrink-0 bg-white/70 p-4 rounded-xl border border-white">
                  <div className="flex items-center gap-3 text-primary">
                    <CalendarDays className="h-5 w-5 text-secondary" />
                    <span className="font-medium">{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Songs Accordion */}
            <div className="p-8 md:p-10">
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2 text-primary">
                <MusicIcon className="h-5 w-5 text-cta" /> Repertório
              </h3>

              <div className="space-y-4">
                {event.songs.map((song) => {
                  const isActive = activeSong === song.id;

                  return (
                    <div key={song.id} className="border border-primary/10 rounded-xl overflow-hidden bg-white/60 hover:bg-white/80 transition-all shadow-sm">
                      {/* Accordion Toggle */}
                      <button
                        onClick={() => toggleSong(song.id)}
                        className="w-full px-6 py-4 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-4 text-left">
                          <div className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-cta text-white' : 'bg-primary/5 text-primary'}`}>
                            <Play className="h-4 w-4 ml-1" />
                          </div>
                          <div>
                            <p className="font-semibold text-primary text-base md:text-lg">{song.title}</p>
                            <p className="text-sm text-primary/60">{song.composer}</p>
                          </div>
                        </div>
                        <div className="shrink-0 ml-4">
                          {isActive ? <ChevronUp className="h-5 w-5 text-primary/50" /> : <ChevronDown className="h-5 w-5 text-primary/50" />}
                        </div>
                      </button>



                      {/* Expanded Content (List of Naipes) */}
                      <div className={`transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} grid`}>
                        <div className="overflow-hidden">
                          <div className="px-6 pb-8 pt-4 border-t border-primary/10">

                            {/* inserir componente de audio */}
                            <div className="bg-primary rounded-xl p-6 mb-6 shadow-inner">
                              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Demonstrativo - ({song.title})</p>
                              <audio controls className="w-full max-w-2xl outline-none" src={getAssetUrl(song.audioDemoUrl)}>
                                Seu navegador não suporta o elemento de áudio.
                              </audio>
                            </div>


                            <h4 className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Selecione seu naipe:</h4>
                            <div className="space-y-3">
                              {song.naipes.map((naipe) => {
                                const isNaipeActive = activeNaipe === naipe.id;
                                return (
                                  <div key={naipe.id} className="border border-primary/10 rounded-lg overflow-hidden bg-white/40">
                                    {/* Naipe Toggle */}
                                    <button
                                      onClick={() => toggleNaipe(naipe.id)}
                                      className={`w-full px-5 py-3 flex items-center justify-between cursor-pointer transition-colors ${isNaipeActive ? 'bg-primary/5' : 'hover:bg-white/60'}`}
                                    >
                                      <span className="font-medium text-primary">{naipe.name}</span>
                                      {isNaipeActive ? <ChevronUp className="h-4 w-4 text-primary/60" /> : <ChevronDown className="h-4 w-4 text-primary/60" />}
                                    </button>

                                    {/* Expanded Content (Audio + PDF) for Naipe */}
                                    <div className={`transition-all duration-300 ease-in-out ${isNaipeActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} grid`}>
                                      <div className="overflow-hidden">
                                        <div className="p-4 md:p-6 border-t border-primary/5">
                                          <div className="bg-primary rounded-xl p-6 mb-6 shadow-inner">
                                            <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Kit de Ensaio ({naipe.name})</p>
                                            <audio controls className="w-full max-w-2xl outline-none" src={getAssetUrl(naipe.audioUrl)}>
                                              Seu navegador não suporta o elemento de áudio.
                                            </audio>
                                          </div>

                                          <div className="pl-4 md:pl-8 border-l-4 border-cta/60 flex-1">
                                            <div className="flex items-center justify-between mb-4">
                                              <p className="text-primary/40 text-xs font-semibold uppercase tracking-wider m-0">Letra (PDF)</p>
                                              <a href={getAssetUrl(naipe.pdfUrl)} target="_blank" rel="noreferrer" className="text-secondary text-sm font-medium hover:underline inline-flex items-center gap-1">
                                                Abrir em nova aba
                                              </a>
                                            </div>
                                            <div className="w-full aspect-[1/1.4] max-h-[600px] bg-white rounded-lg overflow-hidden shadow">
                                              <iframe src={`${getAssetUrl(naipe.pdfUrl)}#toolbar=0`} className="w-full h-full border-0" title={`Letra de ${song.title}`}></iframe>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

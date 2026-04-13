import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516280440503-6c8f949826f4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 tracking-tight drop-shadow-lg">
            Só Tu és<span className="text-cta italic font-normal"> Digno</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Todo ser que respira louve ao Senhor. Salmo 150:6
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events" className="bg-cta hover:bg-yellow-500 text-primary font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer inline-flex items-center justify-center gap-2">
              Próximos Eventos <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Agenda/Rehearsal Section */}
      <section className="py-24 bg-base relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-cta text-sm font-bold tracking-widest uppercase mb-3">Agenda</h2>
            <h3 className="font-display text-4xl mb-4 text-primary font-semibold">Ensaios & Compromissos</h3>
            <div className="w-16 h-1 bg-cta mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="liquid-glass p-8 rounded-2xl hover-lift">
                <Calendar className="h-10 w-10 text-secondary mb-6" />
                <h4 className="font-display text-xl font-bold mb-2">Ensaio Geral</h4>
                <p className="text-primary/70 mb-4 font-light">Todas as terças e quintas, nos preparamos com dedicação para nossos próximos espetáculos.</p>
                <div className="flex items-center gap-2 text-sm font-medium text-cta">
                  <span>20:00 - 22:00</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                  <span>Sala 4</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Summary Section */}
      <section className="py-24 relative overflow-hidden text-white bg-primary">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-primary to-primary"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-cta text-sm font-bold tracking-widest uppercase mb-3">Performances</h2>
              <h3 className="font-display text-4xl mb-4 font-semibold text-white">Eventos de Destaque</h3>
              <p className="text-white/70 max-w-xl font-light">Nossos concertos abrangem um repertório rico, do erudito ao popular, em palcos prestigiados.</p>
            </div>
            <Link to="/events" className="group inline-flex items-center gap-2 border border-white/20 hover:border-cta px-6 py-3 rounded-full transition-colors hover:text-cta cursor-pointer">
              Ver todos os eventos
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="relative h-[400px] p-8 flex flex-col justify-end">
                <span className="bg-cta text-primary text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">DESTAQUE</span>
                <h4 className="font-display text-3xl font-semibold mb-2">Cantata de Páscoa</h4>
                <p className="text-white/80 line-clamp-2">Uma noite inesquecível celebrando a ressurreição de Cristo.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-6 items-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="h-24 w-24 shrink-0 rounded-xl overflow-hidden relative">
                    <img src={`${import.meta.env.BASE_URL}images/evento-thumb.jpg`} alt="Event thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h5 className="font-display text-xl font-semibold mb-2 group-hover:text-cta transition-colors">Especial Renascença</h5>
                    <p className="text-white/60 mb-2 font-light text-sm">Resgate das peças mais belas do século XVI e XVII.</p>
                    <span className="text-cta text-sm font-medium">15 de Novembro, 19:30</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

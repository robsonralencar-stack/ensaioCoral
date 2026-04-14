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

            <div className="liquid-glass p-8 rounded-2xl hover-lift">
              <Calendar className="h-10 w-10 text-secondary mb-6" />
              <h4 className="font-display text-xl font-bold mb-2">Ensaio Geral</h4>
              <p className="text-primary/70 mb-4 font-light">Todas as segundas-feiras.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-cta">
                <span>19:30 - 21:00</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                <span>Auditório da Igreja</span>
              </div>
            </div>
            <div className="liquid-glass p-8 rounded-2xl hover-lift">
              <Calendar className="h-10 w-10 text-secondary mb-6" />
              <h4 className="font-display text-xl font-bold mb-2">Ensaio dos Naipes</h4>
              <p className="text-primary/70 mb-4 font-light">Todas as sextas-feiras.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-cta">
                <span>19:30 - 21:00</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                <span>Igreja Batista Ágape</span>
              </div>
            </div>
            <div className="liquid-glass p-8 rounded-2xl hover-lift">
              <Calendar className="h-10 w-10 text-secondary mb-6" />
              <h4 className="font-display text-xl font-bold mb-2">Culto de Santa Ceia</h4>
              <p className="text-primary/70 mb-4 font-light">Todo 1º Domingo do mês.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-cta">
                <span>18:00 - 20:00</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                <span>Igreja Batista Ágape</span>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
};

export default Home;

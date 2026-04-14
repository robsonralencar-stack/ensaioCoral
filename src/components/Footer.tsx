import { MapPin, Mail, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-primary text-base pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
              CORAL ÁGAPE
            </h3>
            <p className="text-white/70 mb-6 font-light leading-relaxed">
              Porque a tua benignidade é melhor do que a vida;
              os meus lábios te louvarão.
              Assim, eu te bendirei enquanto viver;
              em teu nome levantarei as minhas mãos.
              Salmo 63:3-4            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors text-white">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors text-white">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-medium mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-cta shrink-0 mt-0.5" />
                <span>Igreja Batista Ágape<br />
                  Rua Professor Lino Encarnação, 960 - Parquelândia, Fortaleza - CE </span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-cta shrink-0" />
                <span>contato@vozesdocoral.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-cta shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-medium mb-6 text-white">Ensaios</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/70">
                <span>Segunda-Feira - 19:30h<br />Ensaio Geral</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <span>Sexta-Feira - 19:30h<br />Ensaio dos Naipes</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Grupo Coral Ágape. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

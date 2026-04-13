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
              Levando emoção e harmonia através de apresentações inesquecíveis, conectando pessoas pela verdadeira arte da música coral.
            </p>
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
                <span>Teatro Municipal, Sala 4<br />Centro Histórico</span>
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
            <h4 className="font-display text-xl font-medium mb-6 text-white">Fale Conosco</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-cta text-white transition-colors"
              />
              <input
                type="email"
                placeholder="Seu email"
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-cta text-white transition-colors"
              />
              <button className="w-full bg-cta hover:bg-yellow-500 text-white font-medium py-2 rounded-md transition-colors cursor-pointer">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Grupo Coral Vozes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

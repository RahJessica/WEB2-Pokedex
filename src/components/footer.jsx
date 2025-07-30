import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      {/* Section inscription */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">
            Inscrivez-vous pour recevoir les e-mails de Pokémon !
          </h2>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder="E-mail"
              className="p-2 rounded w-full md:w-1/2 text-black"
            />
            <select className="p-2 rounded w-full md:w-1/4 text-black">
              <option>France</option>
              <option>Madagascar</option>
              <option>Canada</option>
            </select>
            <input
              type="text"
              placeholder="Anniversaire"
              className="p-2 rounded w-full md:w-1/4 text-black"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Jeux vidéo Pokémon, applications et plus
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              J’accepte les <a href="#" className="underline">Conditions d'utilisation</a> et <a href="#" className="underline">Avis de confidentialité</a> de Pokemon.fr
            </label>
          </div>
          <button className="bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded">
            S’inscrire
          </button>
        </div>

        {/* Section liens & réseaux */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">The Pokémon Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Actualités</a></li>
              <li><a href="#" className="hover:underline">Guide parental</a></li>
              <li><a href="#" className="hover:underline">Service client</a></li>
              <li><a href="#" className="hover:underline">Notre compagnie</a></li>
              <li><a href="#" className="hover:underline">Choisir un pays ou une région</a></li>
              <li><a href="#" className="hover:underline">Site presse</a></li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            {/* Réseaux sociaux */}
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-xl"><FaFacebookF /></a>
              <a href="#" className="text-xl"><FaYoutube /></a>
              <a href="#" className="text-xl"><FaTwitter /></a>
              <a href="#" className="text-xl"><FaInstagram /></a>
            </div>

            {/* Badge CARU */}
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/CARU_Safe_Harbor_Seal.png/200px-CARU_Safe_Harbor_Seal.png"
                alt="CARU"
                className="w-32"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mention légale bas de page */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-xs gap-4">
        <div className="space-x-4">
          <a href="#" className="hover:underline">Conditions d'utilisation</a>
          <a href="#" className="hover:underline">Avis de confidentialité</a>
          <a href="#" className="hover:underline">Page Cookie</a>
          <a href="#" className="hover:underline">Informations juridiques</a>
        </div>
        <div className="text-gray-400">
          ©2025 Pokémon. ©1995 - 2025 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.
        </div>
      </div>
    </footer>
  );
}

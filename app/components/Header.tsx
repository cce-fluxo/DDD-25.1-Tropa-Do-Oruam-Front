import Image from "next/image";
import {Home, Bell} from 'lucide-react';
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center w-full h-20 px-6 bg-white shadow-md">
        <div className="flex items-center">
          <div className="mr-10 ml-10">
            <Image
            src="/sorrisync.png"
            alt="Logo SorriSync"
            width={106}
            height={25}
            priority
            />
          </div>
          
          <nav>
            <ul className="flex items-center gap-8 ml-12">
              <li>
                <Link href="/home" className="flex items-center text-black px-4 py-2 rounded-md hover:bg-fundo-pagina hover:text-principal font-medium">
                  <Home className="w-4 h-4 mr-1.5"/>
                  Início
                </Link>
              </li>

              <li>
                <Link href="/pacientes" className="flex items-center text-black px-4 py-2 rounded-md hover:bg-fundo-pagina hover:text-principal font-medium">
                  Pacientes
                </Link>
              </li>

              <li>
                <Link href="/perfil" className="flex items-center text-black px-4 py-2 rounded-md hover:bg-fundo-pagina hover:text-principal font-medium">
                  Perfil
                </Link>
              </li>

              <li>
                <Link href="/postagem" className="flex items-center text-black px-4 py-2 rounded-md hover:bg-fundo-pagina hover:text-principal font-medium">
                  Postagem
                </Link>
              </li>

              <li>

              </li>
            </ul>

          </nav>
        
        </div>

          <button
            type="button"
            className="ml-auto p-2"
            >
            <Bell className="w-6 h-6 text-principal cursor-pointer rounded-full hover:bg-fundo-pagina"/>

          </button>
        
        
    </header>
  );
}
import Image from "next/image";
import {Home, Bell} from 'lucide-react';
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-20 px-6 bg-white shadow-md">
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
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/home" className="flex items-center text-gray-700 hover:text-principal font-medium">
                  <Home className="w-4 h-4 mr-1.5"/>
                  Início
                </Link>
              </li>
            </ul>

          </nav>
        
        </div>
        
        
    </header>
  );
}
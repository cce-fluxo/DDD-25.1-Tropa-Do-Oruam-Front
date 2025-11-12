import Image from 'next/image'

export default function Header() {
    return(
        <header className= 'bg-white border-b border-gray-200 py-6 flex justify-center'>
                <img 
                    src= "/images/logoSorriSync.png"
                    alt= "Logo header"
                    width = {150}
                    height = {75}
                ></img>
        </header>
    )
}
import Image from 'next/image'

export default function Header() {
    return(
        <header className= 'bg-white border-b border-gray-200 py-4 flex justify-center'>
                <img 
                    src= "/images/logoSorriSync.png"
                    alt= "Logo header"
                    width = {300}
                    height = {150}
                ></img>
        </header>
    )
}
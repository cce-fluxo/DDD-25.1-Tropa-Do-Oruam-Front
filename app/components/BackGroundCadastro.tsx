import Image from "next/image";

export default function BackGroundCadastro() {
    return (
        <main className='w-full h-full hidden md:block absolute inset-0 z-0'>
            <Image
                src='/images/backgroundCadastro.jpg'
                alt='background da tela de cadastro'
                layout='fill'
            ></Image>
        </main>
    )
}
import Image from 'next/image';

export default function BackGroundLogin() {
    return ( 
        <main className='hidden md:block absolute inset-0 z-0 w-full h-full px-30 py-22 justify-center'>
            <Image 
                src="/images/backgroundLogin.png"
                alt="Background da tela de login"
                layout='fill'
                objectFit='fill'
                objectPosition='center'
                quality={100}
                priority
            ></Image>
        </main>
    )
}
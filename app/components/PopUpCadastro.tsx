import Image from "next/image"

interface props {
    onClose: () => void;
}

export default function PopUpCadastro({ onClose } : props) {
    return (
        <div
            onClick={onClose}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4'>
            <div onClick={(e) => e.stopPropagation} className='
            relative
            z-50
            w-full
            max-w-sm
            flex flex-col items-center
            space-y-4
            rounded-lg
            bg-white
            p-8
            shadow-xl
            pointer-events-auto
            '
            >
                <h1 className='
                text-[#5457DE]
                flex flex-col
                items-center
                font-bold
                text-xl
                '
                >
                    Conta criada com sucesso.
                    <span className='text-[#5457DE]'>Seja bem-vindo!</span>
                </h1>
                
                <Image
                    src='/images/boneco3.png'
                    alt='cadastro concluído'
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}
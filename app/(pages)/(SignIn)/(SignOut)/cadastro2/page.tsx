"use client";

import BackGroundCadastro from "../../../../components/BackGroundCadastro";
import Input from "../../../../components/Input";
import { useState } from "react"
import Button from "../../../../components/Button";
import PopUpCadastro from "../../../../components/PopUpCadastro"
import { useRouter } from 'next/navigation'

export default function Cadastro2() {
    const [senha, setSenha] = useState("")
    const [confirmar, setConfirmar] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const router = useRouter();

    const handleCadastro = (event: React.FormEvent) => {
        event.preventDefault();
        setIsModalOpen(true)
    }

    const irParaLogin = () => {
        router.push('/login')
    }

    return (
        <main className='bg-[#CCCBFF] relative grow flex justify-center items-center'>
            <BackGroundCadastro/>
            <div className='flex justify-center items-center relative z-10 h-full w-full px-6'>
                <div className='flex flex-col items-center w-full max-w-lg bg-white rounded-lg space-y-8 pt-15 pb-20 px-6'>
                    <form onSubmit = {handleCadastro} className = 'flex flex-col items-center w-full max-w-lg rounded-lg space-y-8 pt-15 pb-20 px-6'>
                        <h1 className='text-2xl font-bold text-black'>
                            Crie sua
                            <span className='text-[#5457DE]'> senha</span>
                        </h1>                 
                        <div className='w-full space-y-4'>
                            <Input
                                type='senha'
                                id='senha'
                                placeholder='Senha'
                                value = { senha }
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
                                required
                            />
                            <Input
                                type='confirmar'
                                id='confirmar'
                                placeholder='Confirmar senha'
                                value = { confirmar }
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmar(e.target.value)}
                                required
                            />
                            
                            <div className='w-full flex flex-col items-center space-y-3 mt-15 px-15 md:px-10'>
                                <Button label='Criar conta' variant='primary' type='submit'/>
                                <Button label='Cancelar' variant='tertiary' href='/cadastro'/>
                            </div>
                    </div>
                    </form>
                </div>
            </div>

            {isModalOpen && (
                <PopUpCadastro onClose={irParaLogin}/>
            )}

        </main>
    )
}
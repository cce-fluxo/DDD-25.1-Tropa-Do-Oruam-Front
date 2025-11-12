"use client";

import Input from "../../../../components/Input";
import CheckBox from '../../../../components/CheckBox';
import { useState } from 'react';
import BackGroundLogin from "../../../../components/BackGroundLogin";
import Button from "../../../../components/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(false);
    console.log({ lembrar })

    return (
        <main className='relative grow bg-indigo-200'>
            <BackGroundLogin />
            <div className='flex justify-center items-center relative z-10 h-full py-6 '>
                <div className='flex flex-col items-center w-full max-w-lg bg-white rounded-lg space-y-12 pt-15 pb-30 px-20'>
                    <h1 className='text-2xl font-bold text-gray-900 '>Seja bem-vindo!</h1>

                    <div className='w-full space-y-6'>
                        <Input 
                            type='email'
                            id="email"
                            placeholder='E-mail'
                            value={ email }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            required
                            />
                        <Input 
                            type='password'
                            id="senha"
                            placeholder='Senha' 
                            value={ senha }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
                            required
                            />
                        <div className='flex flex-row w-full items-center justify-between '>
                            <CheckBox 
                                id="lembrar"
                                label='Lembrar Acesso' 
                                checked= { lembrar }
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLembrar(e.target.checked)}
                            />
                            <Button label='Esqueci minha senha' variant="quaternary" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full space-y-4'>
                        <Button label='Entrar'/>
                        <Button label='Cadastrar' variant='secondary'/>
                    </div>
                </div>
            </div>
        </main>
    )
}
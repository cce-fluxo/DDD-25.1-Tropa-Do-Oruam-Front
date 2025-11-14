"use client";

import BackGroundCadastro from "../../../../components/BackGroundCadastro";
import Input from "../../../../components/Input";
import { useState } from "react"
import Button from "../../../../components/Button";
import DataInput from "../../../../components/DataInput"

export default function Cadastro() {
    // Cria cada variável da tela
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [celular, setCelular] = useState("")
    const [dia, setDia] = useState("")
    const [mes, setMes] = useState("")
    const [ano, setAno] = useState("")
    
    // Teste para ver se o Input de data estava funcionando
    console.log('Data de nascimento:', dia,'/', mes, '/', ano)

    return (
        <main className='bg-[#CCCBFF] relative grow flex justify-center items-center'>
            <BackGroundCadastro/>
            <div className='flex justify-center items-center relative z-10 h-full w-full px-8'>
                <div className='flex flex-col items-center w-full max-w-lg bg-white rounded-lg space-y-8 pt-15 pb-20 px-6'>
                    <h1 className='text-xl md:text-2xl font-bold text-black'>Crie sua nova conta</h1>
                    <div className='w-full space-y-4'>
                        <Input
                            type='nome'
                            id='nome'
                            placeholder='Nome'
                            value = { nome }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
                            required
                        />
                        <Input
                            type='sobrenome'
                            id='sobrenome'
                            placeholder='Sobrenome'
                            value = { sobrenome }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSobrenome(e.target.value)}
                            required
                        />

                        <DataInput
                            valueDia={dia}
                            onChangeDia={(e: React.ChangeEvent<HTMLInputElement>) => setDia(e.target.value)}

                            valueMes={mes}
                            onChangeMes={(e: React.ChangeEvent<HTMLInputElement>) => setMes(e.target.value)}

                            valueAno={ano}
                            onChangeAno={(e: React.ChangeEvent<HTMLInputElement>) => setAno(e.target.value)}
                            
                        />

                        <Input
                            type='email'
                            id='email'
                            placeholder='Email'
                            value = { email }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            type = "cpf"
                            id='cpf'
                            placeholder='CPF'
                            value = { cpf }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
                            required
                        />
                        <Input
                            type='numero'
                            id='numero'
                            placeholder="Número de celular"
                            value = { celular }
                            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setCelular(e.target.value)}
                            required
                        />
                        <div className='w-full flex flex-row justify-center mt-15 space-x-2 px-6 md:px-10'>
                            <Button label='Voltar' variant='tertiary' href='/login'/>
                            <Button label='Continuar' variant='primary' href='/cadastro2'/>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
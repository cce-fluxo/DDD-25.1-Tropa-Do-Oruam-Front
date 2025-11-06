import Input from "../../../../components/Input";

export default function Login() {
    return (
        <main className='flex items-center justify-center min-h-screen bg-gray-100'>

            <div className='flex justify-center flex-col w-full max-w-lg bg-white rounded-lg border-b border-black space-y-12 py-10 px-20'>
                <h1 className='flex justify-center text-2xl font-bold text-gray-900 '>Seja bem-vindo!</h1>

                <div className='w-full space-y-4'>
                    <Input placeholder='E-mail' />
                    <Input placeholder='Senha' />
                </div>
            </div>
        </main>
    )
}
'use client';
import HeaderSignOut from "@/app/components/HeaderSignOut";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

export default function InserirCodigo(){
const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen" >
            <HeaderSignOut />
            <main className="flex flex-col items-center justify-center flex-grow bg-fundo-pagina gap-y-10 px-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h1 className="text-xl font-sans font-bold text-center">
                    Insira {" "}
                    <span className="text-principal">
                        o codigo 
                        </span> 
                        {" "}
                     que enviamos para o seu email 
                    </h1>
                    <form className="mt-6 flex flex-col items-center gap-y-4">
                        <input
                            type="text"
                            placeholder="Código"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button
                            type="button" // Trocar pra submit e fazer a lógica depois
                            variant="quaternary"
                            className="mt-2 font-normal text-sm text-principal self-start"
                        >
                            Reenviar código

                        </Button>
                        
                        <Button
                            type="button" // Trocar pra submit e fazer a lógica depois
                            variant="primary"
                            className="mt-6"
                            onClick={() => router.push('/esqueci-minha-senha/inserir-codigo/inserir-nova-senha')}
                        >
                            Continuar
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            href="/esqueci-minha-senha"
                        >
                            Voltar
                        </Button>
                    </form>
                </div>
            </main>
        </div> 
    );
}

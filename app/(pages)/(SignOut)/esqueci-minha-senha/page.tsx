'use client';
import HeaderSignOut from "@/app/components/HeaderSignOut";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

export default function EsqueciMinhaSenha(){
    const router = useRouter();
    return (
            <div className="flex flex-col min-h-screen shadow-md" >
                <HeaderSignOut />
                <main className="flex flex-col items-center justify-center flex-grow bg-fundo-pagina gap-y-10 px-4">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                        <h1 className="text-xl font-sans font-bold text-center">
                        Digite o {" "}
                        <span className="text-principal">
                            e-mail
                            </span>
                            {" "} cadastrado
                        </h1>
                        <form className="mt-6 flex flex-col items-center gap-y-4">
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            
                            <Button
                                type="button" // Trocar pra submit e fazer a lógica depois
                                variant="primary"
                                className="mt-6"
                                onClick={() => router.push('/esqueci-minha-senha/inserir-codigo')} 
                                
                            >
                                Continuar
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                            >
                                Voltar
                            </Button>
                        </form>
                    </div>
                </main>
            </div> 
        );
    }
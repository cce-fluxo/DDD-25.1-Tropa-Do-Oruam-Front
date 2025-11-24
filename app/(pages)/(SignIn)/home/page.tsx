'use client';

import Header from "@/app/components/Header";
import CalendarHome from "@/app/components/CalendarioMini";
import FilterCheckbox from "@/app/components/CaixaFiltros";
import CalendarioGrande from "@/app/components/CalendarioGrande";

// Dados fictícios para os filtros
const tiposConsulta = [ 
    "Odontologia geral",
    "Ortodontia",
    "Estética dental",
    "Periodontia",
    "Clareamento dental",
];

const situacoesConsulta = [
    "Agendadas",
    "Realizadas",
];

export default function HomePage() {
    return ( 
        <div className="min-h-screen bg-fundo-home">
            
            <Header />
            
            <main className="max-w-[1600px] mx-auto p-6">
            
                <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6 items-start">
                
                    <aside className="flex flex-col gap-6">
            
                        <CalendarHome />
                    
                        <FilterCheckbox 
                            titulo="Consultas" 
                            titulo2="Tipo de Consulta"
                            opcoes={situacoesConsulta}
                            opcoes2={tiposConsulta} 
                        />

                    </aside>

                    <section className="w-full bg-white rounded-xl shadow-sm p-6 min-h-[80vh]">
            
                        <CalendarioGrande />
            
                    </section>

                </div>

            </main>
        
        </div>
    );
}
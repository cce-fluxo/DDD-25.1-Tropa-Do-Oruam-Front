'use client';
import Header from "@/app/components/Header";
import CalendarHome from "@/app/components/CalendarHome";
import FilterCheckbox from "@/app/components/FilterCheckbox";

const tiposConsulta = [ 
    "Odontologia geral",
    "Ortodontia",
    "Estética dental",
    "Endodontia",
    "Periodontia",
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
                        title="Tipo de consulta" 
                        options={tiposConsulta} 
                    />
                </aside>

            </div>

        </main>
    </div>
    );
}
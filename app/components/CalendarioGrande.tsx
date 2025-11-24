'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/app/styles/calendar.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Consultas = {
  id: number;
  date: Date;
  nomePaciente: string;
  tipo: string;
};

export default function CalendarioGrande() {
  const [date, setDate] = useState<any>(new Date());

    //DADOS SIMULADOS DE CONSULTAS
    //ajeitar requisição do back depois
  const consultas: Consultas[] = [
    { id: 1, date: new Date(2023, 10, 24), nomePaciente: "João Silva", tipo: "Ortodontia" },
    { id: 2, date: new Date(new Date().getFullYear(), new Date().getMonth(), 25), nomePaciente: "Ana Costa", tipo: "Geral" },
    { id: 3, date: new Date(new Date().getFullYear(), new Date().getMonth(), 25), nomePaciente: "Pedro H.", tipo: "Canal" },
    { id: 4, date: new Date(new Date().getFullYear(), new Date().getMonth(), 28), nomePaciente: "Maria Luz", tipo: "Limpeza" },
  ];

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;

    const consultasDia = consultas.filter(
      (app) =>
        app.date.getDate() === date.getDate() &&
        app.date.getMonth() === date.getMonth() &&
        app.date.getFullYear() === date.getFullYear()
    );

    if (consultasDia.length > 0) {
      return (
        <div className="flex flex-col gap-1 mt-1 w-full">
          {consultasDia.map((app) => (
            <div 
              key={app.id} 
              className="bg-indigo-100 text-principal text-[10px] font-bold px-1 py-0.5 rounded truncate"
              title={`${app.nomePaciente} - ${app.tipo}`}
            >
              {app.nomePaciente}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="big-calendar-wrapper w-full h-full">
      <Calendar
        onChange={setDate}
        value={date}
        locale="pt-BR"
        tileContent={tileContent}
        
        nextLabel={<ChevronRight className="w-5 h-5 text-principal" />}
        prevLabel={<ChevronLeft className="w-5 h-5 text-principal" />}
        next2Label={null}
        prev2Label={null}
        navigationLabel={({ date }) => (
            <span className="text-principal font-bold capitalize text-2xl block text-left w-full">
                {date.toLocaleString('pt-BR', { month: 'long' })}
            </span>
        )}
      />
    </div>
  );
}
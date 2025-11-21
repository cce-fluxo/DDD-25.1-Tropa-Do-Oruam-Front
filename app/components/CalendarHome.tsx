'use client'

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '@/app/styles/calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarHome() {
    const [date, setDate] = useState<Value>(new Date());
    
    return (
        <div className="w-full bg-white rounded-xl shadow-sm p-4">
            <Calendar
                onChange={setDate}
                value={date}
                locale="pt-BR"
                
                nextLabel={<ChevronRight className="w-5 h-5 text-principal" />}
                prevLabel={<ChevronLeft className="w-5 h-5 text-principal" />}
                next2Label={null}
                prev2Label={null}
                navigationLabel={({ label }) => (
                    <span className="text-principal font-bold capitalize text-lg">
                        {label}
                    </span>
                )}
                >
            </Calendar>
        </div>
    );
}

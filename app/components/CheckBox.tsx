import React from 'react';

interface Checkboxprops extends React.InputHTMLAttributes<HTMLInputElement> {
    label : string;
}

export default function CheckBox( { label, ...props }: Checkboxprops) {
        
    return (
        <div className='flex flex-row space-x-2 items-center cursor-pointer'>
            <label className='bg-white w-10 md:w-11 h-6 rounded-full border-indigo-800 border-2 flex items-center px-px py-py'>
                <input type='checkbox' className='sr-only peer'></input>
                <span className='w-5 h-5 bg-[#CCCBFF] border-indigo-300 flex rounded-full transition-all peer-checked:translate-x-4 md:peer-checked:translate-x-5 peer-checked:bg-indigo-600 peer-checked:border-indigo-600'></span>  
            </label>

            <label className='text-black font-bold text-xs'>Lembrar acesso</label>
            
        </div>
    )
}
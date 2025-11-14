import React from 'react';

interface Inputprops extends React.InputHTMLAttributes<HTMLInputElement>{

}


export default function Input( props : Inputprops ) {
    return(
        <div>
            <label className="text-gray-500 text-sm mb-2"></label>
            <input 
            type ="string"
            className='p-2 w-full border-gray-300 text-gray-500 border-2 rounded-lg'
            {...props}
            ></input>
        </div>
    )
}
import React from 'react';
interface DataInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    valueDia : string;
    onChangeDia: (e:any) => void;
    valueMes : string;
    onChangeMes : (e:any) => void;
    valueAno : string;
    onChangeAno : (e:any) => void;
}

export default function DataInput({ valueDia, onChangeDia, valueMes, onChangeMes, valueAno, onChangeAno}: DataInputProps) {

  return (

    <div className="flex w-full items-center rounded-lg border-2 border-gray-300 bg-white p-2 justify-between">

      <input
        type="text"
        placeholder="Dia"
        maxLength={2}
        className="
          w-10  
          border-none 
          outline-none 
          focus:ring-0 
          text-center  
          text-gray-500
        "
        value = { valueDia }
        onChange= { onChangeDia }
      />


      <span className="text-gray-400">/</span>

 
      <input
        type="text"
        placeholder="Mês"
        maxLength={2}
        className="
          w-12 
          border-none
          outline-none
          focus:ring-0
          text-center
          text-gray-500
        "
        value = { valueMes }
        onChange = { onChangeMes }
      />


      <span className="text-gray-400">/</span>

      <input
        type="text"
        placeholder="Ano"
        maxLength={4}
        className="
          w-16 
          border-none
          outline-none
          focus:ring-0
          text-center
          text-gray-500
        "
        value = { valueAno }
        onChange = { onChangeAno }
      />

    </div>
  );
}
interface props {
    placeholder : string;
}


export default function Input( { placeholder } : props ) {
    return(
        <div>
            <label className="text-black text-sm mb-2"></label>
            <input
            type ="string"
            className='p-2 w-full border-gray-300 text-black border-2 rounded-lg'
            placeholder= { placeholder }
            ></input>
        </div>
    )
}
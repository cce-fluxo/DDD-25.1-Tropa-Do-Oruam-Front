'use client';

interface FilterCheckboxProps {
    title: string;
    options: string[];
    onSelectionChange?: (selected: string[]) => void;
}

export default function FilterCheckbox({ title, options }: FilterCheckboxProps) {
    return (
        <div className="w-full bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-4 text-lg">Filtrar por:</h3>
            
            <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
                
                {options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                            type="checkbox" 
                            className="
                                appearance-none w-5 h-5 border-2 border-gray-300 rounded 
                                checked:bg-principal checked:border-principal
                                focus:ring-2 focus:ring-principal focus:ring-offset-1
                                transition-all cursor-pointer
                                relative
                            "
                        />
    
                        <span className="text-gray-600 group-hover:text-principal transition-colors">
                            {option}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}
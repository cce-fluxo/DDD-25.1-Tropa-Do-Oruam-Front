'use client';

interface CaixaFiltrosProps {
    titulo: string;
    titulo2?: string;
    opcoes: string[];
    opcoes2?: string[];
    onSelectionChange?: (selected: string[]) => void;
}

export default function CaixaFiltros({ titulo, titulo2, opcoes, opcoes2 }: CaixaFiltrosProps) {
    return (
        <div className="w-full bg-white rounded-xl shadow-sm p-6">
            
            <h3 className="font-bold text-gray-800 mb-4 text-lg">
            
                Filtrar por:
            
            </h3>
            
            <div className="flex flex-col gap-3">
                
                <p className="text-sm text-gray-500 font-medium mb-1">
                
                    {titulo}
                
                </p>
                
                {opcoes.map((opcao, index) => (
                    
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
                    
                            {opcao}
                    
                        </span>
                    
                    </label>
                ))}
            </div>
        
        <div className="flex flex-col gap-3">
                
                <p className="text-sm text-gray-500 font-medium mb-1 mt-6">
                
                    {titulo2}
                
                </p>
                
                {opcoes2?.map((opcao, index) => (
                    
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
                    
                            {opcao}
                    
                        </span>
                    
                    </label>
                ))}
            </div>
        
        </div>
    );
}
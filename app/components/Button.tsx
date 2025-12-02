import Link from "next/link";

interface props {
    label : string;
    variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary"
    href?: string;
    type?: string;


}

export default function Button({ label, variant = "primary", href, type, ...props }: props) {

    const allClasses = `
        rounded-md
        z-10
        h-10
        flex justify-center items-center
        cursor-pointer
        
        ${variant == "primary" ? "bg-[#5457DE] w-full md:w-[60%] text-white" :
            variant == "secondary" ? "bg-white w-full md:w-[60%] border-[#5457DE] border-2 text-[#5457DE]" :
                variant == "tertiary" ? "bg-indigo-200 w-full md:w-[60%] text-black":
                    variant == "quaternary" ? "text-xs font-bold text-[#5457DE]":
                        "font-bold text-gray-600"}

    `
    if (href){
        return (
            <Link href={href} className={allClasses} {...props}>
                {label}
            </Link>
        )
    }
    return (
        <button className = {allClasses} {...props}>
            { label }
        </button>
    )
   
    
}
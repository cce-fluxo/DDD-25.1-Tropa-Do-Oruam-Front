interface props {
    label : string;
    variant?: "primary" | "secondary" | "tertiary" | "quaternary"


}

export default function Button({ label, variant = "primary" }: props) {
    return (
        <button className={`
            
            rounded-md
            z-10
            h-8
            flex justify-center items-center
            cursor-pointer
            
            ${variant == "primary" ? "bg-[#5457DE]" :
                variant == "secondary" ? "bg-white" :
                    variant == "tertiary" ? "bg-indigo-200":
                        ""}

            ${variant == "primary" ? "w-[60%]":
                variant == "secondary" ? "w-[60%]":
                    variant == "tertiary" ? "w-[60%]":
                        ""}

            ${variant == "primary" ? "":
                variant == "secondary" ? "":
                    variant == "tertiary" ? "":
                        "text-sm font-bold"}

            ${variant == "primary" ? "" :
                variant == "secondary" ? "border-[#5457DE]":
                    variant == "tertiary" ? "":
                        ""}

            ${variant == "primary" ? "":
                variant == "secondary" ? "border-2":
                    variant == "tertiary" ? "":
                        ""}
                        
            ${variant == "primary" ? "text-white" :
                variant == "secondary" ? "text-[#5457DE]" :
                    variant == "tertiary"? "text-black" :
                        "text-[#5457DE]"}
            
        `}
        >
            { label }
        </button>
    )
}
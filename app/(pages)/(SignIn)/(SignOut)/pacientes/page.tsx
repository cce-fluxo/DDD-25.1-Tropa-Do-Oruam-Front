import Button from "../../../../components/Button";

export default function Pacientes() {
    return (
        <main className='bg-white relative grow '>
            <div className='flex flex-row p-8 space-x-12'>
                <div className='flex flex-col border rounded-lg border-gray-500 w-[23%] h-full'>
                    <div className='flex flex-row justify-between ml-20 mr-20 border-gray-500'>
                        <Button label='Realizadas' variant='quinary'/>
                        <Button label='Agendadas' variant='quinary'/>
                    </div>
                </div>
                <div className='flex flex-col border rounded-lg bg-blue-500 border-gray-500 w-[77%] h-full'>

                </div>
            </div>

        </main>
    )
}
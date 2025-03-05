import { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0)
    return (
        <>
            
            <div className='bg-blue-700 flex flex-col justify-center items-center border rounded-md gap-3 overflow-hidden h-[250px] w-[400px]'>
                <p className='text-white text-pretty text-xl'>
                    You have clicked this button {count} times
                </p>
                <button className='bg-blue-950 text-white rounded border py-1 px-2 hover:bg-blue-900 transition-all duration-200 p-4' onClick={()=>{
                    setCount(count+1)
                }}>
                    Click Here
                </button>
            </div>
        
        
        </>
    )
}

export default Counter
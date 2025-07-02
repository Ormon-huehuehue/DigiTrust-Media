import React from 'react'
import LiquidCard from './LiquidCard'

const Founders = () => {

    const foundersData = [
        {
            name : "Gaurav Verma",
            designation : "Founder",
            img : "/founders/gaurav.png"
        },
        
    ]

    return (
        <div className='flex flex-col md:flex-row lg:flex-row gap-10 my-10 justify-center items-center'>
            {foundersData.map((founder, index)=>(
               
                    <LiquidCard founder={founder} key={index}/>
               
            ))}
        </div>
    )
}

export default Founders
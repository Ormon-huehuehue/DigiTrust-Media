import React from 'react'
import LiquidCard from './LiquidCard'

const Founders = () => {

    const foundersData = [
        {
            name : "Gaurav Verma",
            designation : "Founder",
            img : "/founders/gaurav.png"
        },
        {
            name : "Saurav Raichand",
            designation : "Co-Founder",
            img : ""
        },
    ]

    return (
        <div className=' px-5 flex  flex-col md:flex-row lg:flex-row gap-10 my-10 justify-center items-center'>
            {foundersData.map((founder, index)=>(
                <div className="">
                    <LiquidCard founder={founder} key={index}/>
                </div>
            ))}
        </div>
    )
}

export default Founders
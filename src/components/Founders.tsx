import React from 'react'
import LiquidCard from './LiquidCard'

const foundersData = [
    {
        name : "Gaurav Verma",
        designation : "Founder",
        img : "/founders/gaurav.png"
    },
    
]

const Founders = () => {

   

    return (
        <section className="relative py-0 sm:py-0 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white/80 rounded-3xl shadow-lg border border-blue-100 py-16 px-4 sm:px-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-16 gap-8">
              <div className="min-w-2/3">
                <GiganticHeader title={ourTeamHeaderData.title} headerCSS="tracking- bg-gradient-to-r from-gray-900 via-gray-400 to-gray-700 bg-clip-text text-transparent" />
                <div className='text-gray-500 font-medium mt-4'>
                  {ourTeamHeaderData.description}
                </div>
              </div>
              <div className="flex-shrink-0 w-auto">
                <Founders/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Founders



const FounderCards = ()=>{
    return (
        <div className='flex flex-col md:flex-row lg:flex-row gap-10 my-10 justify-center items-center'>
        {foundersData.map((founder, index)=>(
           
                <LiquidCard founder={founder} key={index}/>
           
        ))}
    </div>
    )
}
'use client'
import CarCard from '@/components/carcard'
import Navbar from '@/components/navbar'
import SearchRide from '@/components/seachride'
import tourData from '@/tours'
import { useRouter } from 'next/navigation'
import React from 'react'
// interface ridesComponentProps {
//     filteredOptions : {
//         source: string,
//         destination: string,
//         price : number,
//         carName : string,
//     }[]
// }
// const rides : React.FC<ridesComponentProps> = ({filteredOptions}) => {
const rides = () => {
    return (
        <>
            <div style={{ backgroundImage: 'url("sky.jpeg")' }}>
                <SearchRide />
                <div className='flex gap-[1rem] flex-wrap justify-around m-[2rem]'>
                    {tourData.map((tour, index) => (
                        <CarCard key={index} tour={tour} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default rides
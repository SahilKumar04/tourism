'use client'
import axios from 'axios';
import React, { useState } from 'react'

const PlanYourTrip = () => {
    const [destination, setDestination] = useState('');
    const [travelType, setTravelType] = useState('business');
    const [conveyance, setConveyance] = useState('taxi');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [adults, setAdults] = useState(1);
    const [kids, setKids] = useState(0);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const tripDetails = {
            destination,
            travelType,
            conveyance,
            dateFrom,
            dateTo,
            adults,
            kids,
            description,
            name,
            phoneNumber,
            email,
            address,
            city,
            state,
        };
        try {
            await axios.post("/api/plan_your_trip", tripDetails)
            alert("Request Submitted Successfully!")
        } catch (error) {
            console.log('error :>> ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-[80rem] mx-auto p-6 bg-gray-100 rounded-lg shadow-lg my-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex justify-center">Your Plan & Requirement of Travel</h2>
            <div className="mb-4">
                <label htmlFor="destination" className="block font-semibold mb-1">Travel Destination:<span className='text-red-500'>*</span></label>
                <input
                    type="text"
                    id="destination"
                    placeholder='Write a travel destination you interested to visit'
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                    className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="mb-4">
                    <label htmlFor="travelType" className="block font-semibold mb-1">Type of Travel:</label>
                    <select
                        id="travelType"
                        value={travelType}
                        onChange={(e) => setTravelType(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    >
                        <option value="business">Business</option>
                        <option value="honeymoon">Honeymoon</option>
                        <option value="familyTour">Family Tour</option>
                        <option value="adventureTour">Adventure Tour</option>
                        <option value="groupTour">Group Tour</option>
                        <option value="sightseeing">Sightseeing</option>
                        <option value="other">Other</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="conveyance" className="block font-semibold mb-1">Conveyance of Travel:</label>
                    <select
                        id="conveyance"
                        value={conveyance}
                        onChange={(e) => setConveyance(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    >
                        <option value="taxi">Taxi</option>
                        {/* Add more conveyance options */}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                    <label htmlFor="dateFrom" className="block font-semibold mb-1">Date From:<span className='text-red-500'>*</span></label>
                    <input
                        type="date"
                        id="dateFrom"
                        value={dateFrom}
                        required
                        onChange={(e) => setDateFrom(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
                <div>
                    <label htmlFor="dateTo" className="block font-semibold mb-1">Date To:<span className='text-red-500'>*</span></label>
                    <input
                        type="date"
                        id="dateTo"
                        value={dateTo}
                        required
                        onChange={(e) => setDateTo(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
                <div>
                    <label htmlFor="adults" className="block font-semibold mb-1">Adults:<span className='text-red-500'>*</span></label>
                    <input
                        type="number"
                        id="adults"
                        value={adults}
                        onChange={(e) => setAdults(parseInt(e.target.value))}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
                <div>
                    <label htmlFor="kids" className="block font-semibold mb-1">Kids:</label>
                    <input
                        type="number"
                        id="kids"
                        value={kids}
                        onChange={(e) => setKids(parseInt(e.target.value))}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block font-semibold mb-1">Brief Description:</label>
                <textarea
                    id="description"
                    value={description}
                    placeholder='Write brief description of your travel plan'
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 h-32 resize-none p-1"
                ></textarea>
            </div>

            <h2 className="text-2xl font-bold mb-4">Your Personal Information</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">

                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-1">Name:<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        id="name"
                        placeholder='Firest Name & Last Name'
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block font-semibold mb-1">Phone Number:<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        id="phoneNumber"
                        placeholder='Phone Number'
                        value={phoneNumber}
                        required
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold mb-1">E-Mail:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter Your Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block font-semibold mb-1">Address:<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        id="address"
                        placeholder='Enter Your Address'
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block font-semibold mb-1">City:<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        id="city"
                        placeholder='Your City'
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="state" className="block font-semibold mb-1">State:<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        id="state"
                        value={state}
                        required
                        placeholder='Your state'
                        onChange={(e) => setState(e.target.value)}
                        className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                    />
                </div>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 p-1">
                Submit
            </button>
        </form>
    );
}

export default PlanYourTrip
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { InputMask } from "primereact/inputmask";
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
interface Props {
    tour : {
        // source: string,
        // destination: string,
        rating :  number,
        carImageUrl : string,
        carName : string
    }
}
const CarCard = ({tour} : Props) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const source = searchParams.get('source')
    const destination = searchParams.get('destination')
    const date = searchParams.get('date')
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedVehicle , setSelectedVehicle] = useState('');
    const [formData, setFormData] = useState<any>({
        name: "",
        phoneNumber: '',
        desc: '',
        source: '',
        destination: '',
        date: '',
    })
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        formData.source = source?.trim()
        formData.destination = destination?.trim()
        formData.date = new Date(Number(date)).toLocaleDateString()
        formData.requestedVehicle = selectedVehicle ;
        if (!formData.source || !formData.destination || !formData.name.trim() || !formData.phoneNumber.trim()) return;
        try {
            const response = await axios.post("/api/ride_enquiry", formData);
            if (response.status === 200) {
                setSuccessMessage('Enquiry sent successfully'); // Add this line
            } else {
                console.error('Email sending failed.');
            }
            setPopupOpen(false);

        } catch (error) {
            console.error('Error sending email:', error);
            // Handle error if needed
        }
        router.push(`/rides?source=${source}&destination=${destination}=${date}`);
    };


    return (

        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-white dark:border-white-700 mb-4" >
            <a href="#">
                <img className="max-w-[80%] rounded-t-lg m-[auto]" src={tour.carImageUrl} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{tour.carName}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{tour.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    {/* <span className="text-3xl text-gray-900 dark:text-red-500">₹{tour.price}</span> */}
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {setPopupOpen(true); setSelectedVehicle (tour.carName) }} >Send Enquiry</a>
                </div>
                {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="absolute inset-0 backdrop-blur-lg"></div>
                        <form className="bg-white w-full max-w-md p-6 rounded-lg shadow-md relative">
                            <div className="mb-4">
                                <p className='text-red-500'>* After sending the inquiry, we will promptly connect with you within 30min for confirmation of your booking.</p>
                                <br />
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-700 text-sm font-bold mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="block w-full border rounded-md py-2 px-3 focus:ring-blue-300 focus:border-blue-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-700 text-sm font-bold mb-1">
                                    Phone
                                </label>
                                <InputMask
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber.replace("+91", "")}
                                    onChange={handleChange}
                                    mask="99999-99999"
                                    placeholder="99999-99999"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">

                                <label htmlFor="desc" className="block text-gray-700 text-sm font-bold mb-2">
                                    Description
                                </label>
                                <textarea
                                    id="desc"
                                    name="desc"
                                    value={formData.desc}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    rows={4}
                                />
                            </div>
                            {/* Phone Number input */}
                            {/* Add other inputs here */}
                            {/* Send button */}
                            <button
                                type="submit"
                                onClick={() => handleSubmit()}
                                className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                Send
                            </button>
                            <button
                                onClick={() => setPopupOpen(false)}
                                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                            {successMessage && (
                                <div className="bg-green-200 text-green-800 p-2 mt-4 rounded" >
                                    {successMessage}
                                </div>
                            )}
                        </form>
                    </div>
                )}
            </div>
        </div>

    )
}

export default CarCard
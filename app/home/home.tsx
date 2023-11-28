/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import AboutUs from '@/components/about';
import ContactUs from '@/components/contactus';
import SearchRide from '@/components/seachride';
import axios from 'axios';

interface Photo {
    source: string;
    alt: string;
}
const Home = () => {

    const [crousalTime, setCrousalTime] = useState<number>(2150);
    const [photos, setPhotos] = useState<Photo[]>([
        // Replace these URLs with your own image URLs
        { source: 'crousal_photos/photo1.jpg', alt: 'Image 1' },
        { source: 'crousal_photos/photo2.jpg', alt: 'Image 2' },
        { source: 'crousal_photos/photo3.jpg', alt: 'Image 3' },
    ]);
    const [isSearchRide, setIsSearchRide] = useState<boolean>(false);
    const [isPhoneScreen, setIsPhoneScreen] = useState<Boolean>();

    const itemTemplate = (photo: Photo) => {
        return (
            <img src={photo.source} alt={photo.alt} className="object-cover w-full h-[23rem] " />
        );
    };
    const handleExploreNowClick = () => {
        const searchRideSection = document.getElementById('tours');
        if (searchRideSection) {
            searchRideSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        city: '',
        requirement: ''
    });
    useEffect(() => {
        const windowSize = () => {
            if (window.innerWidth <= 768) {
                setIsPhoneScreen(true);
            } else {
                setIsPhoneScreen(false);
            }
        };

        window.addEventListener("resize", () => {
            windowSize();
        });

        windowSize();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log('formData :>> ', formData);
            await axios.post("/api/rapid_enquiry", formData)
            alert("Rapid Enquiry Submitted Successfully!")
        } catch (error) {
            console.log('error :>> ', error);
        }
    };

    useEffect(() => {
        setCrousalTime(2154)
    }, []);
    function handleToggleForm(): void {
        setIsSearchRide(!isSearchRide)
    }

    return (
        <>
            <div>
                {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center z-100 mt-[30px] flex flex-wrap"> */}
                {/* </div> */}
                <div className='relative' style={{ backgroundImage: 'url("sky.jpeg")' }}>
                    <Carousel value={photos} itemTemplate={itemTemplate} numVisible={1} numScroll={1} autoplayInterval={crousalTime} className='carousel-image' />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-center flex-wrap">
                        <h1 className="text-4xl font-bold mb-4 text-white">Discover the World</h1>
                        <h2 className="text-xl font-semibold mb-6 text-white">Your Ultimate Travel Companion</h2>
                        <p className="text-lg mb-4 text-white">
                            Book Your Dream Tours Today!
                        </p>
                        <button onClick={handleExploreNowClick} className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition duration-300">
                            Explore Now
                        </button>

                        <div className={`pb-2 bg-slate-800 bg-opacity-50 rounded-lg ${isPhoneScreen ? "mt-[2rem]" : "mt-[12rem]"} `}>
                            <div className={`flex gap-4 ${isSearchRide ? "bg-blue-500" : "bg-neutral-500"} w-[20%] rounded-full mt-[-8px] ml-[-8px]`}>
                                <div className={`${isSearchRide ? "bg-neutral-500" : "bg-blue-500"} p-[8px] rounded-full cursor-pointer font-medium text-white`} onClick={() => handleToggleForm()}>
                                    Rapid Enquiry
                                </div>
                                <div className={`p-[8px] ${isSearchRide ? "bg-blue-500" : "bg-neutral-500"} rounded-full cursor-pointer font-medium text-white`} onClick={() => handleToggleForm()}>
                                    Search Ride
                                </div>
                            </div>
                            {!isSearchRide ? <form onSubmit={handleSubmit} className="mt-4 flex gap-4 p-4 ">
                                <div className='flex flex-wrap gap-4'>
                                    <div className="mb-4">
                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                            Name:*
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder='Enter Your name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="border rounded-md py-2 px-3 w-full"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="number">
                                            Phone No. :*
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder='Enter Your Number'
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="border rounded-md py-2 px-3 w-full "
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                            Email:*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder='Enter Your Email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="border rounded-md py-2 px-3 w-full"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-4'>
                                    <div className="mb-4">
                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="city">
                                            City:
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder='Enter Your City'
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="border rounded-md py-2 px-3 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-white text-sm font-bold mb-2" htmlFor="requirement">
                                            Requirement:
                                        </label>
                                        <input
                                            type="text"
                                            id="requirement"
                                            name="requirement"
                                            placeholder='Enter Your Requirement'
                                            value={formData.requirement}
                                            onChange={handleChange}
                                            className="border rounded-md py-2 px-3 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">

                                        <button
                                            type="submit"
                                            className="w-[100%] bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600 h-[62%] mt-[27px]"
                                        >
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </form>
                                :
                                <div className={`${isPhoneScreen ? "" : "w-[77rem]"}`}>
                                    <SearchRide />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='p-[7rem] flex flex-col gap-8 bg-gray-200'>
                    <h1 className="px-8 text-2xl font-bold text-center uppercase">Explore the most unique and far-flung destinations.</h1>
                    <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[100%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="h-min overflow-hidden rounded-md">
                            <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://ihplb.b-cdn.net/wp-content/uploads/2014/04/Best-Places-to-Visit-in-Himachal-Pradesh-750x430.jpg" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </a>
                    <a className="flex flex-row-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row-reverse md:max-w-[100%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="h-min overflow-hidden rounded-md">
                            <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://ihplb.b-cdn.net/wp-content/uploads/2014/04/Best-Places-to-Visit-in-Himachal-Pradesh-750x430.jpg" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </a>
                    <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[100%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="h-min overflow-hidden rounded-md">
                            <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://ihplb.b-cdn.net/wp-content/uploads/2014/04/Best-Places-to-Visit-in-Himachal-Pradesh-750x430.jpg" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div >
                    </a>
                </div>
                <div id='tours'>
                    <div>
                        <h1 className="p-8 text-2xl font-bold text-center">TOUR & PACKAGES</h1>
                    </div>
                    <div className='px-28  flex gap-8'>

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="h-min overflow-hidden rounded-md">
                                <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://ihplb.b-cdn.net/wp-content/uploads/2014/04/Best-Places-to-Visit-in-Himachal-Pradesh-750x430.jpg" alt="" />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹5999</span>
                                    <a href="#" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="h-min overflow-hidden rounded-md">
                                <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://ihplb.b-cdn.net/wp-content/uploads/2014/04/Best-Places-to-Visit-in-Himachal-Pradesh-750x430.jpg" alt="" />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹5999</span>
                                    <a href="#" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">Book Now</a>
                                </div>
                            </div>

                        </div>
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="h-min overflow-hidden rounded-md">
                                <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://ihplb.b-cdn.net/wp-content/uploads/2014/04/Best-Places-to-Visit-in-Himachal-Pradesh-750x430.jpg" alt="" />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹5999</span>
                                    <a href="#" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center pb-28 pt-4 cursor-pointer'>
                        <a className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">More</a>
                    </div>
                </div>

                <div>
                    <h1 className="p-8 text-2xl font-bold text-custom-red text-center">Discover Unbeatable Winter Getaways</h1>

                    <div className='px-28 flex gap-8'>

                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="h-min overflow-hidden rounded-md">
                                <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/28105830/Top-10-tourist-places-to-visit-in-Himachal-Pradesh-09.jpg" alt="" />
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                    Book Now
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="h-min overflow-hidden rounded-md">
                                <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://travelsincredibleindia.files.wordpress.com/2018/02/himachal-pradesh-tourism.jpg?w=636&h=382" alt="" />
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                    Book Now
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="h-min overflow-hidden rounded-md">
                                <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src="https://www.swantour.com/blogs/wp-content/uploads/2019/01/Tourist-Places-in-Himachal-Pradesh.jpg" alt="" />
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                Book Now
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center pb-28 pt-4 cursor-pointer'>
                        <a className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">More</a>
                    </div>
                </div>

                {/* <div className="card flex items-center justify-center p-6 bg-gradient-to-r from-a8fffa to-251e1e rounded-lg">
                    <div className="mr-6">
                        <Image src="/remove.png" alt="Image" width="800" height="450" />
                    </div>
                    <div>
                        <p className="text-black font-bold text-lg">Discover the World, Embrace the Journey</p>
                    </div>
                </div> */}
                <AboutUs />
                <ContactUs />
            </div>

        </>
    );
};

export default Home;

import axios from 'axios';
import React, { useState } from 'react';
interface Props {
    isPopupOpen: boolean;
    setPopupOpen: any;
    isOpen : boolean;
    packageName? :string
}
const Packagebook = (props: Props) => {

    const closePopup = () => {
        props.setPopupOpen(false);
    };
    const [formData, setFormData] = useState({
        packageName: '',
        checkInDate: '',
        checkOutDate: '',
        fullName: '',
        city: '',
        email: '',
        phone: '',
        adults: '',
        kids: '',
        description: '',
      });
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        // You can handle form submission here, for example, sending data to an API
        console.log('Form Submitted:', formData);
        formData.packageName = props.packageName!;
        try {
            await axios.post("/api/package_enquiry", formData)
            alert("Request Submitted Successfully!")
            setFormData({
                packageName: '',
                checkInDate: '',
                checkOutDate: '',
                fullName: '',
                city: '',
                email: '',
                phone: '',
                adults: '',
                kids: '',
                description: '',
              });
              // Close the popup after form submission
              closePopup();
        } catch (error) {
            alert("Request failed!")
            closePopup();
            console.log('error :>> ', error);
        }
      };

    if (!props.isOpen) return null;

        return (
            <div id="popup" className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg border-4 shadow-lg">
                    <div className="bg-white rounded-lg p-8 w-[50%]">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Enquiry: Booking a Package - Ready to Explore</h2>
                        <button  onClick={closePopup} className="absolute top-[5rem] right-[23rem] text-gray-600 float-right">
                            {/* 'x' button for cancel */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <hr className='mb-2'/>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 flex">
                                <span className="block text-sm font-bold mb-2" >Package Name : </span><span className='block text-gray-700 text-sm font-bold mb-2'>{props.packageName}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Check In</label>
                                    <input id="checkInDate" name="checkInDate" value={formData.checkInDate} onChange={handleChange} type="date" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Check Out</label>
                                    <input id="checkOutDate" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} type="date" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >Name</label>
                                <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} type="text" placeholder="First Name & Last Name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >City</label>
                                <input id="city" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Your City" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >E-mail</label>
                                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email ID" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >Phone Number</label>
                                <input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Adults</label>
                                    <input id="adults" type="number" name="adults" value={formData.adults} onChange={handleChange}  placeholder="No. of Adults" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" >Kids</label>
                                    <input id="kids" type="number" name="kids" value={formData.kids} onChange={handleChange} placeholder="No. of Children" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >Brief Description</label>
                                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={3} placeholder="Write a brief description" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                Send Enquiry
                            </button>
                        </form>
                    </div>
                </div>
        );
};

export default Packagebook;

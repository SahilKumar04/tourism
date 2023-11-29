import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '../client/email_sender';
interface Data {
    destination: string;
    travelType: string;
    conveyance: string;
    dateFrom: string;
    dateTo: string;
    adults: number;
    kids: number;
    description: string;
    name: string;
    phoneNumber: string;
    email: string;
    address: string;
    city: string;
    state: string;
}

export const POST = async (request: NextRequest) => {
    const tripDetails: Data = await request.json()
    const subject: string = "Trip Details for Himachal Pradesh"
    let planYourTripTemplate = `
    Dear Trips In Himachal,

    I hope this email finds you well. I am writing to inquire about planning a trip to Himachal Pradesh, and I would appreciate your assistance in organizing the details.
    
    Trip Details:
    
    Destination: ${tripDetails.destination}
    Travel Type: ${tripDetails.travelType}
    Preferred Conveyance: ${tripDetails.conveyance}
    Travel Dates: From ${tripDetails.dateFrom} to ${tripDetails.dateTo}
    Number of Adults: ${tripDetails.adults}
    Number of Kids: ${tripDetails.kids}
    Trip Description: ${tripDetails.description}

    Personal Information:
    
    Name: ${tripDetails.name}
    Phone Number: ${tripDetails.phoneNumber}
    Email: ${tripDetails.email}
    Address: ${tripDetails.address}
    City: ${tripDetails.city}
    State: ${tripDetails.state}
    I am excited about exploring the beautiful landscapes and experiences that Himachal Pradesh has to offer. I would appreciate your expertise in organizing accommodations, sightseeing, and any additional information you think might enhance the trip.
    
    Please let me know about the available packages, suggested itineraries, and any other relevant details. Your prompt response would be greatly appreciated.
    
    Thank you for your time and assistance. I look forward to your guidance in planning this memorable trip.
    
    Warm regards,
    
    ${tripDetails.name}
    ${tripDetails.phoneNumber}`;
    try {
        await sendMail(subject, planYourTripTemplate);
        return NextResponse.json("success")
    } catch (error) {
        console.error(error);
        return NextResponse.json("failed")
    }
}

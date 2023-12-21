import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '../client/email_sender';
interface Data {
    packageName: string,
    checkInDate: string,
    checkOutDate: string,
    fullName: string,
    city: string,
    email: string,
    phone: string,
    adults: string,
    kids: string,
    description: string,
}

export const POST = async (request: NextRequest) => {
    const enquiryDetails: Data = await request.json()
    const subject: string = ` Inquiry: Booking a ${enquiryDetails.packageName} - Ready to Explore`
    let packageEnquiryTemplate = `
  
    Dear Trips in Himachal ,
    
    Package Name: Manali Tour Packages
    Check-In: ${enquiryDetails.checkInDate}
    Check-Out: ${enquiryDetails.checkOutDate}

    Personal Info:

    Name: ${enquiryDetails.fullName}
    City: ${enquiryDetails.city}
    E-mail: ${enquiryDetails.email}
    Phone: ${enquiryDetails.phone}
    Mobile: ${enquiryDetails.phone}

    Travel Info:

    Adults: ${enquiryDetails.adults}
    Kids: ${enquiryDetails.kids}
    Looking forward to exploring Manali soon!
    Thank you for your attention to this matter.
  
  Best regards,
  ${enquiryDetails.fullName}
  ${enquiryDetails.phone}
  `;
    try {
        await sendMail(subject, packageEnquiryTemplate);
        return NextResponse.json("success")
    } catch (error) {
        console.error(error);
        return NextResponse.json("failed")
    }
}

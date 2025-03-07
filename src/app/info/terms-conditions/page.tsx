
import React from "react";

interface Term {
  title: string;
  content: string;
}

const terms: Term[] = [
	{
		title: "1. Introduction",
		content:
		  "Welcome to MedCare. By using our platform and services, you agree to these Terms and Conditions. Please read them carefully as they govern your use of our healthcare services and website."
	  },
	  {
		title: "2. Services",
		content:
		  "MedCare provides medical consultation, treatment facilitation, telemedicine services, and health-related resources. Our services aim to connect you with healthcare professionals and facilities to meet your medical needs."
	  },
	  {
		title: "3. Payment Terms",
		content:
		  "You are responsible for paying for medical services, consultation fees, and any associated costs. Payment terms will be communicated before the service is rendered. In case of telemedicine or online services, payments must be made upfront."
	  },
	  {
		title: "4. User Responsibilities",
		content:
		  "You agree to provide accurate and up-to-date medical history and personal information to ensure proper care. You also agree to comply with all applicable healthcare laws and respect the rights of healthcare providers."
	  },
	  {
		title: "5. Limitation of Liability",
		content:
		  "MedCare is not liable for any indirect, incidental, or consequential damages resulting from the use of our platform or services. Our role is limited to facilitating medical services and consultations."
	  },
	  {
		title: "6. Termination",
		content:
		  "We reserve the right to terminate your access to our services if you violate these terms or engage in any activity that compromises the safety or integrity of the platform."
	  },
	  {
		title: "7. Governing Law",
		content:
		  "These terms are governed by the laws of your jurisdiction, as applicable to healthcare service providers."
	  },
	  {
		title: "8. Privacy and Data Usage",
		content:
		  "Your personal and medical information is handled in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information for healthcare purposes."
	  },
	  {
		title: "9. Emergency Disclaimer",
		content:
		  "MedCare is not a substitute for emergency medical services. In case of a medical emergency, please contact your local emergency services immediately."
	  },
	  {
		title: "10. Contact Information",
		content: "For questions or concerns, contact us at help@MedCareglobal.com."
	  }
];


const TermsAndConditions: React.FC = () => {
  return (
    
      <div className="container py-24 md:pb-40 md:pt-24 md:px-12 px-4 mx-auto ">
        <h1 className="text-4xl md:text-6xl font-bold text-center my-20 font-wixMadeforDisplay  pb-2 ">
          Terms and Conditions
        </h1>
        <p className="text-lg font-normal p-4 text-gray-700">
          Effective Date: 1st January 2024
        </p>
        <ul className="list-none space-y-4">
          {terms.map((term, index) => (
            <li key={index} className="mb-4 p-4">
              <h2 className="text-3xl font-semibold mb-2 font-wixMadeforDisplay">
                {term.title}
              </h2>
              <p className="text-lg font-normal ">{term.content}</p>
            </li>
          ))}
        </ul>
      </div>
  
  );
};

export default TermsAndConditions;

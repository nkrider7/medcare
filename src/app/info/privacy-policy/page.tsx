import React from "react";

interface PrivacyPolicy {
  title: string;
  content: string;
}

const PRIVACY_POLICY: PrivacyPolicy[] = [
	{
		title: "1. Introduction",
		content:
		  "MedCare is committed to protecting your privacy and ensuring the confidentiality of your medical and personal information. This policy explains how we collect, use, and safeguard your data in compliance with applicable healthcare privacy regulations."
	  },
	  {
		title: "2. Information We Collect",
		content:
		  "We collect information you provide directly, such as your name, contact details, medical history, treatment preferences, and other health-related data. Additionally, we may collect technical data, such as IP addresses, when you use our website or services."
	  },
	  {
		title: "3. How We Use Information",
		content:
		  "We use your information to provide medical services, support your healthcare needs, enhance your treatment experience, communicate with you about your care, and comply with legal and regulatory requirements."
	  },
	  {
		title: "4. Sharing Information",
		content:
		  "We do not share your personal or medical information with third parties except to deliver services, comply with legal obligations, or collaborate with healthcare providers involved in your care. All sharing is conducted in accordance with applicable privacy laws."
	  },
	  {
		title: "5. Data Security",
		content:
		  "We implement robust security measures, including encryption and secure servers, to protect your medical and personal information from unauthorized access, disclosure, alteration, or destruction."
	  },
	  {
		title: "6. Your Rights",
		content:
		  "You have the right to access, update, or delete your personal and medical information. You may also request a copy of your health records or restrict how your information is used, subject to applicable laws."
	  },
	  {
		title: "7. Telemedicine Privacy",
		content:
		  "For telemedicine services, we ensure secure video and audio communication platforms. We do not record consultations without your explicit consent."
	  },
	  {
		title: "8. Children's Privacy",
		content:
		  "We are dedicated to protecting the privacy of children. Any information related to individuals under the age of 18 must be provided by a parent or guardian."
	  },
	  {
		title: "9. Changes to This Policy",
		content:
		  "We may update this policy to reflect changes in our practices or healthcare regulations. Significant updates will be communicated to you via email or a notice on our website."
	  },
	  {
		title: "10. Contact Us",
		content:
		  "If you have any questions or concerns about this policy or your data, please contact us at privacy@MedCareglobal.com."
	  }
];


const PrivacyPolicy: React.FC = () => {
  return (
      <div className="container py-24 md:pb-40 md:pt-24 md:px-12 px-4 mx-auto ">
        <h1 className="text-4xl md:text-6xl font-bold text-center my-20 font-wixMadeforDisplay  pb-2 ">
          Privacy Policy
        </h1>
        <p className="text-lg font-normal p-4 text-gray-700">
          Effective Date: 1st January 2024
        </p>
        <ul className="list-none space-y-4">
          {PRIVACY_POLICY.map((policy, index) => (
            <li key={index} className="mb-4 p-4">
              <h2 className="text-3xl font-semibold mb-2 font-wixMadeforDisplay">
                {policy.title}
              </h2>
              <p className="text-lg font-normal ">{policy.content}</p>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default PrivacyPolicy;

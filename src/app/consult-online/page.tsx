"use client";
import React, { useState, Suspense } from 'react';
import { countryCityData } from "@/lib/constant/unversal";
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { failedMail, sendingMail, sendSuccuss } from "@/components/Universal/UniversalToast";
import { toast } from 'sonner';
import PhoneInput from "react-phone-number-input";
import "./phone.css";
import "react-phone-number-input/style.css";


const PatientForm: React.FC = () => {
    const searchParams = useSearchParams();
    const hospital = searchParams.get('hospital');
    const router = useRouter()
    const doctor = searchParams.get('doctor');
    // const [countryCode, setCountryCode] = useState(countryCodeData["India"]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: 'India',
        city: '',
        phone: '',
        medicalProblem: '',
        ageOrDOB: '',
        hospital: hospital,
        doctor: doctor,

    });
    const [files, setFiles] = useState<File[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // if (name === "country") {
        //     setCountryCode(countryCodeData[value as keyof typeof countryCodeData]);
        // }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            ...(name === 'country' ? { city: '' } : {}),
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files).slice(0, 3);
            setFiles(selectedFiles);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        if (!formData.name || !formData.email || !formData.city || !formData.phone || !formData.medicalProblem || !formData.ageOrDOB) {
            toast.error("All fields are required.");
            return;
        }
        sendingMail();
        try {
            const formDataPayload = new FormData();
            formDataPayload.append("name", formData.name);
            formDataPayload.append("email", formData.email);
            formDataPayload.append("medicalProblem", formData.medicalProblem);
            formDataPayload.append("country", formData.country);
            formDataPayload.append("city", formData.city);
            formDataPayload.append("phone",  formData.phone);
            formDataPayload.append("ageOrDOB", formData.ageOrDOB);
            formDataPayload.append("hospital", formData.hospital || '');
            formDataPayload.append("doctor", formData.doctor || '');

            files.forEach((file, index) => {
                formDataPayload.append(`file${index + 1}`, file); // Append each file
            });

            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                body: formDataPayload,
            });

            const data = await response.json();
            if (response.ok) {
                sendSuccuss()
                setFormData({ name: '', email: '', country: 'India', city: '', phone: '', medicalProblem: '', ageOrDOB: '', hospital: hospital, doctor: doctor });
                setFiles([]); // Reset file input
                router.push("/")
            } else {
                failedMail()
                console.log(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            failedMail()
        }
    };
    return (
        <Suspense>
            <div className="max-w-xl mx-auto p-6 my-2 rounded-lg">
                <h2 className="text-center text-xl font-semibold mb-2">Help Us With Patient Details</h2>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
                        {hospital && <>
                            <label htmlFor="hospital" className="block py-1 text-sm font-medium">
                                Hospital<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="text"
                                id="hospital"
                                name="hospital"
                                value={formData.hospital || ''}
                                onChange={handleChange}
                                placeholder="Hospital Name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled
                            />
                        </>}
                        {doctor && <>
                            <label htmlFor="hospital" className="block py-1 text-sm font-medium">
                                Doctor
                            </label>
                            <input
                                type="text"
                                id="hospital"
                                name="hospital"
                                value={formData.doctor || ''}
                                onChange={handleChange}
                                placeholder="Hospital Name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled
                            />
                        </>}
                        <label htmlFor="name" className="block py-1 text-sm font-medium">
                            Name <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Patient Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block py-1 text-sm font-medium">
                            Email<span className='text-red-500'>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="country" className="block py-1 text-sm font-medium">
                            Country<span className='text-red-500'>*</span>
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {Object.keys(countryCityData).map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="city" className="block py-1 text-sm font-medium">
                            City<span className='text-red-500'>*</span>
                        </label>
                        <select
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={!formData.country} // Disable if no country is selected
                        >
                            <option value="">Select City</option>
                            {formData.country && countryCityData[formData.country]?.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block py-1 text-sm font-medium">
                            Phone Number<span className='text-red-500'>*</span>
                        </label>
                        <div className="flex">
                           
                            <PhoneInput
                            className='w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="IN"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={(value) => setFormData({ ...formData, phone: value || '' })} />
                           
                        </div>
                    </div>
                    <div>
                        <label htmlFor="medicalProblem" className="block py-1 text-sm font-medium">
                            Medical Problem<span className='text-red-500'>*</span>
                        </label>
                        <textarea
                            id="medicalProblem"
                            name="medicalProblem"
                            value={formData.medicalProblem}
                            onChange={handleChange}
                            placeholder="Describe The Current Medical Problem .."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="ageOrDOB" className="block py-1 text-sm font-medium">
                            Age or Date of Birth<span className='text-red-500'>*</span>
                        </label>
                        <input
                            type="text"
                            id="ageOrDOB"
                            name="ageOrDOB"
                            value={formData.ageOrDOB}
                            onChange={handleChange}
                            placeholder="Example: 30 Yrs or 29-05-1985"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="file" className="block py-1 text-sm font-medium">
                           Documents (Medical Reports And Other Releted to Health) <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            multiple
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            accept=".jpg, .jpeg, .png, .pdf" // Accept only images and PDFs
                        />
                        <p className="text-xs text-gray-500">Supported formats: .jpg, .jpeg, .png, .pdf</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-red-700 transition duration-300"
                    >
                        Submit
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-2">
                        By submitting the form I agree to the{" "}
                        <Link href="/info/terms-conditions" className="text-blue-600">
                            Terms of Use
                        </Link>{" "}
                        and{" "}
                        <Link href="/info/privacy-policy" className="text-blue-600">
                            Privacy Policy
                        </Link>{" "}
                        of MedCare Global.
                    </p>
                </form>
            </div>

        </Suspense>
    );
};

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PatientForm />
        </Suspense>
    );
};

export default Page;

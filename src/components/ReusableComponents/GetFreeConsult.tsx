"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { countryCityData, countryCodeData } from "@/lib/constant/unversal";
import Link from "next/link";

export default function GetFreeConsult() {
  const [countryCode, setCountryCode] = useState(countryCodeData["India"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "India",
    city: "",
    phone: "",
    medicalProblem: "",
    ageOrDOB: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "country") {
      setCountryCode(countryCodeData[value as keyof typeof countryCodeData]);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "country" ? { city: "" } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    toast.success("Email Sending....");
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.city ||
      !formData.phone ||
      !formData.medicalProblem ||
      !formData.ageOrDOB
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          medicalProblem: formData.medicalProblem,
          country: formData.country,
          city: formData.city,
          phone: countryCode + formData.phone,
          ageOrDOB: formData.ageOrDOB,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Email Sent Successfully");
        setFormData({
          name: "",
          email: "",
          country: "India",
          city: "",
          phone: "",
          medicalProblem: "",
          ageOrDOB: "",
        });
      } else {
        toast.error("Failed to send email");
        console.log(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the email");
    }
  };
  return (
    <div className=" max-w-md mx-auto p-6 my-2  rounded-lg bg-gray-100 shadow-lg">
      <h2 className="text-center text-xl font-semibold mb-2">
        Let Us Help You
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label htmlFor="name" className="block py-1 text-sm font-medium">
            Name <span className="text-red-500">*</span>
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
            Email<span className="text-red-500">*</span>
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
            Country<span className="text-red-500">*</span>
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
            City<span className="text-red-500">*</span>
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!formData.country} 
          >
            <option value="">Select City</option>
            {formData.country &&
              countryCityData[formData.country]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="block py-1 text-sm font-medium">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-gray-600 bg-gray-200 border border-r-0 rounded-l-md">
              {countryCode}
            </span>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone number"
              className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="medicalProblem"
            className="block py-1 text-sm font-medium"
          >
            Medical Problem<span className="text-red-500">*</span>
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
            Age or Date of Birth<span className="text-red-500">*</span>
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
  );
}

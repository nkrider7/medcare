import * as React from 'react';
import { Tailwind, Html, Container,  Text, Heading } from "@react-email/components";

interface EmailTempProps {
  name: string;
  email: string;
  country: string;
  city: string;
  phoneNumber: string;
  medicalProblem: string;
  ageOrDOB: string;
  hospital: string;
  doctor: string;
}

export const EmailTemp: React.FC<Readonly<EmailTempProps>> = ({ name, email, country, city, phoneNumber, medicalProblem, ageOrDOB, hospital, doctor }) => {


  return (
    <Tailwind>
      <Html lang="en">
        <Container className="mx-auto my-0 max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <Heading className="text-2xl font-semibold text-brand text-center mb-6">
            Patient Details for MedCare
          </Heading>

          <div className="space-y-2 w-full">
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Name:</Text>
              <Text className="text-lg text-gray-800">{name}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Email:</Text>
              <Text className="text-lg text-gray-800">{email}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Country:</Text>
              <Text className="text-lg text-gray-800">{country}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">City:</Text>
              <Text className="text-lg text-gray-800">{city}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Phone Number:</Text>
              <Text className="text-lg text-gray-800">{phoneNumber}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Medical Problem:</Text>
              <Text className="text-lg text-gray-800">{medicalProblem}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Age or Date of Birth:</Text>
              <Text className="text-lg text-gray-800">{ageOrDOB}</Text>
            </div>
            { hospital && (
              <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Hospital Name:</Text>
              <Text className="text-lg text-gray-800">{hospital}</Text>
            </div>
            )}
            {doctor && (
              <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Doctors Name:</Text>
              <Text className="text-lg text-gray-800">{doctor}</Text>
            </div>
            )}
          </div>

          <Text className="text-center text-sm text-green-400 mt-6">
            Thank you for choosing MedCare!
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
};



interface EmailTempAirportProps {
  name: string;
  email: string;
  phoneNumber: string;
  vehicle: string;
  messageForUs: string;
}

export const EmailTempAirport: React.FC<Readonly<EmailTempAirportProps>> = ({ name, email, phoneNumber, vehicle, messageForUs }) => {

  return (
    <Tailwind>
      <Html lang="en">
        <Container className="mx-auto my-0 max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <Heading className="text-2xl font-semibold text-brand text-center mb-6">
            Airport Pickup Details
          </Heading>

          <div className="space-y-2 w-full">
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Name:</Text>
              <Text className="text-lg text-gray-800">{name}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Email:</Text>
              <Text className="text-lg text-gray-800">{email}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Phone Number:</Text>
              <Text className="text-lg text-gray-800">{phoneNumber}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Vehicle:</Text>
              <Text className="text-lg text-gray-800">{vehicle}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Message:</Text>
              <Text className="text-lg text-gray-800">{messageForUs}</Text>
            </div>
          </div>

          <Text className="text-center text-sm text-green-400 mt-6">
            Thank you for choosing our airport pickup service!
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
};


interface EmailTempTranslatorProps {
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  language: string;
  messageForUs: string;
}

export const EmailTempTranslator: React.FC<Readonly<EmailTempTranslatorProps>> = ({ name, email, phoneNumber, country, language, messageForUs }) => {

  return (
    <Tailwind>
      <Html lang="en">
        <Container className="mx-auto my-0 max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <Heading className="text-2xl font-semibold text-brand text-center mb-6">
            Translation Request Details
          </Heading>

          <div className="space-y-2 w-full">
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Name:</Text>
              <Text className="text-lg text-gray-800">{name}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Email:</Text>
              <Text className="text-lg text-gray-800">{email}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Phone Number:</Text>
              <Text className="text-lg text-gray-800">{phoneNumber}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Country:</Text>
              <Text className="text-lg text-gray-800">{country}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Language:</Text>
              <Text className="text-lg text-gray-800">{language}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Message:</Text>
              <Text className="text-lg text-gray-800">{messageForUs}</Text>
            </div>
          </div>

          <Text className="text-center text-sm text-green-400 mt-6">
            Thank you for choosing our translation services!
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
};


interface EmailTempVisaInvitationsProps {
  name: string;
  email: string;
  phoneNumber: string;
  numberOfAttendants: string;
  appointmentDate: string;
  hospitalName: string;
  messageForUs: string;
}

export const EmailTempVisaInvitations: React.FC<Readonly<EmailTempVisaInvitationsProps>> = ({ name, email, phoneNumber, numberOfAttendants, appointmentDate, hospitalName, messageForUs }) => {

  return (
    <Tailwind>
      <Html lang="en">
        <Container className="mx-auto my-0 max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <Heading className="text-2xl font-semibold text-brand text-center mb-6">
            Visa Invitation Request Details
          </Heading>

          <div className="space-y-2 w-full">
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Name:</Text>
              <Text className="text-lg text-gray-800">{name}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Email:</Text>
              <Text className="text-lg text-gray-800">{email}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Phone Number:</Text>
              <Text className="text-lg text-gray-800">{phoneNumber}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Number of Attendants:</Text>
              <Text className="text-lg text-gray-800">{numberOfAttendants}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Appointment Date:</Text>
              <Text className="text-lg text-gray-800">{appointmentDate}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Hospital Name:</Text>
              <Text className="text-lg text-gray-800">{hospitalName}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Message:</Text>
              <Text className="text-lg text-gray-800">{messageForUs}</Text>
            </div>
          </div>

          <Text className="text-center text-sm text-green-400 mt-6">
            Thank you for submitting your visa invitation request!
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
};


interface EmailTempAccommodationProps {
  name: string;
  email: string;
  phoneNumber: string;
  numberOfPeople: string;
  roomType: string;
  hospitalName: string;
  city: string;
  messageForUs: string;
}

export const EmailTempAccommodation: React.FC<Readonly<EmailTempAccommodationProps>> = ({ name, email, phoneNumber, numberOfPeople, roomType, hospitalName, city, messageForUs }) => {

  return (
    <Tailwind>
      <Html lang="en">
        <Container className="mx-auto my-0 max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <Heading className="text-2xl font-semibold text-brand text-center mb-6">
            Accommodation Request Details
          </Heading>

          <div className="space-y-2 w-full">
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Name:</Text>
              <Text className="text-lg text-gray-800">{name}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Email:</Text>
              <Text className="text-lg text-gray-800">{email}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Phone Number:</Text>
              <Text className="text-lg text-gray-800">{phoneNumber}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Number of People:</Text>
              <Text className="text-lg text-gray-800">{numberOfPeople}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Room Type:</Text>
              <Text className="text-lg text-gray-800">{roomType}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Hospital Name:</Text>
              <Text className="text-lg text-gray-800">{hospitalName}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">City:</Text>
              <Text className="text-lg text-gray-800">{city}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Message:</Text>
              <Text className="text-lg text-gray-800">{messageForUs}</Text>
            </div>
          </div>

          <Text className="text-center text-sm text-green-400 mt-6">
            Thank you for submitting your accommodation request!
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
};


interface EmailTempVideoConsultProps {
  name: string;
  email: string;
  phoneNumber: string;
  doctorName: string;
  disease: string;
  messageForUs: string;
}

export const EmailTempVideoConsult: React.FC<Readonly<EmailTempVideoConsultProps>> = ({ name, email, phoneNumber,  doctorName, disease, messageForUs }) => {

  return (
    <Tailwind>
      <Html lang="en">
        <Container className="mx-auto my-0 max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <Heading className="text-2xl font-semibold text-brand text-center mb-6">
            Video Consultation Request Details
          </Heading>

          <div className="space-y-2 w-full">
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Name:</Text>
              <Text className="text-lg text-gray-800">{name}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Email:</Text>
              <Text className="text-lg text-gray-800">{email}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Phone Number:</Text>
              <Text className="text-lg text-gray-800">{phoneNumber}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Doctor Name:</Text>
              <Text className="text-lg text-gray-800">{doctorName}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Disease:</Text>
              <Text className="text-lg text-gray-800">{disease}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Message:</Text>
              <Text className="text-lg text-gray-800">{messageForUs}</Text>
            </div>
          </div>

          <Text className="text-center text-sm text-green-400 mt-6">
            Thank you for submitting your video consultation request!
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
};



interface EmailTempHealthAdvisorProps {
  name: string;
  phone: string;
  email: string;
  country: string;
  age: string;
  gender: string;
  messageForUs: string;
}

export const EmailTempHealthAdvisor: React.FC<Readonly<EmailTempHealthAdvisorProps>> = ({ name, phone, email, country, age, gender, messageForUs }) => {

  return (
    <Tailwind>
      <Html lang="en">
        <Container className="mx-auto my-0 max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <Heading className="text-2xl font-semibold text-brand text-center mb-6">
            Health Advisor Request Details
          </Heading>

          <div className="space-y-2 w-full">
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Name:</Text>
              <Text className="text-lg text-gray-800">{name}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Phone:</Text>
              <Text className="text-lg text-gray-800">{phone}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Email:</Text>
              <Text className="text-lg text-gray-800">{email}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Country:</Text>
              <Text className="text-lg text-gray-800">{country}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Age:</Text>
              <Text className="text-lg text-gray-800">{age}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Gender:</Text>
              <Text className="text-lg text-gray-800">{gender}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Message:</Text>
              <Text className="text-lg text-gray-800">{messageForUs}</Text>
            </div>
          </div>

          <Text className="text-center text-sm text-green-400 mt-6">
            Thank you for submitting your health advisor request!
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
};

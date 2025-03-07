import Image from "next/image";
import React from "react";
import GetFree from "../ui/GetFree";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#E1F5FF] py-12">
            {/* Container */}
            <div className="container mx-auto px-4 md:px-8">
                {/* Top Section */}
                <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-16">
                    {/* Branding and Social Links */}
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                        <Link href="/" className="mb-4">
                            <Image
                                src="/medcare.webp"
                                alt="MedCare"
                                width={300}
                                height={150}
                                className="object-contain"
                            />
                        </Link>
                        <p className=" text-myblue font-semibold text-center lg:text-left">
                            One Destination For All Treatment
                        </p>
                        <p className="mb-6 mt-2 text-myblue font-semibold text-center lg:text-left">
                           +91 987654321
                        </p>
                        <SocialLinks />
                        <div className="mt-6">
                            <GetFree />
                        </div>
                    </div>

                    {/* Footer Navigation */}
                    <div className="grid grid-cols-3 gap-8 lg:gap-12 lg:col-span-3">
                        {/* Products Section */}
                        <div className="text-center lg:text-left">
                            <h3 className="mb-4 font-bold uppercase tracking-widest text-myblue">
                                Services
                            </h3>
                            <nav className="flex flex-col gap-3">
                                <Link href="/hospitals" className="text-gray-500 transition hover:text-blue-500">
                                    Hospitals
                                </Link>
                                <Link href="/doctors" className="text-gray-500 transition hover:text-blue-500">
                                    Doctors
                                </Link>
                                <Link href="/treatments" className="text-gray-500 transition hover:text-blue-500">
                                    Treatment
                                </Link>
                                <Link href="/about" className="text-gray-500 transition hover:text-blue-500">
                                    About
                                </Link>
                            </nav>
                        </div>

                        {/* Support Section */}
                        <div className="text-center lg:text-left">
                            <h3 className="mb-4 font-bold uppercase tracking-widest text-myblue">
                                Support
                            </h3>
                            <nav className="flex flex-col gap-3">
                                <Link href="/consult-online" className="text-gray-500 transition hover:text-blue-500">
                                    Contact Us
                                </Link>
                                <Link href="/consult-online" className="text-gray-500 transition hover:text-blue-500">
                                    Consult Online
                                </Link>
                                <Link href="/consult-online" className="text-gray-500 transition hover:text-blue-500">
                                    Help
                                </Link>
                                <Link href="/consult-online" className="text-gray-500 transition hover:text-blue-500">
                                    For More
                                </Link>
                            </nav>
                        </div>

                        {/* Legal Section */}
                        <div className="text-center lg:text-left">
                            <h3 className="mb-4 font-bold uppercase tracking-widest text-myblue">
                                Legal
                            </h3>
                            <nav className="flex flex-col gap-3">
                                <Link
                                    href="/info/terms-conditions"
                                    className="text-gray-500 transition hover:text-blue-500"
                                >
                                    Terms of Service
                                </Link>
                                <Link
                                    href="/info/privacy-policy"
                                    className="text-gray-500 transition hover:text-blue-500"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-gray-500 transition hover:text-blue-500"
                                >
                                    About
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t mt-12 py-4 text-center text-sm ">
                <a href="https://github.com/nkrider7">
                    © 2025 Present <span className="font-semibold text-myblue">@nkriderking</span>. All rights reserved.
                </a>
            </div>
        </footer>
    );
}

const SocialLinks = () => (
    <div className="flex justify-center lg:justify-start gap-4">
        <SocialLink
            href="https://www.facebook.com"
            icon={<Facebook size={20} />}
        />
        <SocialLink
            href="https://www.instagram.com"
            icon={<Instagram size={20} />}
        />
        <SocialLink
            href="https://youtube.com"
            icon={<Youtube size={20} />}
        />
        <SocialLink
            href="mailto:help@MedCareglobal.com"
            icon={<Mail size={20} />}
        />
    </div>
);

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-myblue border-myblue rounded-full p-2 border-2 transition hover:text-blue-500 hover:border-blue-500"
    >
        {icon}
    </a>
);

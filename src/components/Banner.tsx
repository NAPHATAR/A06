import React from 'react';
import Image from 'next/image';

export default function Banner() {
    return (
        <div className="relative w-full h-72 flex items-center justify-center overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <div className="relative w-full h-full">
                <Image 
                    src="/img/hospital.jpg" 
                    alt="Vaccine Service Center" 
                    layout="fill" 
                    objectFit="cover" 
                    priority
                    className="filter brightness-70 rounded-md"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white p-5 z-10">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold mb-4 tracking-wide">Vaccine Service Center</h1>
                    <p className="text-xl font-semibold max-w-3xl mx-auto leading-relaxed">
                        Get vaccinated and protect yourself and your community.
                    </p>
                </div>
            </div>
        </div>
    );
}

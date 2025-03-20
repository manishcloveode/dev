// components/TestimonialCarousel.jsx
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jones',
        position: 'Marketing Manager ,Green Earth Solar',
        avatar: '/images/client1.svg',
    },
    {
        id: 2,
        name: 'David Lee',
        position: 'CEO, Technovation Inc',
        avatar: '/images/client2.svg',
    },
    {
        id: 3,
        name: 'Emily Garciaz',
        position: 'Founder , The painted palette',

        avatar: '/images/client3.svg',
    },
];

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: React.SetStateAction<number>) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Kind words from Clients</h2>

            <div className="relative w-full overflow-hidden">
                <div
                    className="transition-transform duration-500 ease-in-out flex"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="w-full flex-shrink-0">
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-15 h-15 mb-4 rounded-full overflow-hidden bg-green-100">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                                <p className="text-gray-600 mb-4">{testimonial.position}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-violet-400' : 'bg-gray-200'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
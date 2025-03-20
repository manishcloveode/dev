"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CircleArrowDown } from 'lucide-react';
export default function Hero() {
    const marqueeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const marqueeElement = marqueeRef.current
        if (!marqueeElement) return

        let position = 0
        const speed = 1

        const animate = () => {
            position -= speed
            marqueeElement.style.transform = `translateX(${position}px)`

            if (position <= -1000) {
                position = 0
            }

            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <section className="relative w-full overflow-hidden pt-16 md:pt-24 lg:pt-32 flex flex-col items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-black leading-none text-black opacity-90 md:text-[180px] lg:text-[220px] whitespace-nowrap overflow-hidden">
                <div ref={marqueeRef} className="inline-block">
                    BRONXLARRY BRONXLARRY BRONXLARRY BRONXLARRY
                </div>
            </div>

            <div className="absolute inset-0 z-0 mb-8">
                <Image src="/images/hero6.png" alt="Orange Triangle" width={200} height={200} className="absolute top-[10%] left-[15%]  " />
                <Image src="/images/hero5.png" alt="Teal Star" width={200} height={200} className="absolute top-[10%] right-[15%]" />
                <Image src="/images/hero4.png" alt="Purple Sphere" width={200} height={200} className="absolute top-[45%] left-[10%]  " />
                <Image src="/images/hero3.png" alt="Green Sphere" width={200} height={200} className="absolute top-[45%] right-[10%] " />
                <Image src="/images/hero2.png" alt="Blue Cylinder" width={200} height={200} className="absolute bottom-[-10%] left-[15%]  " />
                <Image src="/images/hero1.png" alt="Yellow Cube" width={200} height={200} className="absolute bottom-[-10%] right-[15%] " />
            </div>

            {/* Profile Content */}
            <div className="relative mt-[-50px] z-10 flex flex-col items-center text-center">
                <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
                    Hi, I&apos;m <span className="italic">Larry</span>!
                </h1>
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">HTML & CSS3 Mastery</p>

                {/* Profile Image */}
                <div className="mb-6 h-60 w-60 overflow-hidden rounded-[32px] bg-[#6366f1] ">
                    <Image
                        src="/images/hero.png"
                        alt="Larry's Profile"
                        width={240}
                        height={240}
                        className="rounded-[32px]"
                    />
                </div>

                {/* Client Count */}
                <div className="mb-6 mt-10 flex items-center gap-2">
                    <div className="flex -space-x-2">
                        <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-background bg-[#f97316] flex items-center justify-center">
                            <Image
                                src="/images/client1.svg"
                                alt="Larry's Profile"
                                width={240}
                                height={240}
                                className="h-8 w-8 text-white" />
                        </div>
                        <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-background bg-[#10b981] flex items-center justify-center">
                            <Image
                                src="/images/client2.svg"
                                alt="Larry's Profile"
                                width={240}
                                height={240}
                                className="h-8 w-8 text-white" />
                        </div>
                        <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-background bg-[#f43f5e] flex items-center justify-center">
                            <Image
                                src="/images/client3.svg"
                                alt="Larry's Profile"
                                width={240}
                                height={240}
                                className="h-8 w-8 text-white" />
                        </div>
                    </div>
                    <span className="text-sm text-muted-foreground">80+ Happy Clients</span>
                </div>

                {/* CTA Button */}
                <Button className="rounded-full bg-white px-8 py-8 border-2 border-black text-black shadow-md hover:bg-gray-100 text-2xl font-bold">
                    Let&apos;s Work Together!
                    <CircleArrowDown size={32} className="!h-14 !w-14 bg-black rounded-full text-white" />

                </Button>
            </div>
        </section>
    )
}

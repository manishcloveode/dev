// CardStack.js component
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CardStack() {
    // Reference to track scroll container
    const containerRef = useRef<HTMLDivElement>(null);

    // Card data array
    const cards = [
        {
            id: 1,
            content: "Greetings! I'm Larry, and I navigate the exciting world of web design, where every pixel serves a purpose. Combining a deep understanding of user experience with a knack for transforming ideas into visually stunning interfaces, I approach each project with a burning passion to craft something truly remarkable.",

        },
        {
            id: 2,
            content: "My web design journey began with a solid foundation in design principles, meticulously honed through years of formal education. I hold a degree in Graphic Design from XYZ University, where I not only acquired technical expertise but also developed a profound appreciation for the beautiful union of aesthetics and functionality.",

        },
        {
            id: 3,
            content: "My tech stack mirrors the vibrant diversity of the web itself. From the core languages of HTML5, CSS3, and JavaScript to an arsenal of design tools like Adobe Creative Suite and Sketch, I stay well-equipped. However, I believe in constantly pushing the boundaries, exploring emerging technologies and design trends to ensure my work remains both timeless and cutting-edge.",

        }
    ];

    return (
        <div className="relative h-[300vh]" ref={containerRef}>

            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="relative w-full max-w-4xl mx-auto">
                    {cards.map((card, index) => (
                        <Card
                            key={card.id}
                            card={card}
                            index={index}
                            containerRef={containerRef as RefObject<HTMLDivElement>}
                            totalCards={cards.length}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

import { RefObject } from "react";

function Card({ card, index, containerRef, totalCards }: { card: any, index: number, containerRef: RefObject<HTMLDivElement>, totalCards: number }) {
    const cardRef = useRef(null);

    // Track scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Define card-specific scroll start & end points
    const cardScrollStart = index / totalCards;
    const cardScrollEnd = (index + 1) / totalCards;

    // Y-axis translation: Makes each card slide in from the bottom
    const y = useTransform(
        scrollYProgress,
        [cardScrollStart, cardScrollEnd],
        [200, 0] // Starts 200px lower, moves to center
    );

    // Opacity transition: Cards fade in and out smoothly
    const opacity = useTransform(
        scrollYProgress,
        [cardScrollStart - 0.05, cardScrollStart, cardScrollEnd, cardScrollEnd + 0.05],
        [0, 1, 1, 0]
    );

    // Scale effect to emphasize the top card
    const scale = useTransform(
        scrollYProgress,
        [cardScrollStart, cardScrollEnd],
        [0.95, 1] // Slightly smaller, then scales up
    );

    // Z-index to control stacking order dynamically
    const zIndex = totalCards - index;

    return (
        <motion.div
            ref={cardRef}
            className={`absolute w-full p-8 rounded-lg shadow-lg ${card.color}`}
            style={{
                y,
                opacity,
                scale,
                zIndex,
                transition: "all 0.3s ease"
            }}
        >
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-2xl text-gray-700">{card.content}</p>
        </motion.div>
    );
}

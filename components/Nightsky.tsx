'use client'
import React from "react";


const NightSky: React.FC = () => {
    return (
        <div className={"nightSky"}>
            {Array.from({length: 20}).map((_, index) => {
                const size = Math.random() * 2 + 1;
                const animationDuration = Math.random() * 3 + 2; // 2-5s random duration
                const moveDuration = Math.random() * 10 + 5; // 5-15s drift effect// Random star size between 1px and 3px
                return (
                    <div
                        key={index}
                        className={"star"}
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                            width: `${size}px`,
                            height: `${size}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${animationDuration}s`,
                        }}
                        ref={(el) => {
                            if (el) {
                                el.style.setProperty('--move-duration', `${moveDuration}s`);
                            }
                        }}
                    />
                );
            })}
        </div>
    );
};

export default NightSky;

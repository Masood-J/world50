"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function LogoAnimate() {
    const logos = ["/logo_06.png","/logo_23.png","/logo_34.png","/logo_96.png","/logo_30.png","/logo_84.png","/logo_36.png","/logo_15.png","/logo_05.png","/logo_03.png","/logo_11.png","/logo_24.png","/logo_02.png","/logo_35.png","/logo_31.png","/logo_72.png","/logo_78.png","/logo_89.png"
    ,"/logo_19.png","/logo_27.png","/logo_41.png","/logo_43.png","/logo_13.png","/logo_09.png"
    ,"/logo_51.png","/logo_67.png","/logo_80.png","/logo_81.png","/logo_90.png","/logo_92.png","/logo_95.png"];

    return (
        <Marquee gradient={false} speed={35}>
            {logos.map((logo, idx) => (
                <div key={idx} style={{ margin: "0 0" }}>
                    <Image src={logo} alt={`logo-${idx}`} width={51} height={51} />
                </div>
            ))}
        </Marquee>
    );
}

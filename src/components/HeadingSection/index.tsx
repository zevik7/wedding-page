"use client";
import React from "react";
import Calendar from "../Calendar";
import Section from "../Section";
import Map from "../GoogleMap";
import Countdown from "../Countdown";
import PrimaryWrapper from "../PrimaryWrapper";
import Image from "next/image";
import { shimmer, toBase64 } from "@/utils";

const HeadingSection = () => {
  return (
    <div>
      <div className="w-full h-40 relative">
        <Image
          fill
          src={`/images/headingImg.webp`}
          alt="Heading image"
          priority
          quality={100}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          className="object-cover relative"
        />
      </div>

      <h1 className="text-3xl font-bold text-center p-4 text-primary">
        THIÊN PHÚ & PHƯƠNG VY
      </h1>
      <p className="m-4 text-xl text text-center italic">December 24, 2023</p>
      <div className="flex justify-center">
        <Countdown />
      </div>
    </div>
  );
};

export default HeadingSection;

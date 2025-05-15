import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import useHostname from "../Provider/HostnameProvider";
import { Container } from "react-bootstrap";
import ItemCard from "./ItemCard";

const WrapHowItWork = () => {
  const items = [
    {
      title: "Initial Consultation & Strategy.",
      desc: `<p class="text__24 opacity-80">
            I begin with a comprehensive consultation to understand your specific needs, whether you're buying or selling. 
            I'll discuss current market conditions, develop a tailored pricing strategy, and clearly explain how my unbeatable 2% commission structure saves you thousands.
          </p>
          <p class="text__24 opacity-80 mt-4">
            My goal is to align with your objectives and set a clear path for success from day one.
          </p>`,
      link: "/contact",
    },
    {
      title: "Listing & Marketing Excellence (For Sellers).",
      desc: `
      <p class="text__24 opacity-80">
            To make your property stand out, I personally handle all professional photography, ensuring your home is showcased in the best possible light. 
            For premium listings, I create a stunning, custom website dedicated solely to your property, providing an immersive experience for potential buyers.
          </p>
      <p class="text__24 opacity-80 mt-4">
          This includes:
          </p>
          <div class="grid grid-cols-1">
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">High-Quality In-House Photography</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Custom Property Website (Premium Listings)</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Targeted Online & Offline Marketing</p>
            </div>
          </div>`,
      link: "/contact",
    },
    {
      title: "Property Search & Negotiation (For Buyers).",
      desc: `
        <p class="text__24 opacity-80">
   For buyers, I provide a curated selection of properties that match your criteria and preferences. I'll arrange viewings and provide expert advice every step of the way. 
   When you find the right home, I'll leverage my negotiation skills to secure the best possible terms and price on your behalf.
          </p>
      <p class="text__24 opacity-80 mt-4">
          My buyer services feature:
          </p>
          <div class="grid grid-cols-1">
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Personalized Property Shortlisting</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Skilled Offer Negotiation</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Access to Off-Market Deals</p>
            </div>
          </div>`,
      link: "/contact",
    },
    {
      title: "Seamless Closing Process.",
      desc: `
        <p class="text__24 opacity-80">
 I guide you through all the paperwork, legalities, and coordination with lenders, inspectors, and other parties involved. 
 My aim is to make the closing process as smooth and stress-free as possible for you.
          </p>
      <p class="text__24 opacity-80 mt-4">
          I ensure:
          </p>
          <div class="grid grid-cols-1">
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Thorough Document Review</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Coordination with All Stakeholders</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Timely Updates & Communication</p>
            </div>
          </div>`,
      link: "/contact",
    },
    {
      title: "Your Success, My Priority (at 2%!).",
      desc: `
        <p class="text__24 opacity-80">
With my low 2% commission, you save significantly without compromising on service or results. My in-house photography and custom websites for premium listings are all part of providing exceptional value.
          </p>
      <p class="text__24 opacity-80 mt-4">
         Choosing me means:
          </p>
          <div class="grid grid-cols-1">
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Maximum Savings with a 2% Fee</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Dedicated, Personalized Service</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-[8px] h-[8px] rounded-full bg-Mneutral_900"></div>
              <p class="text__24">Achieving Your Property Goals Efficiently</p>
            </div>
          </div>`,
      link: "/contact",
    },
  ];

  return (
    <section>
      <Container>
        <h5 className="text__24 opacity-40 mb-[48px] md:mb-[68px] lg:mb-[140px]">
          HOW I WORK
        </h5>
      </Container>
      <div>
        {items.map((obj, idx) => (
          <ItemCard key={idx} idx={idx} obj={obj} />
        ))}
      </div>
    </section>
  );
};

export default WrapHowItWork;

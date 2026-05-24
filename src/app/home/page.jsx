"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import herobg from "@/assets/hero-bg.png"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto px-6 py-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Boi Bondhu - Your Ultimate Book Haven!
        </h1>
        <p className="text-lg mb-2">
          Discover, share, and connect with fellow book lovers. Explore our vast
          collection, join our vibrant community, and let your literary journey
          begin!
        </p>
        <p className="text-xl font-semibold mb-6">
          Find your Next Read
        </p>
        <Button>Browse Now</Button>
      </div>
       <div>
              <Image src={herobg} alt="Hero Background" width={700} height={700} />
       </div>
    </div>
  );
};



export default HomePage

"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import herobg from "@/assets/hero-bg.png"
import {BookOpen} from '@gravity-ui/icons';
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
    <div >
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
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
        <Button><BookOpen /> Browse Now</Button>
      </div>
       <div>
              <Image src={herobg} alt="Hero Background" width={700} height={700} />
       </div>
       </div>
       <div className="max-w-7xl mx-auto px-6 py-12 mt-16">
        <h2 className=" text-2xl font-bold text-center mb-6">Top Featured Books</h2>
        <p className="text-center text-gray-600 mb-3">
          Explore our handpicked selection of top featured books that are sure to
          captivate your imagination and enrich your reading experience.
        </p>
       </div>
    </div>
  );
};



export default HomePage

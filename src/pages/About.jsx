import React from "react";

const About = () => {
  return (
    <div className="mx-auto max-w-5xl p-6 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold text-blue-800 text-center">About Us</h1>
      
      <p className="mt-6 text-gray-800 text-lg">
        Welcome to <span className="font-bold">VyaparSetu</span>, your gateway to connect foreign importers with small-scale businesses across India. Our platform is dedicated to bridging the gap between the international market and Indian artisans, entrepreneurs, and small-scale manufacturers.
      </p>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-orange-500">Our Mission</h2>
          <p className="mt-2 text-gray-700">
            At VyaparSetu, we aim to empower small-scale businesses in India by providing them with an opportunity to access foreign markets. Our mission is to create a platform that simplifies the process of international trade for Indian businesses, enabling them to showcase their products globally and connect with trusted importers worldwide.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-orange-500">What We Offer</h2>
          <ul className="mt-2 text-gray-700 space-y-2 list-disc list-inside">
            <li>Comprehensive product listings to showcase a wide range of products made by Indian artisans and small businesses.</li>
            <li>Direct connection with verified foreign importers seeking unique products from India.</li>
            <li>Insightful resources, such as information on Goods & Services Tax (GST), Export & Import Policies, and Trade Rates.</li>
            <li>Secure communication channels between importers and exporters.</li>
            <li>Regular updates and alerts on trade regulations and market trends.</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-orange-500">Why Choose VyaparSetu?</h2>
        <p className="mt-2 text-gray-700">
          VyaparSetu is not just a platform; it’s a movement to support and uplift the small businesses in India. We understand the unique challenges faced by small-scale businesses and work tirelessly to provide a seamless experience in connecting them with reliable importers. Our platform is trusted, secure, and designed to help businesses grow beyond borders.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Our Core Values</h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li><span className="font-semibold">Transparency:</span> We prioritize honesty and clarity in our operations, building trust with our clients and partners.</li>
          <li><span className="font-semibold">Empowerment:</span> Our platform is built to empower small-scale businesses by providing them access to international trade.</li>
          <li><span className="font-semibold">Integrity:</span> We are committed to maintaining the highest standards of integrity in all our transactions and interactions.</li>
          <li><span className="font-semibold">Community:</span> We believe in building a community of entrepreneurs who can support each other and grow together.</li>
        </ul>
      </div>

      <div className="mt-8 bg-blue-100 p-4 rounded-md text-center">
        <p className="text-lg text-blue-800 font-medium">
          Join us on this journey to make Indian products known to the world and empower small businesses to reach new heights. At VyaparSetu, we are connecting India to the global market, one business at a time.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl flex flex-col md:flex-row p-8">
     
        <div className="flex-1 py-10 mb-6 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Welcome To Our Website
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Contact Us
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/abstract-design.png"
            alt="Abstract Design"
            width={502}
            height={465}
            className="rounded-lg w-[502] h-[465] "
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from 'react';
import { Image } from '@nextui-org/react';

export default function ImageSection() {
  return (
    <div className="flex justify-center bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
        <div className="relative">
          <Image
            className="h-auto max-w-full rounded-lg hover:filter hover:brightness-75 transition duration-300"
            src="foto6.jpg"
            alt="Imagen 1"
          />
        </div>
        <div className="relative">
          <Image
            className="h-auto max-w-full rounded-lg hover:filter hover:brightness-75 transition duration-300"
            src="foto6.jpg"
            alt="Imagen 2"
          />
        </div>
        <div className="relative">
          <Image
            className="h-auto max-w-full rounded-lg hover:filter hover:brightness-75 transition duration-300"
            src="header.jpg"
            alt="Imagen 3"
          />
        </div>
        <div className="relative">
          <Image
            className="h-auto max-w-full rounded-lg hover:filter hover:brightness-75 transition duration-300"
            src="foto5.jpeg"
            alt="Imagen 4"
          />
        </div>
      </div>
    </div>
  );
}

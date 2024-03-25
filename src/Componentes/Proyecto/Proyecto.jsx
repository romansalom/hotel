import React from 'react';

const ResponsiveImageTextComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src="header.jpg" className="w-full md:w-1/2 object-cover" />
      <div className="text-center md:text-left md:ml-4">
        <p className="text-lg md:text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          explicabo, fugiat neque voluptatum eos nobis aspernatur eius
          architecto hic sequi debitis eveniet sunt placeat officia atque quia
          non! Ut, magni.
        </p>
      </div>
    </div>
  );
};

export default ResponsiveImageTextComponent;

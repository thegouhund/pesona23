import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h1 class="mb-10 text-3xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-5xl text-center">
        {children}
      </h1>
    </div>
  );
};

export default Title;

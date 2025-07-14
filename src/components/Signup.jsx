import React from 'react';

const Signup = () => {
  return (
    <div className="w-full flex flex-col md:flex-row max-w-7xl mx-auto my-10 shadow-md rounded-md overflow-hidden">
      
      {/* LEFT SIDE - Background Image */}
      <div
        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
        style={{
          backgroundImage: "url('/login-image.jpg')", // Place image in /public folder
        }}
      ></div>

      {/* RIGHT SIDE - Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Create an account</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-300 py-2 mb-4 focus:outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Email or Phone Number"
            className="w-full border-b border-gray-300 py-2 mb-4 focus:outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-b border-gray-300 py-2 mb-6 focus:outline-none focus:border-black"
          />

          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 mb-4">
            Create Account
          </button>

          <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span>Sign up with Google</span>
          </button>

          <p className="text-sm text-center text-gray-600 mt-6">
            Already have account? <a href="#" className="text-gray-900 underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

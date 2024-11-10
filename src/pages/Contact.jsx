import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-[550px]">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          Contact Us
        </h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Website</h3>
          <p className="text-blue-600 underline">
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
              www.yourwebsite.com
            </a>
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Phone Number</h3>
          <p className="text-gray-600">+1 (123) 456-7890</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Email</h3>
          <p className="text-blue-600 underline">
            <a href="mailto:contact@yourwebsite.com">
              contact@yourwebsite.com
            </a>
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Address</h3>
          <p className="text-gray-600">
            1234 Business St., Suite 567 <br />
            City, State, ZIP <br />
            Country
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            We’re here to help! Reach out to us via any of the contact methods above.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
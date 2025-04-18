/*import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

function DonationPage() {
  let [donationAmount, setDonationAmount] = useState('')
  let [message, setMessage] = useState('')

  let handleDonation = () => {
    if (donationAmount) {
      setMessage(`Thanks for your donation of $${donationAmount} USD!`)
      Swal.fire({
        title: "Donation Sent Successfully!",
        text: "The amount of " + donationAmount + " USD has been sent successfully to our organization. Thank you for your support!",
        icon: "success"
      })
      setDonationAmount('')
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter a donation amount, please"
      })
    }
  }

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-5">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-500 mb-7">Make a Donation</h1>
      <p className="text-gray-700 mb-6 m-1 lg:text-lg xl:text-xl">Your support is essential for our project. Thank you for your generosity!</p>

      <div className="w-full max-w-md p-6 bg-white border border-gray-200 shadow-md rounded-lg">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donation">
          Amount to Donate (USD):
        </label>
        <input
          type="number"
          id="donation"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Enter donation amount"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          onClick={handleDonation}
          className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Send Donation
        </button>

        {message && <p className="mt-4 text-green-500 font-semibold">{message}</p>}
      </div>

      <NavLink className="mt-6 text-orange-500 hover:underline" to="/home">Go to Home Page</NavLink>
    </div>
    
  )
}


export default DonationPage*/


import React from "react";
import StripeCheckout from "./StripeCheckout";

function DonationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-5">
      <h1 className="text-3xl font-bold text-orange-500 mb-7">Make a Donation</h1>
      <p className="text-gray-700 mb-6">Your support is essential for our project. Thank you for your generosity!</p>

      <StripeCheckout />

    </div>
  );
}

export default DonationPage;
"use client";

import React from "react";
import { useState } from "react";

export default function CustomerFields({ form, handleChange }) {
  return (
    <div className=" text-black font-mono text-base tracking-wide flex flex-col gap-4 w-full p-4 bg-white my-4 rounded-md shadow-md">
      <div className="align-start flex gap-x-4 flex-col">
        <label htmlFor="name" className="mb-.5">
          Name
        </label>
        <input
          className="bg-zinc-200 rounded-lg p-3 focus:border focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-.75 focus:ring-blue-300 mb-2"
          type="text"
          name="name"
          id="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
        />
        <label htmlFor="email" className="mb-.5">
          Email
        </label>
        <input
          className="bg-zinc-200 rounded-lg p-3 focus:border focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-.75 focus:ring-blue-300 mb-2"
          type="email"
          name="email"
          id="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
        <label htmlFor="phone" className="mb-.5">
          Phone
        </label>
        <input
          className="bg-zinc-200 rounded-lg p-3 focus:border focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-.75 focus:ring-blue-300 mb-2"
          type="tel"
          name="phone"
          id="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (777) 777-7777"
        />
        <label htmlFor="address" className="mb-.5">
          Installation/Delivery Address
        </label>
        <input
          className="bg-zinc-200 rounded-lg p-3 focus:border focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-.75 focus:ring-blue-300"
          type="text"
          name="address"
          id="address"
          required
          value={form.address}
          onChange={handleChange}
          placeholder="Street address"
        />
        <label htmlFor="address" className="mb-.5">
city        </label>
        <input
          className="bg-zinc-200 rounded-lg p-3 focus:border focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-.75 focus:ring-blue-300"
          type="text"
          name="city"
          id="city"
          required
          value={form.city}
          onChange={handleChange}
          placeholder="city"
        />
        <label htmlFor="state" className="mb-.5">
State        
</label>
        <input
          className="bg-zinc-200 rounded-lg p-3 focus:border focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-.75 focus:ring-blue-300"
          type="text"
          name="state"
          id="state"
          required
          value={form.state}
          onChange={handleChange}
          placeholder="State"
        />
        <label htmlFor="postalCode" className="mb-.5">
          Postal Code
        </label>
        <input
          className="bg-zinc-200 rounded-lg p-3 focus:border focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-.75 focus:ring-blue-300"
          type="text"
          name="postalCode"
          id="postalCode"
          required
          value={form.postalCode}
          onChange={handleChange}
          placeholder="postal code"
        />
      </div>
    </div>
  );
}

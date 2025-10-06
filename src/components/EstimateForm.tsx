// Ensure the submit button stays inside and aligns correctly on tablet
import React from "react";

export default function EstimateForm() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border px-4 sm:px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        <div className="md:col-span-4">
          <p className="text-slate-900 font-extrabold text-lg leading-tight">
            Get Your Free
            <br className="sm:hidden" />
            <span className="ml-0 md:ml-2">Moving Estimate</span>
            <span className="block md:inline ml-0 md:ml-2">Here</span>
          </p>
        </div>

        <div className="md:col-span-3">
          <label className="text-xs text-slate-500">Current Zip/Postal Code</label>
          <input
            className="mt-1 w-full h-11 rounded-lg border px-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter current"
          />
        </div>

        <div className="md:col-span-3">
          <label className="text-xs text-slate-500">New Zip/Postal Code</label>
          <input
            className="mt-1 w-full h-11 rounded-lg border px-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter new zip"
          />
        </div>

        <div className="md:col-span-2 flex md:justify-end">
          <button className="w-full md:w-auto h-11 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold px-6">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

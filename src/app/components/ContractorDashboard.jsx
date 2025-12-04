"use client";

// import supabase from "/utils/supabaseClient";

import { useState, useEffect } from "react";

const ContractorDashBoard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await await supabase.from("leads").select();

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setLeads(data);
      }
      setLoading(false);
    };
    fetchLeads();
  }, []);

  return (
    <section>
      <div className="bg-white text-white text-md p-20">
        <h1 className="text-white mb-5">Contractor Dashboard</h1>
        {loading && <div>Loading leads...</div>}
        <ul>
          {leads.map((lead) => (
            <li
              key={lead.id}
              className="bg-blue-500 p-6 flex items-center justify-between gap-4 mb-4"
            >
              {lead.first_name} {lead.last_name} - {lead.email} - {lead.phone}
              <div className="inline">
                <button className="bg-zinc-700 p-2">Generate Quote</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContractorDashBoard;

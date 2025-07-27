"use client";

import AddHoopImages from "../components/AddHoopImages";
import { useSearchParams } from "next/navigation";
import supabase from "../../../utils/supabaseClient";

const hoopImageUploader = () => {
  const searchParams = useSearchParams();
  const fromId = searchParams.get("from");

  return (
    <section>
      <AddHoopImages id={fromId} />
    </section>
  );
};

export default hoopImageUploader;

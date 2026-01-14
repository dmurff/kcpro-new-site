export const dynamic = "force-dynamic";

import createSupabaseServer from "./../../lib/supabase/server";
import EditHoopList from "../components/EditHoopList";
import updateHoop from "./actions";

const updateHoopPage = async () => {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from("hoops").select("*");

  // const response = data.json();

  console.log(data);
  return (
    <>
      <EditHoopList hoops={data} action={updateHoop} />
    </>
  );
  // return <EditHoopList model={model} />;
};

export default updateHoopPage;

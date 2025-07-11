const InfoBox = ({ title }) => {
  return (
    <>
      <h1 className="text-black text-2xl text-center m-6">{title}</h1>
      <div className=" bg-slate-200  p-10 m-10 shadow-sm rounded-md max-w-4x mx-auto">
        <p className="text-slate-700 text-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </>
  );
};

export default InfoBox;

const InfoBox = ({ title }) => {
  return (
    <>
      <h1 className="text-black text-2xl text-center m-6">{title}</h1>
      <div className=" bg-blue-100  p-10 m-10 shadow-sm rounded-md">
        <p className="text-gray-600 text-2xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </>
  );
};

export default InfoBox;

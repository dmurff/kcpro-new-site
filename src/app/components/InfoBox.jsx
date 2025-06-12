const InfoBox = ({height= "h-100vh" ,grid="grid grid-cols-2"}) => {
    return (
        <div className={`${grid} bg-white`} >
            
            <div className=" bg-blue-200  p-10 m-10 shadow-lg rounded-md"><p className="text-gray-600 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p></div>
            <div className=" bg-blue-200  p-10 m-10 shadow-lg rounded-md"><p className="text-gray-600 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p></div>

        </div>
    )
}

export default InfoBox;
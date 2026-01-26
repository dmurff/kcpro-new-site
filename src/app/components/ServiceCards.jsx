// import Link from "next/link";

export default function ServicesCards({ services, handleClick, selectedServices, }) {

console.log('SERVICES::::::',services)


 
    const handleChange = (s) => {
    // const newChecked = e.target.checked; // true/false

    const wasSelected = !!selectedServices[s.name];
const nextSelected = !wasSelected;




    console.log(s.name, "🔨🔨")

    

    handleClick(s.name, s.price, nextSelected); // sends info up
  };


  return (
    <div className="grid grid-cols-3 gap-4">
            {services.map((s) => {
          // 1. compute booleans FIRST (plain JS, not JSX)
  const installationSelected = Object.hasOwn(selectedServices, 'installation');
  const concreteSelected = Object.hasOwn(selectedServices, 'hoop_concrete');
  const assemblySelected = Object.hasOwn(selectedServices, 'hoop_assembly');

  // 2. derive disabled as ONE boolean expression
  const disabled =
    (installationSelected && (s.name === 'hoop_concrete' || s.name === 'hoop_assembly')) ||
    (concreteSelected && (s.name === 'installation' || s.name === 'hoop_assembly')) ||
    (assemblySelected && (s.name === 'installation' || s.name === 'hoop_concrete'));

    let discount = 0
     {if(s.name === 'hoop_concrete' || s.name === 'hoop_assembly') {
        discount = 100;
     }
    else if ( s.name === 'installation'){
        discount = 200;
    }}
    
const finalPrice = s.price - discount;
  // 3. return JSX that USES the value      



            return (  <button
                key={s.id}
                // className={ selectedServices[s.name] ? 'flex gap-x-4 rounded-xl bg-black/90 text-white p-6 ring-1 ring-gray-900/5 backdrop-blur-sm hover:ring-orange-400 shadow-lg shadow-black/20 hover:shadow-orange-500/30' : "flex gap-x-4 rounded-xl bg-gray-200/30 p-6 ring-1 ring-gray-900/5 backdrop-blur-sm hover:ring-orange-400 shadow-lg shadow-black/20 hover:shadow-orange-500/30"}
               
               className={
        selectedServices[s.name]
          ? 'flex gap-x-4 rounded-xl bg-black/80 text-white p-6'
          : 'flex gap-x-4 rounded-xl bg-gray-200/30 p-6'
      }
                onClick={()=> handleChange(s)}
                disabled={disabled}

            
                
              >
                <div className="text-sm">
                    
                    {selectedServices[s.name] && <h3 className='font-semibold text-white'>{s.display_name}</h3>}
                  
                  {!selectedServices[s.name] && <h3 
                  
                  className="font-semibold text-gray-900">
                    {s.display_name}
                  </h3>}
                                   {selectedServices[s.name] && <p className="mt-2 text-white">${finalPrice}</p>} 
                                   {!selectedServices[s.name] && <p className="mt-2 text-gray-700">${finalPrice}</p>} 

                  {/* <p className="mt-2 text-gray-700">{s.display_name}</p>
                  <p className="mt-2 text-gray-700">${s.price}</p>
                  <p className="mt-2 text-sm/6 font-semibold text-gray-400 hover:text-gray-950">
                    Learn more <span aria-hidden="true">→</span>
                  </p> */}
                  {/* THE RED MESSAGE: Shown only when disabled */}
              {disabled && (
                <p className="mt-2 text-xs font-medium text-red-600">
                  Not compatible with current selection
                </p>
              )}

              {!disabled && selectedServices[s.name] && (
                <p className="mt-2 text-xs font-semibold text-gray-400">
                  Service Added
                </p>
              )}
              {!selectedServices[s.name] && !disabled &&(
                <p className="mt-2 text-xs font-semibold text-gray-400">
                  Add Service
                </p>
              )}
             
                </div>
              </button>
);
})}
       </div>     
  );
}

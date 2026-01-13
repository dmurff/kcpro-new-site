import Link from "next/link";

export default function AboutContent() {
  return (
    // < className="relative isolate overflow-hidden bg-black/80 py-24 sm:py-32">
    
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <img
          alt=""
          src="/images/services_hero.png"
          className="absolute inset-0 -z-10 size-full object-cover object-right opacity-0 md:object-center"
        />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-gray-400 to-gray-600/70 opacity-15"
          />
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-bg-gray-400 to-gray-600 opacity-15"
          />
        </div>
            <section className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-16">
            <h2 className="text-4xl text-gray-900 mb-8">Basketball hoop experts in Kansas City</h2>
           
            <p className="text-base/7 text-gray-900">
              We have been selling and installing in ground basketball hoops since 2010. Our mission is to provide great service and a seamless, fast experience. Our knowledgable techs ask the questions that matter so we can tailor each project to your specific needs.
            </p>
</div>
            <h2 className="text-4xl text-gray-900 mb-8">The KC Pro Way</h2>
           
            <p className="text-base/7 text-gray-900">
            We understand that you are busy. Our approach is transparent and efficent. From the beginning we aim for clarity and communication. We post our pricing up front to save you time. When you buy a hoop or book a service we email and text information on what comes next. You are instantly placed in a queue by order of when you booked. 
            </p>
            {/* <div/> */}
          
      </section>
          
       </div>
    
  );
}

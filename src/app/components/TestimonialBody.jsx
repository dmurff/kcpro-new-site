import { FcGoogle } from "react-icons/fc";
import { StarIcon } from "@heroicons/react/20/solid";

const featuredTestimonial = {
  body: "These guys did a great job. They inspected our driveway and made the perfect recommendation for a goal. They even showed us a picture gallery of their installations of the goal we purchased so we could see what the goal would look like. We bought the goal and they took care of everything else. The install was done carefully and professionally. A quality goal costs a little more but if you want a solid, sturdy, professional level goal you will absolutely get that with these guys.",
  author: {
    name: "Brian Johnson",
    // handle: "brennagoyette",
    imageUrl: "/images/brianJohnson.png",
  },
};
const testimonials = [
  [
    [
      {
        body: "I contacted David to install a basketball goal I bought from a store in Olathe. He delivered the goal and installed it in my driveway. He was very professional and responsive throughout the process and the job was done well. I would recommend him to anyone. Thanks for being a pleasure to work with.",
        author: {
          name: "Nick Collison",
          //   handle: "lesliealexander",
          imageUrl: "/images/N-name-tag.png",
        },
      },
      {
        body: "We just had a new basketball goal installed and are very pleased with KC Pro Assembly. I talked with David over the phone and he helped us determine the best goal for our space, budget, and needs. We ordered the goal through KC Pro Assembly and they handled the installation seamlessly and professionally. We would definitely use KC Pro Assembly again in the future.",
        author: {
          name: "Robyn McGee",
          //   handle: "michaelfoster",
          imageUrl: "/images/R-name-tag.png",
        },
      },
      {
        body: "Outstanding Service. They installed a quality basketball goal in our driveway and handled the utilities, digging the hole, pouring the foundation and installing the goal. For a stress free experience, hire these guys! Highly recommended!",
        author: {
          name: "Brandon LaBarge",
          //   handle: "driesvincent",
          imageUrl: "images/trainStation.png",
        },
      },
    ],
    [
      {
        body: "Really impressed with KC Pro Assembly. The basketball goal we had had for years rusted and was about to fall over. I met David and was very impressed with his knowledge about our needs. We purchased the Ironclad Triple Threat 60, and it is perfect.",
        author: {
          name: "Karen Dillon",
          //   handle: "lindsaywalton",
          imageUrl: "images/karen-dillon.jpg",
        },
      },
      {
        body: "David with KC Pro Assembly installed a replacement backboard and hoop for us. He was efficient with his time and did a super job on the install. Thanks David!",
        author: {
          name: "Ben Warner",
          //   handle: "courtneyhenry",
          imageUrl: "images/benW.png",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Would absolutely recommend KC Pro Assembly! They installed a basketball goal for us and did a great job. No hiccups or delays, very smooth and easy process. David and his team were great to work with.",
        author: {
          name: "KRK Watson",
          //   handle: "tomcook",
          imageUrl: "images/K-name-tag.png",
        },
      },
      {
        body: "Super easy to work everything out quickly over text and then phone if needed. Great crews out to pour the concrete and then install once that was dried. Would recommend to anyone in KC area. My son has been throwing down sick dunks all day.",
        author: {
          name: "Jeff Holman",
          //   handle: "whitneyfrancis",
          imageUrl: "images/J-name-tag.png",
        },
      },
    ],
    [
      {
        body: "David did a great job on the installation. He came out late and got the goal installed after a scheduling issue. My kids appreciated it!",
        author: {
          name: "Michael Wondra",
          //   handle: "leonardkrasner",
          imageUrl: "images/M-name-tag.png",
        },
      },
      {
        body: "Did a fantastic job of setting up our basketball goal. Really appreciate their speed and professionalism.",
        author: {
          name: "Soren Petro",
          //   handle: "floydmiles",
          imageUrl: "images/soren-petro.png",
        },
      },
      {
        body: "David was great to work with. I believe we had a challenging installation in the winter and putting it through concrete pavers. They did not charge me extra and did an excellent job. They know how to install basketball goals better than you. They`re worth the money.",
        author: {
          name: "P K",
          //   handle: "emilyselman",
          imageUrl: "images/P-name-tag.png",
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-blue-600 to-blue-300"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-blue-600 to-blue-300 xl:mr-[calc(50%-12rem)] xl:ml-0"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-orange-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            We've worked with hundreds of amazing people in Kansas City.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold text-gray-900">
                  {featuredTestimonial.author.name}
                </div>
                <div className="flex gap-1 h-4 text-yellow-500 text-gray-600">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              {/* <img
                alt=""
                src={featuredTestimonial.author.logoUrl}
                className="h-10 w-auto flex-none"
              /> */}
              <FcGoogle className="h-10 w-auto flex-none" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8",
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.name}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          alt=""
                          src={testimonial.author.imageUrl}
                          className="size-10 rounded-full bg-gray-50"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.author.name}
                          </div>
                          <div className="flex gap-1 h-4 text-yellow-500 text-gray-600">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

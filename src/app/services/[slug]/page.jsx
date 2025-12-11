import { fetchServiceBySlug } from "../../../../lib/data/service";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";

const serviceDetails = [
  {
    description:
      "A full install is exactly what is sounds like. We handle every aspect of your hoop installation. Below we break everything down so you know what to expect.",
  },
];

export default async function ServicePage({ params }) {
  const slug = params.slug;
  const service = await fetchServiceBySlug(slug);

  const pageTitle = service.display_name;
  return (
    <>
      {/* <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32"> */}
      <div className="relative isolate py-6 sm:py-16">
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
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-bg-gray-300 to-gray-600 opacity-15"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl lg:mx-0"></div> */}
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div>
              {/* tailwindUI snippet */}
              <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <p className="text-base/7 font-semibold text-black/80">
                  {service.display_name}
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  {`${pageTitle}`} Services in Kansas City
                </h1>
                <p className="mt-6 text-xl/8">{serviceDetails.description}</p>
                <div className="mt-10 max-w-2xl text-gray-600">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <ul
                    role="list"
                    className="mt-8 max-w-xl space-y-8 text-gray-600"
                  >
                    <li className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Data types.
                        </strong>{" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Loops.
                        </strong>{" "}
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-indigo-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Events.
                        </strong>{" "}
                        Ac tincidunt sapien vehicula erat auctor pellentesque
                        rhoncus. Et magna sit morbi lobortis.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                  <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    From beginner to expert in 3 hours
                  </h2>
                  <p className="mt-6">
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                    consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                    euismod vitae interdum mauris enim, consequat vulputate
                    nibh. Maecenas pellentesque id sed tellus mauris, ultrices
                    mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam
                    sed nullam sed diam turpis ipsum eu a sed convallis diam.
                  </p>
                  <figure className="mt-10 border-l border-indigo-600 pl-9">
                    <blockquote className="font-semibold text-gray-900">
                      <p>
                        "David was great to work with. I believe we had a
                        challenging installation in the winter and putting it
                        through concrete pavers. They did not charge me extra
                        and did an excellent job. They know how to install
                        basketball goals better than you. They’re worth the
                        money."
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex gap-x-4">
                      <img
                        alt=""
                        src="/images/gc60pavers.png"
                        className="size-6 flex-none rounded-full bg-gray-50"
                      />
                      <div className="text-sm/6">
                        <strong className="font-semibold text-gray-900">
                          PK
                        </strong>{" "}
                        – Google Review
                      </div>
                    </figcaption>
                  </figure>
                  <p className="mt-10">
                    David was great to work with. I believe we had a challenging
                    installation in the winter and putting it through concrete
                    pavers. They did not charge me extra and did an excellent
                    job. They know how to install basketball goals better than
                    you. They’re worth the money.
                  </p>
                </div>
                <figure className="mt-16">
                  <img
                    alt=""
                    src="/images/gc60pavers.png"
                    className="aspect-video rounded-xl bg-gray-50 object-contain"
                  />
                  <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
                    <InformationCircleIcon
                      aria-hidden="true"
                      className="mt-0.5 size-5 flex-none text-gray-300"
                    />
                    Faucibus commodo massa rhoncus, volutpat.
                  </figcaption>
                </figure>
                <div className="mt-16 max-w-2xl text-gray-600">
                  <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    Everything you need to get up and running
                  </h2>
                  <p className="mt-6">
                    Purus morbi dignissim senectus mattis adipiscing. Amet,
                    massa quam varius orci dapibus volutpat cras. In amet eu
                    ridiculus leo sodales cursus tristique. Tincidunt sed tempus
                    ut viverra ridiculus non molestie. Gravida quis fringilla
                    amet eget dui tempor dignissim. Facilisis auctor venenatis
                    varius nunc, congue erat ac. Cras fermentum convallis quam.
                  </p>
                  <p className="mt-8">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit.
                  </p>
                </div>
              </div>
              {/* tailwindUI snippet */}

              <Link
                href="#"
                className="bg-orange-400 hover:bg-orange-500 shadow-lg transition-all duration-1.5 ease-in-out"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

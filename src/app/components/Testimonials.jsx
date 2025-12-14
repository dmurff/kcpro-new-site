import { StarIcon } from "@heroicons/react/20/solid";

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-yellow-400">
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
        </div>
        <blockquote className="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
          <p>
            “KC Pro Assembly did an amazing job installing our baseball goal.
            They make arrangements for the utilities to be marked. Called me to
            let me know when they would be out to dig the hole, pour the
            concrete and once it cured they were out to finish the installation.
            The guys cleaned up and ensured no damage was done to the rest of
            the lawn. I wasn't home when they finished up and they even sent a
            picture of the complete job. Highly recommend them.”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          {/* <img
            alt=""
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
            className="size-12 rounded-full bg-gray-50"
          /> */}
          <div className="text-sm/6">
            <div className="font-semibold text-gray-900">Mike & Amy Fields</div>
            <div className="mt-0.5 text-gray-600">Google Review</div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

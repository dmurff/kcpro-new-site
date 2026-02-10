import Link from "next/link";

export default function PrivacyContent() {
  return (
    <div className="relative isolate overflow-hidden bg-white lg:py-0 mt-0">
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
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-gray-400 to-gray-600 opacity-10"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-bg-gray-400 to-gray-600 opacity-10"
        />
      </div>
      <section className="flex flex-col items-start justify-center mt-24 py-8 lg:py-24 mb-16 p-4 lg:p-8">
        <div className="max-w-[860px] mx-auto my-8 px-4 font-sans leading-relaxed text-[#222]">
          <h1 className="text-[2rem] leading-[1.25] mb-1 font-bold">
            Privacy Policy
          </h1>
          <p className="text-[#666] text-[0.95rem]">
            Last updated: February 10, 2026
          </p>

          <p className="mt-4">
            KC Pro Assembly respects your privacy. This Privacy Policy explains
            how we collect, use, and protect your information when you use our
            website, request a quote, schedule an installation, or communicate
            with us.
          </p>

          <hr className="border-0 border-t border-[#e6e6e6] my-8" />

          <h2
            className="text-2xl leading-[1.25] mt-8 font-bold"
            id="information-we-collect"
          >
            1) Information We Collect
          </h2>
          <ul className="ml-5 list-disc mt-2 space-y-2">
            <li>
              <strong>Contact &amp; service details:</strong> name, phone
              number, email address, service address, project details, and
              preferences you provide in forms or by phone/text.
            </li>
            <li>
              <strong>Payment information:</strong> processed securely by our
              payment provider (e.g., Stripe). We do not store full card numbers
              on our servers.
            </li>
            <li>
              <strong>Communications:</strong> messages you send to us (email,
              SMS) and our responses.
            </li>
            <li>
              <strong>Usage data:</strong> basic analytics such as pages viewed,
              device/browser info, and referral source collected via cookies or
              similar technologies.
            </li>
          </ul>

          <h2
            className="text-2xl leading-[1.25] mt-8 font-bold"
            id="how-we-use"
          >
            2) How We Use Information
          </h2>
          <ul className="ml-5 list-disc mt-2 space-y-2">
            <li>
              Provide quotes, schedule services, perform installations, and
              deliver customer support.
            </li>
            <li>
              Send <strong>transactional</strong> updates (e.g., appointment
              confirmations, schedule changes, job status notifications, and
              receipts).
            </li>
            <li>
              Maintain safety, prevent fraud/abuse, and comply with legal
              obligations.
            </li>
            <li>Improve our website and services.</li>
          </ul>

          <h2
            className="text-2xl leading-[1.25] mt-8 font-bold"
            id="sms-consent"
          >
            3) Text Messaging (SMS) Consent
          </h2>
          <p className="mt-2">
            By providing your phone number, you agree to receive service-related
            text messages from KC Pro Assembly. Message &amp; data rates may
            apply. You may opt out at any time by replying <strong>STOP</strong>
            ; for assistance, reply <strong>HELP</strong>. Our disclosure is
            available at{" "}
            <Link href="/sms-consent" className="text-[#0a66c2] underline">
              kcproassembly.com/sms-consent
            </Link>
            .
          </p>

          <h2 className="text-2xl leading-[1.25] mt-8 font-bold" id="cookies">
            4) Cookies &amp; Analytics
          </h2>
          <p className="mt-2">
            We may use cookies and similar technologies to operate our site and
            understand usage. You can control cookies through your browser
            settings; disabling some cookies may affect site functionality.
          </p>

          <h2 className="text-2xl leading-[1.25] mt-8 font-bold" id="sharing">
            5) How We Share Information
          </h2>
          <p className="mt-2">
            We do <strong>not</strong> sell your personal information. We may
            share limited data with trusted service providers who help us
            operate our business (e.g., scheduling, payment processing, SMS
            delivery) under contracts that require them to protect your
            information and use it only for our purposes. We may also share
            information if required by law or to protect our rights, users, or
            the public.
          </p>

          <h2 className="text-2xl leading-[1.25] mt-8 font-bold" id="retention">
            6) Data Retention
          </h2>
          <p className="mt-2">
            We keep personal information only as long as necessary to provide
            services, meet legal/administrative requirements, and resolve
            disputes. When no longer needed, we delete or anonymize it.
          </p>

          <h2 className="text-2xl leading-[1.25] mt-8 font-bold" id="security">
            7) Security
          </h2>
          <p className="mt-2">
            We use reasonable administrative, technical, and physical safeguards
            to protect personal information. However, no method of transmission
            or storage is 100% secure.
          </p>

          <h2
            className="text-2xl leading-[1.25] mt-8 font-bold"
            id="your-rights"
          >
            8) Your Choices &amp; Rights
          </h2>
          <ul className="ml-5 list-disc mt-2 space-y-2">
            <li>Update or delete your information by contacting us.</li>
            <li>
              Opt out of SMS at any time by replying <strong>STOP</strong>.
            </li>
            <li>Opt out of non-essential cookies via your browser settings.</li>
          </ul>

          <h2 className="text-2xl leading-[1.25] mt-8 font-bold" id="children">
            9) Children’s Privacy
          </h2>
          <p className="mt-2">
            Our services are not directed to children under 13, and we do not
            knowingly collect personal information from them.
          </p>

          <h2 className="text-2xl leading-[1.25] mt-8 font-bold" id="changes">
            10) Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Changes are
            effective when posted here with the “Last updated” date.
          </p>

          <h2 className="text-2xl leading-[1.25] mt-8 font-bold" id="contact">
            11) Contact Us
          </h2>
          <p className="mt-2">
            If you have questions or requests about this policy or your data,
            contact us:
          </p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:support@kcproassembly.com"
              className="text-gray-700 font-semibold hover:text-gray-400"
            >
              support@kcproassembly.com
            </a>
            <br />
            Phone:{" "}
            <a
              href="tel:+18163014776"
              className="text-gray-700 font-semibold hover:text-gray-400"
            >
              (816) 301-4776
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

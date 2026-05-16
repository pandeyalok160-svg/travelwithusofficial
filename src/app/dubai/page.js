import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function DubaiPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[70vh]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
            <span className="inline-flex rounded-full bg-orange-500/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white">
              Dubai Luxury Tour
            </span>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Experience Dubai&apos;s luxury, adventure, and high-design
              escapes.
            </h1>
            <p className="mt-6 text-lg leading-8 text-orange-100/90 sm:text-xl">
              Stay in iconic hotels, ride across golden dunes, and enjoy
              unforgettable city moments on a premium six-day journey.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-xl transition hover:bg-orange-600"
              >
                View itinerary
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="itinerary" className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-orange-500">
                  Premium itinerary
                </p>
                <h2 className="mt-4 text-3xl font-bold">Dubai highlights</h2>
              </div>
              <p className="text-gray-600 leading-7">
                This curated package blends modern luxury with timeless Arabian
                adventure. Relax at five-star hotels, explore the city’s
                spectacular architecture, and enjoy a private desert safari with
                dinner.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Burj Khalifa
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Sunrise access to the observation deck with fast-track entry
                    and luxury views.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Desert safari
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Private dune drive, camel ride, and a gourmet dinner under
                    the stars.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Marina cruise
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Golden hour yacht experience with refreshments and skyline
                    views.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    City tour
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Guided visits to the Dubai Frame, Palm Jumeirah, and Dubai
                    Mall.
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                  Package overview
                </p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  Everything you need
                </h3>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[1.75rem] bg-orange-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-orange-600">
                    Price
                  </p>
                  <p className="mt-2 text-3xl font-bold text-orange-600">
                    ₹65,000
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Duration
                  </p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    6 Days
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Group size
                  </p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    Small groups only
                  </p>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">
                  Included
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6">
                  <li>5-star hotel stays</li>
                  <li>Private transfers</li>
                  <li>Guided city tour</li>
                  <li>Desert safari dinner</li>
                </ul>
              </div>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
              >
                Book this tour
              </a>
            </aside>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Luxury stay</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enjoy premium hotel comforts near the Dubai Marina and Palm
                Jumeirah.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Dining</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Savor upscale Arabian cuisine and rooftop dinners with city
                views.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Memorable moments</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                From desert sunsets to iconic skyscraper panoramas, every day is
                unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-16 lg:px-10 scroll-mt-24"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">
                Contact us
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Let&apos;s plan your journey
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Reach out today for a custom luxury itinerary.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Email
              </p>
              <p className="mt-3 text-sm text-white">
                shantanu.pandey@travelwithusofficial.com
              </p>
              <p className="mt-2 text-sm text-white">
                sapna.pandey@travelwithusofficial.com
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Phone
              </p>
              <p className="mt-3 text-base font-medium text-white">
                +91 9650 250 052
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

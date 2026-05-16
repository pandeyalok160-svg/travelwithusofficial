import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function MalaysiaPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
            <span className="inline-flex rounded-full bg-amber-500/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white">
              Malaysia Getaway
            </span>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fall in love with Malaysia’s islands, skyline, and culture.
            </h1>
            <p className="mt-6 text-lg leading-8 text-amber-100/90 sm:text-xl">
              Explore luxury beaches, city highlights, and historic temples on a
              stylish five-day escape designed for modern travelers.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 shadow-xl transition hover:bg-amber-400"
              >
                See itinerary
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
                <p className="text-sm uppercase tracking-[0.32em] text-amber-500">
                  Premium itinerary
                </p>
                <h2 className="mt-4 text-3xl font-bold">Malaysia highlights</h2>
              </div>
              <p className="text-gray-600 leading-7">
                Journey through Malaysia’s best destinations with a premium mix
                of beach comfort, city exploration, and cultural discovery.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Langkawi beaches
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Relax by turquoise waters and enjoy a private island cruise.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Petronas Towers
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    See Kuala Lumpur’s iconic skyline from the twin tower
                    skybridge.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Batu Caves
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Experience spiritual architecture and cultural highlights.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Luxury stays
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Stay in upscale resorts and enjoy curated wellness
                    experiences.
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
                  Everything included
                </h3>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[1.75rem] bg-amber-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-600">
                    Price
                  </p>
                  <p className="mt-2 text-3xl font-bold text-amber-600">
                    ₹62,000
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Duration
                  </p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    5 Days
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Travel style
                  </p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    Luxury pace
                  </p>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">
                  Included
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6">
                  <li>5-star beach resort stay</li>
                  <li>Private airport transfers</li>
                  <li>Guided city and cultural tours</li>
                  <li>Langkawi island cruise</li>
                </ul>
              </div>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                Book this getaway
              </a>
            </aside>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Island luxury</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enjoy secluded beaches, sea views, and premium resort service.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">City energy</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Discover Kuala Lumpur’s dining scene and vibrant nightlife.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Cultural discovery</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Visit temples, markets, and heritage sites with a local guide.
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
              <h2 className="mt-4 text-3xl font-bold">Let’s plan your trip</h2>
              <p className="mt-3 text-sm text-slate-400">
                Reach out for bookings, custom packages, and travel support.
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

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SriLankaPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
            <span className="inline-flex rounded-full bg-cyan-500/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white">
              Sri Lanka Escape
            </span>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover Sri Lanka’s lush hills, coastal retreats, and cultural
              charms.
            </h1>
            <p className="mt-6 text-lg leading-8 text-cyan-100/90 sm:text-xl">
              A premium five-day journey through tea country, sacred temples,
              and sunlit beaches with stylish stays and local experiences.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-base font-semibold text-slate-900 shadow-xl transition hover:bg-cyan-400"
              >
                Explore itinerary
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
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-500">
                  Signature itinerary
                </p>
                <h2 className="mt-4 text-3xl font-bold">
                  Sri Lanka highlights
                </h2>
              </div>
              <p className="text-gray-600 leading-7">
                Explore Sri Lanka at a relaxed luxury pace with stunning coastal
                views, hill country tea estates, and cultural treasures framed
                by curated experiences.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Colombo culture
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Explore modern city landmarks, markets, and waterfront
                    dining.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Kandy temple tour
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Visit the Temple of the Tooth and enjoy traditional cultural
                    performances.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Tea country
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Walk through misty plantations and sample fresh Ceylon tea.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Beach relaxation
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Unwind on Bentota’s golden sands with luxury seaside
                    comforts.
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
                  What’s included
                </h3>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[1.75rem] bg-cyan-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-700">
                    Price
                  </p>
                  <p className="mt-2 text-3xl font-bold text-cyan-700">
                    ₹70,000
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
                  <li>Premium hotel stays</li>
                  <li>Private transfers and guided tours</li>
                  <li>Cultural and nature excursions</li>
                  <li>Beach and tea country experiences</li>
                </ul>
              </div>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-cyan-400"
              >
                Book this escape
              </a>
            </aside>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Natural beauty</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                From tea hills to coastlines, Sri Lanka delivers unforgettable
                scenery.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Cultural journeys</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enjoy temple visits, historic sites, and local traditions.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Relaxation</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                End each day with luxurious beachside or hillside retreats.
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
                We&apos;re here to help
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Reach out to book your trip or get a custom itinerary.
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

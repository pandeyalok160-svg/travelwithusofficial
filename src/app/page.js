import Navbar from "@/components/Navbar";
import PackageCard from "@/components/PackageCard";

export const metadata = {
  title: "Luxury Travel Packages | Travel With Us",
  description:
    "Explore luxury holiday packages for Dubai, Malaysia, and Sri Lanka with Travel With Us Official.",
  keywords: [
    "luxury vacation",
    "Dubai travel",
    "Malaysia tours",
    "Sri Lanka escapes",
    "premium travel packages",
  ],
  openGraph: {
    title: "Luxury Travel Packages | Travel With Us",
    description:
      "Explore luxury holiday packages for Dubai, Malaysia, and Sri Lanka with Travel With Us Official.",
    url: "/",
    siteName: "Travel With Us",
    type: "website",
    images: [
      {
        url: "/images/logo-removebg.png",
        alt: "Travel With Us Official logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Travel Packages | Travel With Us",
    description:
      "Explore luxury holiday packages for Dubai, Malaysia, and Sri Lanka with Travel With Us Official.",
  },
};

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070')",
        }}
      >
        <div className="bg-black/50 p-10 rounded-2xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-5 tracking-wide">
            Travel With Us Official
          </h1>

          <p className="text-xl md:text-2xl font-light tracking-widest uppercase mb-6">
            {" "}
            Luxury Holidays • Flights • Experiences
          </p>

          <a
            href="#packages"
            className="inline-block rounded-xl bg-orange-500 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-orange-600 hover:scale-105"
          >
            Explore Packages
          </a>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold tracking-widest uppercase">
            Handpicked Destinations
          </p>

          <h2 className="text-5xl font-bold mt-3 text-gray-800">
            Popular Packages
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Explore unforgettable luxury experiences crafted for families,
            couples, and adventure lovers.
          </p>
        </div>

        <div
          id="packages"
          className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
        >
          <PackageCard
            title="Dubai Luxury Tour"
            description="Burj Khalifa • Desert Safari • Marina Cruise"
            image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
            link="/dubai"
            price="₹65,000"
            days="6 Days"
          />

          <PackageCard
            title="Malaysia Getaway"
            description="Langkawi • Petronas Towers • Batu Caves"
            image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070"
            link="/malaysia"
            price="₹62,000"
            days="5 Days"
          />

          <PackageCard
            title="Sri Lanka Escape"
            description="Bentota • Kandy • Nuwara Eliya"
            image="https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=2070"
            link="/sri-lanka"
            price="₹70,000"
            days="5 Days"
          />
        </div>
      </section>
    </main>
  );
}

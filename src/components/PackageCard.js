import Link from "next/link";

export default function PackageCard({
  title,
  description,
  image,
  link,
  price,
  days,
}) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 md:h-80 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {days}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-7">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            {title}
          </h2>

          <span className="text-orange-500 font-bold text-xl">{price}</span>
        </div>

        <p className="text-gray-500 text-lg leading-relaxed">{description}</p>

        {/* BUTTON */}
        <Link href={link}>
          <button className="mt-8 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition">
            Explore Package
          </button>
        </Link>
      </div>
    </div>
  );
}

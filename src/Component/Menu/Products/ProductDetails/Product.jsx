// src/components/Product.jsx
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "VIVO Air Purifier",
    description:
      "Experience fresh air with VIVO's advanced purification system.",
    image: "/Air-Purifier.jpg",
  },
  {
    id: 2,
    title: "VIVO Air Cooler",
    description:
      "Stay cool and comfortable with our VIVO air cooler, offering powerful cooling.",
    image: "/Air-Cooler.jpg",
  },
  {
    id: 3,
    title: " Air Conditioners",
    description:
      "High-performance water cooler for your home or office with energy-efficient cooling.",
    image: "/public/Product/Air Conditioners – Blue Star_files/AP490LAN_432x432_d34edc4a-0cc3-4b5c-a11a-955da30c9294.jpg",
  },
  {
    id: 4,
    title: "Air Conditioners",
    description:
      "High-performance water cooler for your home or office with energy-efficient cooling.",
    image: "/Product/Air Conditioners – Blue Star_files/CA120PMH_432x432_3e07d0fb-580a-4460-9d5b-980f7da40b18.jpg",
  },
];

const Product = () => {
  return (
    <>
      {/* Hero Image Section */}
      <div className="relative mt-25 w-full overflow-hidden">
        <img
          src="/Product/specificedetor ac.webp"
          alt="Specific Detector AC"
          className="w-full h-auto object-contain"
        />
        <div className="absolute bottom-0 left-0 w-[70%] md:w-[40%] lg:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/80 text-white rounded-t-md">
            <h2 className="text-sm sm:text-base md:text-lg font-semibold">
             Room Air Conditioner
            </h2>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="m-2"> {/* Add margin around each card */}
              <ProductCard
                title={product.title}
                description={product.description}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

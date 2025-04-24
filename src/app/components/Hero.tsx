export default function Hero() {
    return (
      <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('/hero-shoes.jpg')" }}>
        <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Step Into Your Style</h1>
        </div>
      </section>
    );
  }
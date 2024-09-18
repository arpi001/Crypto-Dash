import bgImage from '../assets/map.jpg';

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-gray-900"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative text-center text-white p-6 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to Crypto Dash
          </h1>
          <p className="text-lg md:text-2xl font-semibold mb-8">
            Track your favorite cryptocurrencies in real-time, with ease.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Why Crypto Dash?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-zinc-300 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Real-time Data</h3>
            <p>Stay up-to-date with live cryptocurrency prices, market trends, and updates.</p>
          </div>
          <div className="p-6 bg-zinc-300 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Advanced Charting</h3>
            <p>Visualize data with easy-to-read charts and track price movements over time.</p>
          </div>
          <div className="p-6 bg-zinc-300 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">User-friendly Design</h3>
            <p>Simple and intuitive design for easy navigation across the platform.</p>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white mb-8 italic">
            Cryptocurrency is not just a new way to pay; it is a revolution in the way we think about money and trust.
          </blockquote>
          <p className="text-lg text-gray-200">– Anonymous</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;

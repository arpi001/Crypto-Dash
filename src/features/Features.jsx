

const features = [
  {
    title: "Real-Time Market Data",
    description: "Stay updated with live prices, market cap, and trading volumes of your favorite cryptocurrencies.",
    icon: "📊",
  },
  {
    title: "Top Gainers & Losers",
    description: "Easily spot the best and worst-performing coins to seize opportunities and avoid pitfalls.",
    icon: "🚀",
  },
  {
    title: "Multi-Currency Support",
    description: "Switch between different fiat currencies (USD, INR, EUR) to view prices in your preferred currency.",
    icon: "💱",
  },
  {
    title: "User-Friendly Interface",
    description: "Experience a responsive and intuitive dashboard designed with simplicity and usability in mind.",
    icon: "📱",
  },
];

const Features = () => (
  <section className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

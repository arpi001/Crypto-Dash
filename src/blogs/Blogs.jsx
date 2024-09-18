const blogPosts = [
    {
      title: "Understanding Cryptocurrency",
      description: "A deep dive into the world of cryptocurrencies, including their history, technology, and future prospects.",
      date: "2024-09-15",
    },
    {
      title: "How to Invest in Crypto",
      description: "Tips and strategies for getting started with cryptocurrency investments, including risk management and portfolio diversification.",
      date: "2024-09-10",
    },
    {
      title: "The Future of Blockchain",
      description: "Exploring the potential future developments and applications of blockchain technology beyond cryptocurrencies.",
      date: "2024-09-05",
    },
    {
      title: "Top 5 Cryptocurrencies to Watch",
      description: "An overview of the most promising cryptocurrencies in the market, including their features and potential for growth.",
      date: "2024-08-30",
    },
    {
      title: "Crypto Trading Strategies",
      description: "A guide to various trading strategies for cryptocurrencies, including technical analysis, day trading, and long-term investing.",
      date: "2024-08-25",
    },
  ];
  
  const Blogs = () => (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(({ title, description, date }, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <p className="text-gray-500 text-sm">{date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Blogs;
  
import { NextPage } from "next";
import {
  FaBolt,
  FaChartBar,
  FaShieldAlt,
  FaUsers,
  FaCoins,
  FaLock,
  FaPaperPlane,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 flex justify-between items-center animate-fadeIn shadow-md">
        <div className="text-2xl font-bold">CryptoLanding</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#why-choose-us"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Home Section */}
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white"
        >
          <h1 className="text-5xl mb-4 animate-fadeIn hover:text-gray-300">
            Welcome to CryptoLanding
          </h1>
          <p className="text-xl animate-slideIn text-center max-w-2xl hover:text-gray-300">
            Your gateway to the crypto world. Explore the latest trends, market
            data, and expert analysis in the cryptocurrency market.
          </p>
          <FaCoins className="w-24 h-24 mt-6 animate-bounce hover:text-gray-300" />
          <a
            href="#about"
            className="mt-8 px-6 py-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Learn More
          </a>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-white text-gray-800"
        >
          <h2 className="text-4xl mb-4 animate-fadeIn hover:text-purple-400">
            About Us
          </h2>
          <p className="text-lg max-w-3xl text-center animate-slideIn hover:text-gray-600">
            We are a team of crypto enthusiasts dedicated to bringing you the
            latest and most reliable information about the cryptocurrency
            market. Our mission is to educate and empower individuals to make
            informed decisions in the world of digital assets.
          </p>
          <FaUsers className="w-24 h-24 mt-6 text-gray-800 hover:text-purple-400" />
        </section>

        {/* Why Us Section */}
        <section
          id="why-choose-us"
          className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"
        >
          <h2 className="text-4xl mb-4 animate-fadeIn hover:text-purple-400">
            Why Choose Us
          </h2>
          <p className="text-lg max-w-3xl text-center animate-slideIn hover:text-gray-600">
            We provide accurate, up-to-date information and analysis on the
            latest trends in the cryptocurrency market. Our team of experts
            ensures that you have all the tools and knowledge needed to navigate
            the volatile crypto landscape.
          </p>
          <FaLock className="w-24 h-24 mt-6 text-gray-800 hover:text-purple-400" />
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-gray-100 text-gray-800"
        >
          <h2 className="text-4xl mb-4 animate-fadeIn hover:text-purple-400">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-gray-50 shadow-md rounded animate-scaleIn flex flex-col items-center hover:bg-gray-100">
              <FaBolt className="w-16 h-16 text-purple-400 mb-4 hover:text-purple-600" />
              <p className="text-lg font-semibold">Real-time market data</p>
              <p className="text-center">
                Stay updated with the latest market data and trends in
                real-time.
              </p>
            </div>
            <div className="p-4 bg-gray-50 shadow-md rounded animate-scaleIn flex flex-col items-center hover:bg-gray-100">
              <FaChartBar className="w-16 h-16 text-purple-400 mb-4 hover:text-purple-600" />
              <p className="text-lg font-semibold">Expert analysis</p>
              <p className="text-center">
                Get insights and analysis from our team of crypto experts.
              </p>
            </div>
            <div className="p-4 bg-gray-50 shadow-md rounded animate-scaleIn flex flex-col items-center hover:bg-gray-100">
              <FaShieldAlt className="w-16 h-16 text-purple-400 mb-4 hover:text-purple-600" />
              <p className="text-lg font-semibold">Secure transactions</p>
              <p className="text-center">
                Experience secure and reliable transactions with our platform.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section
          id="reviews"
          className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800"
        >
          <h2 className="text-4xl mb-4 animate-fadeIn hover:text-purple-400">
            Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white shadow-md rounded animate-slideIn hover:bg-gray-200">
              <p className="text-lg font-semibold">
                &quot;CryptoLanding is a game-changer for crypto
                enthusiasts!&quot;
              </p>
              <p className="mt-2 text-right">- Alex</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded animate-slideIn hover:bg-gray-200">
              <p className="text-lg font-semibold">
                &quot;I love the real-time data and expert analysis.&quot;
              </p>
              <p className="mt-2 text-right">- Jordan</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded animate-slideIn hover:bg-gray-200">
              <p className="text-lg font-semibold">
                &quot;Secure transactions make me feel safe.&quot;
              </p>
              <p className="mt-2 text-right">- Taylor</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-gray-100 text-gray-800"
        >
          <h2 className="text-4xl mb-4 animate-fadeIn hover:text-purple-400">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="max-w-4xl space-y-4">
            <div className="p-4 bg-gray-50 shadow-md rounded animate-slideIn hover:bg-gray-100">
              <h3 className="text-lg font-semibold">What is cryptocurrency?</h3>
              <p>
                Cryptocurrency is a digital or virtual currency that uses
                cryptography for security and operates independently of a
                central authority.
              </p>
            </div>
            <div className="p-4 bg-gray-50 shadow-md rounded animate-slideIn hover:bg-gray-100">
              <h3 className="text-lg font-semibold">
                How do I buy cryptocurrency?
              </h3>
              <p>
                You can buy cryptocurrency through various exchanges and
                platforms that allow you to trade fiat currency for digital
                assets.
              </p>
            </div>
            <div className="p-4 bg-gray-50 shadow-md rounded animate-slideIn hover:bg-gray-100">
              <h3 className="text-lg font-semibold">Is cryptocurrency safe?</h3>
              <p>
                While cryptocurrency transactions are secure due to
                cryptography, it is important to use reputable platforms and
                take necessary precautions to protect your assets.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800"
        >
          <h2 className="text-4xl mb-4 animate-fadeIn hover:text-purple-400">
            Contact Us
          </h2>
          <form className="w-full max-w-lg p-8 bg-white shadow-md rounded animate-slideIn">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-400 text-white rounded-full shadow-lg hover:bg-purple-500 transition duration-300 flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 flex justify-between items-center animate-fadeIn">
        <p>&copy; 2025 CryptoLanding. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="mailto:info@cryptolanding.com"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/cryptolanding"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/cryptolanding"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

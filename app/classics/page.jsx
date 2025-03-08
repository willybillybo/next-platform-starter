// pages/index.js

import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SolSports</h1>
          <p className="text-xl mb-6">Your ultimate platform for sports predictions. Earn rewards by predicting the games you love.</p>
          <Link href="#get-started">
            <a className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300">
              Start Predicting
            </a>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="get-started" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">How SolSports Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Make Predictions</h3>
              <p>Predict outcomes for NBA and college basketball games and earn rewards for correct predictions.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Leaderboard</h3>
              <p>See how you rank against other players based on the accuracy of your predictions.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Earn Rewards</h3>
              <p>Win SolSports Tokens based on your correct predictions and move up the leaderboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Predicting?</h2>
          <Link href="#get-started">
            <a className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300">
              Join SolSports Now
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 SolSports. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

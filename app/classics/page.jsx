// pages/index.js
import PredictionForm from '../components/PredictionForm';
import Leaderboard from '../components/Leaderboard';

const Home = () => (
  <div>
    <header>
      <h1>Welcome to SolSports</h1>
      <p>Your platform for sports predictions!</p>
    </header>
    <main>
      <PredictionForm />
      <Leaderboard />
    </main>
  </div>
);

export default Home;

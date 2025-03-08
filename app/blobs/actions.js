// components/PredictionForm.js
import { useState } from 'react';

const PredictionForm = () => {
  const [prediction, setPrediction] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You predicted: ${prediction}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prediction">Your Prediction:</label>
      <input
        type="text"
        id="prediction"
        name="prediction"
        value={prediction}
        onChange={(e) => setPrediction(e.target.value)}
      />
      <button type="submit">Submit Prediction</button>
    </form>
  );
};

export default PredictionForm;

import React, { useState } from 'react';
import InputForm from './InputForm';
import KnapsackResult from './KnapsackResult';
import { solveKnapsack } from './Algorithms';

function App() {
  const [bagCapacity, setBagCapacity] = useState(0);
  const [items, setItems] = useState([]);
  const [knapsackResult, setKnapsackResult] = useState(null);

  const handleKnapsackSubmit = (capacity, items) => {
    setBagCapacity(capacity);
    setItems(items);
    const result = solveKnapsack(capacity, items);
    setKnapsackResult(result);
  };

  return (
    <div className="App" style={{ margin: "auto", width: "98vw", height: "100vh", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column", gap: "10vh" }}>
      <div style={{textAlign:"center",width:"90%"}}>
        <h2>Salesman Problem Solver using Knapsack Algorithm</h2>
        <p> In this project, the objective is to address the Traveling Salesman Problem. The salesperson is equipped with a bag of size 'n', considering the number of items, their cost prices, and weights. By leveraging the Fractional Knapsack Algorithm, the salesperson aims to strategically fill the bag, selecting items to carry for sale. The goal is to maximize the overall profit by optimizing the choice of items within the bag's capacity.</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: "15vw" }}>
        <InputForm onSubmit={handleKnapsackSubmit} />
        <KnapsackResult result={knapsackResult} />
      </div>
    </div>
  );
}

export default App;

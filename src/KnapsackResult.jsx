import React from 'react';

function KnapsackResult({ result }) {
  return (
    <div style={{width:"30%"}}>
      <h2>Knapsack Result</h2>
      <p><b>Total Profit:</b> {result?.profit?parseInt(result?.profit).toFixed(2):"00"}</p>
      <p><b>Selected Items:</b></p>
      <ul>
        {result?.items?.map((item, index) => (
          <li key={index}>{`Item ${index + 1} - Weight: ${item.weight}, Value: ${parseInt(item.value).toFixed(2)}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default KnapsackResult;

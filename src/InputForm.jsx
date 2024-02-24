import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [capacity, setCapacity] = useState('');
  const [items, setItems] = useState([]);
  const [weight, setWeight] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(parseInt(capacity), items);
  };

  const addItem = () => {
    if (weight && value) {
      const newItem = { weight: parseInt(weight), value: parseInt(value) };
      setItems([...items, newItem]);
      setWeight('');
      setValue('');
    }
  };

  const handleReset = () => {
    setCapacity('');
    setItems([]);
    setWeight('');
    setValue('');
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <fieldset style={{padding:"25px",borderRadius:"15px"}}>
        <legend>
          Enter Details
        </legend>

        <label>
          Bag Capacity:{" "}
          <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        </label>
        <div style={{marginTop:"20px"}}>
          <label>
            Weight:{" "}
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <label>
            Value:{" "}
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
          </label>
          <button type="button" onClick={addItem}>Add Item</button>
        </div>
        <div style={{marginTop:"25px"}}>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{marginLeft:"15px"}}>Reset</button>
        </div>

        {/* Table to display items */}
      </fieldset>
    </form>
        {items.length > 0 && (
          <div>
            <h2>Items</h2>
            <table border={"1"} cellPadding={"8"} align='center' cellSpacing={"0"}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Weight</th>
                  <th>Value</th>
                  <th>Value/Weight Ratio</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} align="center">
                    <td>{index + 1}</td>
                    <td>{item.weight}</td>
                    <td>{item.value}</td>
                    <td>{(item.value / item.weight).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      </div>
  );
}

export default InputForm;

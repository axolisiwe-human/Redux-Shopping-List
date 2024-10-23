import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './actions';

function App() {
  const [item, setItem] = useState('');
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (item.trim()) {
      dispatch(addItem(item));
      setItem('');
    }
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import productApi from '@/api/Flexsys';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    productApi
      .getProducts()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Flexsys data to graph</h1>
      {!data ? 'Fetching Failed' : JSON.stringify(data)}
    </div>
  );
};

export default App;

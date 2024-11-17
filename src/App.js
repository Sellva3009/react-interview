import {useState, useEffect} from 'react';
import './App.css';

function App({userId}) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Network response not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch(error) {
        setError(error);
      }
    }

    fetchData();

  }, [data]);

  if(error) {
    return <div>Error: {error.message}</div>;
  }

  if(!data) {
    return <div>Loading ...</div>
  }
  return (
    <div className="App">
      <header className="App-header">
        Data fetched {userId}
      </header>

      {/* {data} */}
    </div>
  );
}

export default App;

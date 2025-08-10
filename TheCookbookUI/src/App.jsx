import {useState, useEffect } from 'react';
import { useFetch } from "./hooks/useFetch";
import './App.css';

function App() {

  // const controller = new AbortController();
  // const signal = controller.signal;

  const [count, setCount] = useState(0);
  
  const { data, loading, error } = useFetch(`${import.meta.env.VITE_API_URI}/api/recipes`);

  useEffect(() => {
    document.title = import.meta.env.VITE_APP_NAME;
    if(data !== null)
      setCount(data.length);
  }, [data]);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <h1>The Cookbook Website</h1>
      <p>Nishanth and Bhumika have {count} Recipes</p>
    </>
  );
}

export default App

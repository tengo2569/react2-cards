import React from 'react';
import './App.css';
import Card from './Components/Card.jsx';
import { data } from './cards';

function App() {
  return (
    <>
      {data.map((el, index) => (
        <Card
          key={index}
          feri={el.feri}
          poto={el.poto}
          border={el.border}
          info={el.info}
          btntxt={el.btntxt}
          saxeli={el.saxeli}
        />
      ))}
    </>
  );
}

export default App;

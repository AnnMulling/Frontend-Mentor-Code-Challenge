import { useState } from 'react';
import { ResultSection } from './Results/ResultSection';
import { SummarySection } from './Summary/Summary';
import data from '../data.json'


import '../Styles/Main.css';

function App() {
  const [idx, setIndx] = useState(0)
  const [newData, setNewData] = useState(data[idx]);


  const rotateData = () => {
    console.log(idx)
    console.log(data.length)
    if (idx > data.length) {
        setIndx((prev) => prev - 1);
        setNewData(data[idx]);
    }
      setIndx((prev) => prev + 1);
      setNewData(data[idx]);

  };

  return (
    <div className="App">

       <ResultSection newData={newData}/>

       <SummarySection rotateData={rotateData}/>

    </div>
  );
}

export default App;

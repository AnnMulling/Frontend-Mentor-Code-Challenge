import { useEffect, useState } from 'react';
import { ResultSection } from './Results/ResultSection';
import { SummarySection } from './Summary/Summary';
import { FooterSection } from './Footer/Footer';
import data from '../data.json'

import '../Styles/Main.css';

function App() {
  const [idx, setIdx] = useState(0);
  const [newData, setNewData] = useState(data[0]);

  const rotateData = () => {
    console.log(idx)
    console.log(data.length)
    if (idx === data.length - 1) {
        setNewData(data[idx]);
        return setIdx(0);
    }
    console.log('out if', idx)
        setNewData(data[idx]);
        setIdx((prev) => prev + 1);

  };

  return (
      <>
        <div className="App">

          <ResultSection newData={newData}/>

          <SummarySection rotateData={rotateData}/>

        </div>

        <FooterSection />
      </>


  );
}

export default App;

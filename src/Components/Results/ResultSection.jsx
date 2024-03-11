import { useState } from 'react'
import '../../Styles/Components/Result.css'
import data from './data.json'

export const ResultSection = () => {
    const [result, setResult] = useState(data[0]);
    return (
        <div className="result">
            <h2>Your Result</h2>
            <div className="score">
              <p>{result.score} </p>
              <p id="score-max">of 100</p>
            </div>
            <div className="description">
                <p id="rate">Great</p>
                <p>Your scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </div>

    )
}

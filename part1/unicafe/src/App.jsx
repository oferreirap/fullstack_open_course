import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {good + neutral + bad === 0 ? 0 : (((good*1)+(neutral*0)-(bad*1))/(good+neutral+bad))}</p>
      <p>positive {good + neutral + bad === 0 ? 0 : ((good*1)/(good+neutral+bad))*100}%</p>
    </div>
  )
}

export default App
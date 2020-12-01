import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, data }) => {
  return(
    <>
        <td>{text}</td>
        <td>{data}</td>
    </>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad
  if(all===0){
    return(
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <tr><Statistic text='GOOD' data={good} /></tr>
          <tr><Statistic text='NEUTRAL' data={neutral} /></tr>
          <tr><Statistic text='BAD' data={bad} /></tr>
          <tr><Statistic text='ALL' data={all} /></tr>
          <tr><Statistic text='AVERAGE' data={(good*1+bad*(-1))/all} /></tr>
          <tr><Statistic text='POSITIVE' data={good*100/all + '%'} /></tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='GOOD' handleClick={() => setGood(good+1)} />
      <Button text='NEUTRAL' handleClick={() => setNeutral(neutral+1)} />
      <Button text='BAD' handleClick={() => setBad(bad+1)} />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
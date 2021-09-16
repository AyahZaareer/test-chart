import React from 'react'

import BarChart from './component/BarChart'
import Circle from './component/Circal'
import Circal2 from './component/Circal2'
import Circal3 from './component/Circal3'
import Chart from'./component/Chart'
import './App.css'

function App() {
  return (
    <div>
      <div style={{ display: 'flex', border: 'groove', width: '60rem', height: '50rem', alignItems: 'center', marginLeft: '2rem', justifyContent: 'center' }}>
        <BarChart />
      </div>

      <div style={{ flexDirection: 'column', border: 'groove', width: '40rem', height: '40rem',marginLeft: '2rem' ,justifyContent: 'center',alignItems: 'center',margin:'2rem'}}>

        <h1 style={{ textAlign: 'center' }}>Vehicles Condition</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Circle />
          <Circal2 />
          <Circal3 />
        </div>

        <div style={{ flexDirection: 'column', border: 'groove', width: '20rem', height: '11rem',marginLeft: '2rem',marginTop:'14rem' ,justifyContent: 'center',alignItems: 'center'}} >
        <Chart />
      </div>

      </div>

    </div>
  )
}

export default App

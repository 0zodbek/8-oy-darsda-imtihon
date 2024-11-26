import {FC} from 'react'
import PersonPage from './components/PersonPage';
import Knowladge from './components/KnowlodgePage'
const App: FC = () => {
 
  return(
    <div className='pt-[50px]'>
      <PersonPage/>
      <Knowladge/>
    </div>
  )
}

export default App;

// import React from 'react'
// import GaugeChart from './components/Chart'

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-4">Gauge Chart</h1>
//         <GaugeChart value={0.55} />
//       </div>
//     </div>
//   )
// }

// export default App


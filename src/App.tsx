import { FC } from 'react'
import PersonPage from './components/PersonPage';
import Knowladge from './components/KnowlodgePage'
import Logo from './assets/logo.svg'
import gradus from "./assets/78.svg"
const App: FC = () => {

  return (
    <div className=''>
      <div className='flex mb-10 w-[1440px] pl-[64px] mx-auto'>
      <div className="w-72 h-13 grid gap-2">
        <img
          src={Logo}
          alt="Logo"
          className="w-16 h-16 object-contain ml-16"
        />
        <h4 className="text-black w-48 h-12 text-center">
          Давлат хизматининг ягона электрон ахборот-таҳлил тизими
        </h4>
      </div>
      <div>
      <p className='w-[642px] font-semibold text-3xl text-center mt-10'>
       Республика Ассессмент маркази онлайн платформаси
       </p>
      </div>
      <div className='mt-10 ml-32'>
        <img src={gradus} alt="" />
      </div>
      </div>

      <PersonPage />
      <Knowladge />
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


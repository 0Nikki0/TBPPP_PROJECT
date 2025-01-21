// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


//Starts here.

import Navbar from './components/Navbar';
import TranslationSection from './components/TranslationSection';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <header className="header">
      <h1>
      WELC
      <span className="heart-icon">
        <svg
          width="63"
          height="60"
          viewBox="0 0 63 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.4815 52.5L27.6774 49.25C23.2613 45.4583 19.6103 42.1875 16.7245 39.4375C13.8387 36.6875 11.5432 34.2292 9.83794 32.0625C8.13269 29.8542 6.93027 27.8333 6.23068 26C5.57482 24.1667 5.24689 22.2917 5.24689 20.375C5.24689 16.4583 6.6242 13.1875 9.37883 10.5625C12.1335 7.9375 15.5658 6.625 19.6759 6.625C21.9496 6.625 24.1139 7.08333 26.169 8C28.224 8.91667 29.9948 10.2083 31.4815 11.875C32.9681 10.2083 34.7389 8.91667 36.794 8C38.849 7.08333 41.0134 6.625 43.287 6.625C47.3971 6.625 50.8294 7.9375 53.5841 10.5625C56.3387 13.1875 57.716 16.4583 57.716 20.375C57.716 22.2917 57.3662 24.1667 56.6666 26C56.0108 27.8333 54.8302 29.8542 53.125 32.0625C51.4197 34.2292 49.1242 36.6875 46.2384 39.4375C43.3526 42.1875 39.7016 45.4583 35.2855 49.25L31.4815 52.5ZM31.4815 45.75C35.679 42.1667 39.1332 39.1042 41.8441 36.5625C44.555 33.9792 46.6975 31.75 48.2716 29.875C49.8457 27.9583 50.9388 26.2708 51.5509 24.8125C52.163 23.3125 52.4691 21.8333 52.4691 20.375C52.4691 17.875 51.5946 15.7917 49.8456 14.125C48.0967 12.4583 45.9105 11.625 43.287 11.625C41.232 11.625 39.33 12.1875 37.581 13.3125C35.832 14.3958 34.6296 15.7917 33.9737 17.5H28.9892C28.3333 15.7917 27.1309 14.3958 25.3819 13.3125C23.6329 12.1875 21.7309 11.625 19.6759 11.625C17.0524 11.625 14.8662 12.4583 13.1173 14.125C11.3683 15.7917 10.4938 17.875 10.4938 20.375C10.4938 21.8333 10.7999 23.3125 11.412 24.8125C12.0242 26.2708 13.1173 27.9583 14.6913 29.875C16.2654 31.75 18.4079 33.9792 21.1188 36.5625C23.8297 39.1042 27.2839 42.1667 31.4815 45.75Z"
            fill="#1D1B20"
          />
        </svg>
      </span>
      ME
    </h1>
      </header>
      <TranslationSection />
      <Footer />
    </div>
  );
}

export default App;
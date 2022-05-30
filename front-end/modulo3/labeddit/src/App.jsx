import React from "react";
// <<<<<<< HEAD
// import { Router } from "react-router-dom";
// import GlobalState from './context/GlobalState';

// export function App() {
//   return (
//     <>
//         <GlobalState>
// 			<Router/>
// 		</GlobalState>
// =======
import Router from './routes/Router';

import GlobalState from './context/GlobalState';

export default function App() {
  return (
    <>
      <GlobalState>
			  <Router/>
		  </GlobalState>
{/* >>>>>>> master */}
    </>
  );
}

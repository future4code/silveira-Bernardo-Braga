import React from "react";
import Router from './routes/Router';

import GlobalState from './context/GlobalState';

export default function App() {
  return (
    <>
      <GlobalState>
			  <Router/>
		  </GlobalState>
    </>
  );
}

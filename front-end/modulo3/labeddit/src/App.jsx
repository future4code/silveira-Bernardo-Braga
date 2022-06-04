import React from "react";

import { Router } from "react-router-dom";
import GlobalState from './context/GlobalState';

export function App() {
  return (
    <>
        <GlobalState>
			    <Router/>
		    </GlobalState>

    </>
  );
}


import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MegaSena from '../Pages/MegaSena/MegaSena';

// import MegaSena from '../Pages/MegaSena';



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={< MegaSena />} />
                {/* <Route path='/history' element={<HistoryPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}  
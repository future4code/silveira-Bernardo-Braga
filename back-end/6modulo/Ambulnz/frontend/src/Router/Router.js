import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={< MainPage />} />
                {/* <Route path='/history' element={<HistoryPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}  
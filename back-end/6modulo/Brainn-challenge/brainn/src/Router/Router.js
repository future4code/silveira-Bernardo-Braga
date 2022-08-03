
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DiaDeSorte from '../Pages/DiaDeSorte/DiaDeSorte';
import LotoFacil from '../Pages/LotoFacil/LotoFacil';
import LotoMania from '../Pages/LotoMania/LotoMania';
import MegaSena from '../Pages/MegaSena/MegaSena';
import Quina from '../Pages/Quina/Quina';
import TimeMania from '../Pages/TimeMania/TimeMania';

// import MegaSena from '../Pages/MegaSena';



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={< MegaSena />} />
                <Route path='/timemania' element={<TimeMania />} />
                <Route path='/quina' element={<Quina />} />
                <Route path='/lotomania' element={<LotoMania />} />
                <Route path='/lotofacil' element={<LotoFacil />} />
                <Route path='/diadesorte' element={<DiaDeSorte />} />
            </Routes>
        </BrowserRouter>
    )
} 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import react, {useState, useEffect} from 'react';
import HomePage from '../Pages/HomePage';
import ListTripsPage from '../Pages/ListTripsPage';
import AdminHomePage from '../Pages/AdminHomePage';
import AplicationFormPage from '../Pages/AplicationFormPage';
import CreateTripPage from '../Pages/CreateTripPage';
import LoginPage from '../Pages/LoginPage';
import TripDetailPage from '../Pages/TripDetailsPage';


export default function Router () {


    return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<HomePage/>} />
        <Route path = '/listTrip' element = {<ListTripsPage/>} />
        <Route path = '/login' element = {<LoginPage/>} />
        <Route path = '/listTrip/aplicationForm' element = {<AplicationFormPage/>} />
        <Route path = '/login/admHome' element = {<AdminHomePage/>} />
        <Route path = '/login/admHome/createTrip' element = {<CreateTripPage/>} />
        <Route path = '/login/admHome/createTrip/tripDetail' element = {<TripDetailPage/>} />
      </Routes>
    </BrowserRouter>
    );
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';

import { CheckInPage } from '../pages/CheckInPage/CheckInPage';
import { FeedPage } from '../pages/FeedPage/FeedPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { PostPage } from '../pages/PostPage/PostPage';


export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                



                <Route index element={ <HomePage /> } />
                <Route path='/checkin' element={ <CheckInPage /> } />
                <Route path='/feed' element={ <FeedPage /> } />
                <Route path='/postComment/:postId/:nick/:body/:voteCont/:title' element={ <PostPage /> } />
 
            </Routes>
        </BrowserRouter>
    )
}
export default Router
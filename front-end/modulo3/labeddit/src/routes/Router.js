import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import HomePage from '../pages/HomePage';
=======
import { CheckInPage } from '../pages/CheckInPage/CheckInPage';
import { FeedPage } from '../pages/FeedPage/FeedPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { PostPage } from '../pages/PostPage/PostPage';

>>>>>>> master

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                <Route index element={ <HomePage /> } />
=======

                <Route index element={ <HomePage /> } />
                <Route path='/checkin' element={ <CheckInPage /> } />
                <Route path='/feed' element={ <FeedPage /> } />
                <Route path='/postComment/:postId/:nick/:body/:voteCont/:title' element={ <PostPage /> } />
                
>>>>>>> master
            </Routes>
        </BrowserRouter>
    )
}
export default Router
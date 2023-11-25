import {createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import App from './App';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import User from './components/User/User';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='user' element={<User />} />

        </Route>
    )
)

export default router;
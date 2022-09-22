import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home'
import Links from './pages/links/links'
import Error from './pages/error/error'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Links' element={<Links/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
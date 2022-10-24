import Home from './components/routes/home.component.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component.jsx'
import SignIn from './components/routes/sign-in/sign-in.component.jsx';

const Shop = ()=>{
    return (<h1>Test component</h1>)
}




const App = ()=>{
    return (<Routes>
        <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='shop' element = { <Shop /> } />  
        <Route path='sign-in' element = { <SignIn /> } />
        </Route>
         </Routes>); 
}

export default App;

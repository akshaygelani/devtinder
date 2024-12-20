import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { devTinderStore } from './store/devTinderStore';
import Body from './components/body';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Profile from './components/profile';

function App() {
  return (
    <Provider store={devTinderStore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

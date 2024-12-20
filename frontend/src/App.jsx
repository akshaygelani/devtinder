import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { devTinderStore } from './store/devTinderStore';
import Body from './components/body';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Profile from './components/profile';
import Feed from './components/feed';

function App() {
  return (
    <Provider store={devTinderStore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/feed' element={<Feed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

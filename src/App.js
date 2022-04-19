import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import HooksIceCreamContainer from './Components/HooksIceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <CakeContainer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer />
        <ItemContainer  />
        <ItemContainer iceCream/> */}
        
      </div>
    </Provider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';

import { NavBar,Pets } from './ui-components';

function App() {
  return (
    <>
    <div className="App">
      <NavBar></NavBar>
      <Pets></Pets>
      </div>
      
    </>
  );
}

export default App;

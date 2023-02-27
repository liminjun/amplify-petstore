import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';

import {
  ProfileCard 
 } from './ui-components';
function App() {
  return (
    <div className="App">
      <ProfileCard />
    </div>
  );
}

export default App;

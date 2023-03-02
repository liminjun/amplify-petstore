import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';

import { NavBar, Pets, MarketingFooter, ProfileCard, PetDetail } from './ui-components';

function App() {
  const petProfileOverride = {
    Breed: {color:"blue"}
  }
  return (
    <>
      <div className="App">
        <NavBar width={"100%"}></NavBar>
        <header>
          <PetDetail/>
          <Pets overrideItems={ ({item,index})=>({
            overrides: {
              About: {color:"blue"},
              Button29766907: {
                onClick: () => {
                  alert(`${item.name}`);
                }
              }
            }
          }) } itemsPerPage={3} currentPage={1} style={{
            textAlign: "center",
            margin: "12px"
          }}></Pets>
          {/* <ProfileCard overrides={petProfileOverride} /> */}
        </header>


        <MarketingFooter width={"100%"} />
      </div>
    </>
  );
}

export default App;

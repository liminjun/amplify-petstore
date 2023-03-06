import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';

import { NavBar, Pets, MarketingFooter, ProfileCard, PetDetail } from './ui-components';
import { set } from 'lodash';

function App() {
  const petProfileOverride = {
    Breed: {color:"blue"}
  }
  const [showDetails, setShowDetials] = useState(false);
  const [pet, setPet] = useState({});
  const [updatePet, setUpdatePet] = useState({});
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  return (
    <>
      <div className="App">
        <NavBar width={"100%"}></NavBar>
        <header>
          {
            showDetails && <PetDetail pet={pet} overrides={{
              MyIcon: {
                onClick: () => {
                  setShowDetials(false);
                },
                style: {
                  cursor: "pointer"
                }
              }
            }}/>
          }
          <Pets overrideItems={ ({item,index})=>({
            overrides: {
              About: {color:"blue"},
              Button29766907: {
                onClick: () => {
                  alert(`${item.name}`);
                  setShowDetials(!showDetails);
                  setPet(item);
                }
              },
              Button36492693: {
                onClick: () => {
                  if (!showForm) {
                    setShowForm(true);
                    setUpdatePet(item);

                    setName(item.name);
                    setColor(item.color);
                    setAge(item.age);
                    setBreed(item.breed);
                    setAbout(item.about);
                    setImage(item.image);
                  }
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

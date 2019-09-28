import React, { useState, useEffect } from 'react';
import { IconCard } from './IconCard'
import './App.css';


const defaultIcons = [
  { iconName: '500px', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false },
  { iconName: 'accessible-icon', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'accusoft', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'acquisitions-incorporated', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'ad', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'address-book', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'address-card', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'adjust', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'adn', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'adobe', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'adversal', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'affiliatetheme', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'air-freshener', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'airbnb', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'algolia', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'align-center', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: true}, 
  { iconName: 'align-justify', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'align-left', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'align-right', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'alipay', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'allergies', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'amazon', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'amazon-pay', isBrandCategory: true, iconDescription: 'fancy', isDeprecated: true}, 
  { iconName: 'ambulance', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
  { iconName: 'american-sign-language-interpreting', isBrandCategory: false, iconDescription: 'fancy', isDeprecated: false}, 
]

function App() {
  const [icons, setIcons] = useState([])

  const addIcon = (icon) => 
    setIcons(icons => [...icons, icon])

  useEffect(() => {
    defaultIcons.forEach(async icon => {
      const response = await fetch('https://random.dog/woof.json')
      const { url } = await response.json();
      addIcon({ ...icon, url })
    })
  }, []) 


  return (
    <div className="App">
      <ul className="icon-list">
      {
        icons.map((icon) => <IconCard key={icon.iconName} {...icon} />)
      }
      </ul>
    </div>
  );
}

export default App;

import React from "react";
import Section from "./Section";
import BgOne from "../images/model-s.jpg";
import BgTwo from "../images/model-x.jpg";
import BgTree from "../images/model-y.jpg";
import SolerPanle from "../images/solar-panel.jpg";
import SolerRoof from '../images/solar-roof.jpg'
import Accessories from '../images/accessories.jpg'
import Header from '../components/Header'

function Home() {
  return (
    <div>
    <Header />
      <Section
        imageBg={BgOne}
        tittle="Model S"
        description="Order Online For Touchless Delivery"
        leftButoon="Custom Order"
        rightButton="Exesting Inventory"
      />
      <Section
        imageBg={BgTwo}
        tittle="Model X"
        description="Order Online For Touchless Delivery"
           leftButoon="Custom Order"
        rightButton="Exesting Inventory"
      />
      <Section
        imageBg={BgTree}
        tittle="Model Y"
        description="Order Online For Touchless Delivery"
           leftButoon="Custom Order"
        rightButton="Exesting Inventory"
      />
      <Section
        imageBg={SolerPanle}
        tittle="Low Cost Soler Panel"
        description="Order Online For Touchless Delivery"
           leftButoon="Custom Order"
        rightButton="Exesting Inventory"
      />
            <Section
        imageBg={SolerRoof}
        tittle="Solar For New Roof"
        description="Order Online For Touchless Delivery"
           leftButoon="Custom Order"
        rightButton="Exesting Inventory"
      />
           <Section
        imageBg={Accessories}
        tittle="Accessories"
        description=""
           leftButoon="Custom Order"

      />
    </div>
  );
}

export default Home;

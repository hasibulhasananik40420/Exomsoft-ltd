import { useState } from "react";
import Root from "./root/Root";
import Header from "./components/Header";
import Services from "./components/Services";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import OurWorkingProcess from "./components/OurWorkingProcess/OurWorkingProcess";
import Faq from "./components/Faq/Faq";
import TeamMember from "./components/TeamMember/TeamMember";
import Footer from "./components/Footer";

function App() {
  return <Root>
    {/* All Section displaid Here */}
    <Header/>
    <Services/>
    <KeyFeatures/>
    <TeamMember/>
    <OurWorkingProcess/>
    <Faq/>
    <Footer/>
  
  </Root>;
}

export default App;

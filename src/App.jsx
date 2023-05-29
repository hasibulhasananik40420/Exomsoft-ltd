import { useState } from "react";
import Root from "./root/Root";
import Header from "./components/Header";
import Services from "./components/Services";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import OurWorkingProcess from "./components/OurWorkingProcess/OurWorkingProcess";
import Faq from "./components/Faq/Faq";
import TeamMember from "./components/TeamMember/TeamMember";

function App() {
  return <Root>
    {/* All Section displaid Here */}
    <Header/>
    <Services/>
    <KeyFeatures/>
    <TeamMember/>
    <OurWorkingProcess/>
    <Faq/>
   
  
  </Root>;
}

export default App;

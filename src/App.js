import './App.css';
import Faq from './Component/Faq';
import Partners from './Component/Partners';
import RoadMap from './Component/RoadMap';
import RugFree from './Component/RugFree';
import Tokonomics from './Component/Tokonomics';
import TopBg from './Component/TopBg';
import WhatIsCosmica from './Component/WhatIsCosmica';
import Footer from './Layout/Footer';

function App() {
  return (
    <div className="">
      <TopBg />
      <WhatIsCosmica />
      <RugFree />
      <RoadMap />
      <Tokonomics />
      <Partners />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

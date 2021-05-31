import React from 'react'
import Faq from '../Component/Faq';
import Partners from '../Component/Partners';
import RoadMap from '../Component/RoadMap';
import RugFree from '../Component/RugFree';
import Tokonomics from '../Component/Tokonomics';
import TopBg from '../Component/TopBg';
import WhatIsCosmica from '../Component/WhatIsCosmica';

const Home = () => {
    return (
        <div>
            <TopBg />
            <WhatIsCosmica />
            <RugFree />
            <RoadMap />
            <Tokonomics />
            <Partners />
            <Faq />
        </div>
    )
}

export default Home

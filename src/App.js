import './App.css';
import AppRouter from './Route/Route'
import Footer from './Layout/Footer';
import { useEffect } from 'react';
import axios from "axios";

function App() {
  // useEffect(()=>{
  //   const getFunct= async()=>{

  //     let get =await fetch('https://api.rivhit.co.il/online/RivhitOnlineAPI.svc/Item.List')
  //     let res =await get.json()
  //     console.log(res)
  //   }
  //   getFunct()
  // },[])
  useEffect(() => {
    axios
    .get(
      "https://api.rivhit.co.il/online/RivhitOnlineAPI.svc/"
    )
    .then((res) => {
        // setCoins(res.data[0]);
        console.log("coins", res);
        
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="">
     <AppRouter />
    </div>
  );
}

export default App;

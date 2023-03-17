import { useState } from "react";
import ExploreCreate from "./ExploreCreate";

const ExploreContext = (props) => {

    const [clickExplore,setClickExplore] = useState(false);

    function updateExplore(data){
        setClickExplore(data);
    }
  
  return (
    <ExploreCreate.Provider value={{ clickExplore,updateExplore}}>
      {props.children}
    </ExploreCreate.Provider>
  );
};

export default ExploreContext;
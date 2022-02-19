import React,{useState} from "react";
import data from "./mocks/data";
import Functions from "./components/functions";
import Select from "./components/select";

function App() {

const [searchedItems,setSearchedItems] = useState(data);
console.log('SEARCHED ITEMS?',searchedItems);

const handleFindItems = (search) => {
 const searchedItems = data.filter(it => it.name.toLowerCase()
    .startsWith(search.toLowerCase()));
  setSearchedItems(searchedItems)
};

  return (
      <>
   <Functions/>
   <Select
   searchedItems={searchedItems}
   handleFindItems={handleFindItems}

   />
   </>
  );
}

export default App;

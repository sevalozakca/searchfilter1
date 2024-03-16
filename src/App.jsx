import "./app.css";
import Users from "./users.js";
import Table from "./Table";
import { useState } from "react";

function App(){
const [query, setQuery]=useState("");
const keys = ["first_name", "last_name", "email"];

const search=(data)=> {
  return data.filter((item)=>
  keys.some((key)=>item[key].toLocaleLowerCase().includes(query)
  
  ));
};

const searchData=search(Users);
const noSearchResults = query && searchData.length === 0;
  return (
  <div className="app">
    <input className="search" placeholder="Search..." onChange={(e)=>setQuery(e.target.value.toLocaleLowerCase())} />
  
    {query === "" && <Table data={Users} />}
      {query !== "" && searchData.length > 0 && <Table data={searchData} />}
      {noSearchResults && <p>No results found.</p>}
  </div>
  
)

}

export default App;

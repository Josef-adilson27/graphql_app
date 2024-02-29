import React from "react";
import UseCharacters from "../useCharacters";
import { Link } from "react-router-dom";
import Search from "../pages/Search";
const CharactersList = () => {
  const { loading, data, error } = UseCharacters();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Smth wrong...</h1>;

  return (
    <div>
     <Search/>
    <div className="list">
      {data.characters.results.map((item) => (
        <div className="items" key={item.id}>
          <img src={item.image} alt=""/>
          <h2>{item.name}</h2>
          <Link to={`/${item.id}`}>
           <button
            style={{border:'none',width:'100px', height:'30px',fontSize:'20px', margin:10}}
           >Details</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CharactersList;

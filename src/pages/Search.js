import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterlocations($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [hideListRender, setHideListRender] = useState(false);
 
  const [getLocations, { loading, data, error}] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    { variables: { name } }
  );
 
  
  // переменная рендера списка
  const ListRender = (
    <>
    {error && <h2>Smth wrong...</h2>}
    {loading && <h2>Loading...</h2>}
      {
      //рендер только тогда, когда data получена и hideListRender true т.е когдо нажата кнопка
     data && 
     hideListRender &&      
        data.characters.results.map((item) => (
          <div key={item.id}>
              <h2>{item.location.name}</h2>
            </div>
          ))
        }
    </>
  );
  
  const texting = (e)=>{
   //когда input пустой то убери ListRender
   !!name&&setHideListRender(false)
   setName(e.target.value)
  }

  const btnFunc = () => {
     //graphql функция для получения списка
      getLocations();   
      // когда input не пустой то покажи ListRender
      setHideListRender(true)
  };

  return (
    <div style={{ padding: 50 }}>
      <input
        style={{ width: 300, height: 30, boxSizing: "border-box" }}
        value={name}
        onChange={(e) => texting(e)}
        type="text"
      />

      <button style={{ height: 30, border: "none" }} onClick={btnFunc}>
        Search
      </button>
      {/* если input не пуст, то !только! по нажитию  кнопки выведи нам ListRender */}
      {!!name&&ListRender}
    </div>
  );
};

export default Search;

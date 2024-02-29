import React from "react";
import UseCharacter from "../useCharacter";
import { useParams } from "react-router";

const Character = () => {
  const { id } = useParams();

  const { loading, data, error } = UseCharacter(id);

  console.log(id);
   console.log(loading, data, error);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Smth wrong...</h1>;

  console.log(data.character.episode);
  return (
    <div>
      <h1>{data.character.id}</h1>
      <h1>{data.character.name}</h1>
      <img src={data.character.image} alt="" />
      <div>
      <h1> <span style={{color:'red'}}>{data.character.name}</span> took part in the following episodes:</h1>
      {
          
        data.character.episode.map(item=>(
          <div key={item.id}>
              <p>{item.name}</p>
          </div>
        ))

      }
      </div>
    </div>
  );
};

export default Character;

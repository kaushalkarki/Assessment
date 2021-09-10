import React from 'react';
import Card from './Card';
import Sdata from './Sdata'; 

function ncard(val){
  return(
    <Card
    key={val.id}
    image= {val.image}
    name ={val.name}
    genre ={val.genre}

    />
  )
}

function App() {
  return(
  <>
  <div className="Outerdiv">
{Sdata.map(ncard)} 
</div>
 
  </>
  );
  

}

export default App;


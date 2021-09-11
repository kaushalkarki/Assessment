import "./Style.css";
import React, { useEffect, useState } from "react";

const GetAnimalInfo = () => {
  const [Animals, setAnimals] = useState([]);
  const [Image, setImage] = useState("affenpinscher");
  const [DogImage, setDogImage] = useState([]);
  const [Breed, setBreed] = useState([]);
  let [BreedImage, setBreedImage] = useState("");

  const GetAnimalApi = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");

    const data = await response.json();

    setAnimals(data.message);
    // console.log(data.message.array);

    // const data=await response.json();
    // console.log(data.message);
  };
  // const GetAnimalImagesApi = async () => {
  //   const response = await fetch(`https://dog.ceo/api/breed/${Image}/images`);

  //   const Idata = await response.json();
  //   setDogImage(Idata.message);
  //   // console.log(Idata.message);
  // };

  const GetBreedApi = async () => {
    let response = await fetch(
      `https://dog.ceo/api/breed/${Image}/${BreedImage}/images`
    );

    if (response.ok) {
      const Bdata = await response.json();
      setBreed(Bdata.message);
      console.log("Breed Api is Working");
    } else {
      console.log(" Breed Api is Not Working");
      response = await fetch(`https://dog.ceo/api/breed/${Image}/images`);
      if (response.ok) {
        const Bdata = await response.json();
        setDogImage(Bdata.message);
        setBreed([]);
        console.log("Main Api is working");
      } else console.log("Main Api is Not Working");
    }
  };

  let animalsCategory = [];
  let imageCategory = [];
  let breedCategory = [];

  useEffect(() => {
    GetAnimalApi();
  }, []);

  // useEffect(() => {
  //   GetAnimalImagesApi();
  // }, [Image]);
  for (const key in Animals) {
    animalsCategory.push(key);
  }

  for (const key in DogImage) {
    imageCategory.push(DogImage[key]);
  }
  for (const key in Breed) {
    breedCategory.push(Breed[key]);
  }
  // console.log(Image);

  // console.log(BreedImage);
//   let y =[];
//   let x;
//   // console.log(Animals);
//   if (Image && BreedImage !== null) {
//     x = breedCategory;
//   } else if (Image || BreedImage === null) {
//     x = imageCategory;
//     // setBreedImage("");
//   }
//   console.log(Array.isArray(Animals[Image]) && Animals[Image].length); // Name of the Selected Breed
//   console.log(BreedImage);
  return (
    <>
      <div id="header">
        <div>
          <select name="animals" id="animals">
            {animalsCategory.map((curElem) => {
              return (
                <option
                  key={curElem}
                  value={curElem}
                  onClick={(e) => setImage(e.target.innerHTML)}
                >
                  {curElem}
                </option>
              );
            })}
          </select>

          {/* <select name="demo" id="demo">
              <option value="Doggy">Doggy</option>
              </select> */}

          <div>
            {Animals[Image] && (
              <select name="category" className="category">
                {/* <option key="None" value="None" selected>None</option> */}
                {Animals[Image].map((curElem) => {
                  return (
                    <option
                      key={curElem}
                      value={curElem}
                      onClick={(e) => {
                        setBreedImage(e.target.innerHTML);
                      }}
                    >
                      {curElem}
                    </option>
                  );
                })}
              </select>
            )}
          </div>

          <button id="but" onClick={GetBreedApi}>
            Get Images
          </button>
        </div>
      </div>

//       {console.log("b =" + breedCategory.length)}
//       {console.log("i=" + imageCategory.length)}

      
      {breedCategory.length <= 0 ? (
        <div className="Container">
          
          {imageCategory.map((value, index) => {
            return (
              <>
                <img src={value} alt="dog pic" className="pic" />
              </>
            );
          })}
        </div>
      ) : (
        <div className="Container">
          {breedCategory.map((value, index) => {
            
            
            return (
              <>
                <img src={value} alt="dog pic" className="pic" />
              </>
            );

          })}
          
        </div>
      )}
    </>
  );
};
export default GetAnimalInfo;

import React, {useState, useEffect} from "react";

 

function App() {
    const [randomDog, setRandomDog] = useState([]);
    

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setRandomDog(data.message);
            
          });
      }, []);

      if (!randomDog) return (
    
            <p>"Loading...."</p>
        
      )

return <img src={ randomDog } alt="A Random Dog" />;
}







export default App;
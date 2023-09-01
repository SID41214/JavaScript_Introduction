function Check(arr) {
    let element = true;
  
    return arr.map(item => {
      if (item === "bridgeon") {
        element = !element;
      }
      return element || false;
    });
  }
  
  const inputArray = ["ef","gfd", "bridgeon","sgdf","sfgb","bridgeon"];
  const result = Check(inputArray);
  console.log(result); 
  
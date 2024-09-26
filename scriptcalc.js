function calculateNormal() {
    // Function to handle empty values and default to 0 if empty
    const parseValue = (id) => {
      const value = document.getElementById(id).value;
      return value ? parseInt(value) : 0; // If value is empty, default to 0
    };
  
    // Fetch values with default to 0 if missing
    const num1 = parseValue("num11");
    const num2 = parseValue("num12");
    const num3 = parseValue("num13");
  
    const num4 = parseValue("num21");
    const num5 = parseValue("num22");
    const num6 = parseValue("num23");
  
    const num7 = parseValue("num31");
    const num8 = parseValue("num32");
    const num9 = parseValue("num33");
  
    const num10 = parseValue("num41");
    const num11 = parseValue("num42");
    const num12 = parseValue("num43");
  
    const num13 = parseValue("num51");
    const num14 = parseValue("num52");
    const num15 = parseValue("num53");
  
    // Calculate the volume, ensuring 0 values are ignored in the math
    let result = (num1 / 100) * (num2 / 100) * (num3 / 100) 
               + (num4 / 100) * (num5 / 100) * (num6 / 100) 
               + (num7 / 100) * (num8 / 100) * (num9 / 100)
               + (num10 / 100) * (num11 / 100) * (num12 / 100)
               + (num13 / 100) * (num14 / 100) * (num15 / 100);
    
    // Update the result on the page
    document.getElementById("result").innerHTML = `Tilavuus: ${result.toFixed(3)} m<sup>3</sup>`;
  }
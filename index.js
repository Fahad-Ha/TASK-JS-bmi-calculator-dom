function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let convertedHeight = (height / 100)^2;
  BMI = ((weight/convertedHeight).toFixed(1));
  alert(`BMI: ${BMI}`);

  // Check for State according to the BMI value
  if (BMI < 18.5) {
    alert("Underweight");
  } else if (BMI >= 18.5 && BMI <= 24.9 ) {
    alert("Healthy Weight");
  } else if (BMI >= 25.0 ) {
    alert("Overweight");
  } else {
    alert("Above Obesity");
  }

  // Check for state according to Age compared to BMI 
  if (age >= 19 && age <= 24) {
    if (BMI >= 19 && BMI <= 24) {
      alert("Healthy");
    }    
  } else if (age >= 25 && age <= 34) {
    if (BMI >= 20 && BMI <= 25) {
      alert("Healthy");
    }
  } else if (age >= 35 && age <= 44) {
    if (BMI >= 21 && BMI <= 26) {
      alert("Healthy");
    }
  } else if (age >= 45 && age <= 54) {
    if (BMI >= 22 && BMI <= 27) {
      alert("Healthy");
    }
  } else if (age >= 55 && age <= 64) {
    if (BMI >= 23 && BMI <= 28) {
      alert("Healthy");
    }
  } else if (age > 65) {
    if (BMI >= 24 && BMI <= 29) {
      alert("Healthy");
    }
  } else {
    alert("Not Healthy");
  }
}


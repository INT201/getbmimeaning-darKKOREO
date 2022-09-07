const { template } = require('@babel/core')

function calculateBMI(weight,height) {
  let calBMI = weight/(height^2)
    return calBMI
}
function getBMIMeaning(weight, height) {
  let BMI = calculateBMI(weight, height)
  let result = ["Underweight","Normal weight","Overweight"]
  if(BMI<18.5){
    return result[0]
  }
  else if(18.5<=BMI && BMI<=24.9){
    return result[1]
  }else{
    return result[2]
  }
}


module.exports = getBMIMeaning
import React, { Component } from 'react';

function getRandomChoice(arr) {
  // return a random element from an getRandomChoice
  const min = 0;
  const max = arr.length;
  const index =  Math.floor(Math.random() * max ) //(max - min) + min);;
  return arr[index];
}

class Prompt extends Component {
  constructor(props) {
    super(props);
    this.person1 = Person();
    this.person2 = Person();
    this.setting = Setting();
  }
  render() {
    return (
      
      
    )
  }
}

function Setting() {
  return {
    timeOfDay: getRandomChoice(["12 am - 4 am", "4 am - 8 am", "8 am - 12 pm", "12 pm - 4 pm", "4 pm - 8 pm", "8 pm - 12 pm"]),
    season: getRandomChoice(["Spring", "Summer", "Fall", "Winter"]),
    buildingType: getRandomChoice(["residential", "government - military", "industrial",
      "medical", "legal", "business", "education", "entertainment", "retail", "religious", "other"]),
    regionType: getRandomChoice(
      ["Large Urban", "Mid-size Urban", "Small Urban",
      "Large Urban", "Mid-size Suburban", "Small Suburban",
      "Large Suburban", "Mid-size Rural", "Small Rural"]),
  }
}

function Person() {
  return({
  gender: getRandomChoice(["male", "female"]),
age: getRandomChoice(["0 - 4", "4 -10", "10 -15", "15 -20", "20 -30", "30 -45", "45 - 60", "60+"]),
  finance: getRandomChoice(["Very Rich", "Rich", "Upper Middle Class", "Middle Class", "Lower Middle Class", "Poor", "Very Poor"]),
})

}
export default Prompt
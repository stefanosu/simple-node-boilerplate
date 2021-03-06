// define your functions like this so they're testable
const sum  = (num1, num2) => {
  return num1 + num2;
};


const timeSlots = [
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
];

const dateFormat = (data) => {
  let date = moment(data.date).format('MM/DD/YYYY');
  return date;
}

const createTime = () => {
  //call axios request to generate time.. but for now a dummy data...
  // get reference to select element
  let sel = document.getElementById('timeSlots');

  // create text node to add to optionion element (option)
  timeSlots.forEach((time) => {
    let opt = document.createElement('option');
    option.appendChild(document.createTextNode(time));
    option.value = time;
    // add option to end of select box (sel)
    sel.appendChild(option);
  })

}

// export default {
//   dateFormat,
//   createTime
// }




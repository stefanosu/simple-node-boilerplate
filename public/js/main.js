const app = document.getElementById('app')
let obj = {};


let settings = {
  selector: "#myCalendar",
  date: new Date(),
  todaysDate: new Date(),
  pastDates: false,
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  onSelect: (data) => {
    let date = dateFormat(data);
    document.getElementById('date').value = date;
  }
};


///eventListeners
// document.getElementById('time').onchange = function (event) {
//   // access text property of selected option
//   console.log(event.target.value);
//   obj["time"] = parseInt(event.target.value)
// }


// document.getElementById('table').onchange = function (event) {
//   // access text property of selected option
//   console.log(event.target.value);
//   obj["slot"] = event.target.value
// }


// document.getElementById('name').onchange = function (event) {
//   // access text property of selected option
//   console.log(event.target.value);
//   obj["name"] = event.target.value
// }


// document.getElementById('submit').onclick = function() {
//   makeReservation()
//   console.log(obj)
// }


///get requests to retrieve reservations 
const getReservations = () => {
    fetch("http://localhost:3000/reservations", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
  .then(resp => {
    let data = resp.data
    let myCalendar = new VanillaCalendar(settings)
    myCalendar.init()
    createTime(); 
  }) 
};


const fetchTimes = () => {
  return fetch('/reservationTime', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then(resp => {
      let data = resp.data;
    }) 
}



const makeReservation = () => {
  // debugger
  let name = `${document.getElementById('first').value} ${document.getElementById('last').value}`
  let time = document.getElementById('date').value;
  
  checkIfReserved 
  fetch('http://localhost:3000/reservations/create',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: name, 
        slot: time 
      }) 
    })
    .then(resp => resp.json())
    .then(console.log(obj));
  }  



//before submit check if the table is reserved if it is alert(reserved)
// make post request to submit reservation to db and create with div(table) 

//create func to check if table is reserved 
//if reserved return table reserved 
//and remove that slot from option 
const checkIfReserved = () => {
  let tables = Array.from(document.getElementById('table'))
  console.log(tables) 
  document.getElementById('table').addEventListener("submit", function(event) {
    event.preventDefault() 
    tables.forEach(table => {
      console.log(table)
      if(table == event.target.id ) {
        console.log('reserved') 
      }
      else {
        console.log(table)
      }
    })
  })
}

getReservations()


  // addTablesToDom = () => { 
  //   let tableDiv = document.getElementById('tables-row')
  //   let div = document.createElement('div')
  //       console.log(div.append(tableDiv))
  //         //add to the dom 
  //     } 
  //     addTablesToDom()


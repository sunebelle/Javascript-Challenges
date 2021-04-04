const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// const items = $(".time-format h1");

const items = document.querySelectorAll(".time-format h1");

// const advanceTime = new Date();
// const advanceYears =advanceTime.getFullYear();
// const advanceMonths = advanceTime.getMonth();
// const advancedDays = advanceTime.getDate();


let newYear = new Date(2023, 0, 1, 00, 00, 00);
// let newYear = new Date(advanceYears+1,advanceMonths,advancedDays,00, 00, 00);
const year = newYear.getFullYear();
const month = months[newYear.getMonth()];
const date = newYear.getDate();
const hours = newYear.getHours();
const minutes = newYear.getMinutes();
const seconds = newYear.getSeconds();

$("h5").text(`Wait to until 0${hours} : 0${minutes} AM, 0${date} ${month} ${year}`);

function waitTime() {
  const newYearTime = newYear.getTime();
  const todayTime = new Date().getTime();
  const time = newYearTime - todayTime;
  let numDays = Math.floor(time / (24 * 60 * 60 * 1000));
  let numHours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let numMinutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  let numSeconds = Math.floor((time % (60 * 1000)) / 1000);

  const value = [numDays, numHours, numMinutes, numSeconds];

  function format(item) {
    if (item < 10) return (item = `0${item}`);
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(value[index]);
  });
  //   $(".days").text(`${numDays}`);
  //   $(".hours").text(`${numHours}`);
  //   $(".minutes").text(`${numMinutes}`);
  //   $(".seconds").text(`${numSeconds}`);

  if (time < 0) {
    clearInterval(countDown);
    // $(".deadline").text("Happy New Year");
    // $(".deadline").addClass("happy-time").removeClass("mt-4 d-flex justify-content-between");

    $(".deadline").html(`<h4 class="happy-time">Happy New Year</h4>`);

    // document.querySelector(".deadline").innerHTML=`<h4 class="happy-time">Happy New Year</h4>`;

  }
}
let countDown = setInterval(waitTime, 1000);

waitTime();



// function currentTime() {
//   let date = new Date();
//   let day =date.getDate(); 
//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   day =updateTime(day);
//   hour = updateTime(hour);
//   min = updateTime(min);
//   sec = updateTime(sec);
//   document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec; 
//   // var t = setTimeout(currentTime, 1000); 
//   let t = setInterval(currentTime, 1000); 
// };

// function updateTime(k) {
//   if (k < 10) {
//     return "0" + k;
//   }
//   else {
//     return k;
//   };
// }

// currentTime();

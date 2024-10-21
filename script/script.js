






const check = document.getElementById("check").value,
        demo = document.getElementById("demo"),
        check2 = document.getElementById("check2").value,
        check3 = document.getElementById("check3").value,
        check4 = document.getElementById("check4").value,
        check5= document.getElementById("check5").value,
        check6 = document.getElementById("check6").value,
        check7 = document.getElementById('check7').value,
        demo1 = document.getElementById("demo1"),
        demo2 = document.getElementById("demo2"),
        demo3 = document.getElementById("demo3"),
        demo4 = document.getElementById("demo4"),
        demo5 = document.getElementById("demo5"),
        demo6 = document.getElementById("demo6"),
        demo7 = document.getElementById("demo7");
function checkbox() {
  
  demo.style.textDecoration = "line-through";

}
function checkbox1() {
    demo1.style.textDecoration = "line-through";
}

function checkbox2() {
    demo2.style.textDecoration = "line-through";
}
function checkbox3() {
    demo3.style.textDecoration = "line-through";
}
function checkbox4() {
    demo4.style.textDecoration = "line-through"
}


function checkbox5() {
  demo5.style.textDecoration = "line-through"
}
function checkbox6() {
  demo6.style.textDecoration = "line-through"
}
function checkbox7() {
  demo7.style.textDecoration = "line-through"
}




function toggle() {
    const sidebar = document.getElementById("sidebar"),
          mainbar = document.getElementById("mainbar"),
          dash = document.getElementById("dash"),
          dash2 = document.getElementById("dash2"),
          dash3 = document.getElementById("dash3"),
          dash4 = document.getElementById("dash4"),
          dash5 = document.getElementById("dash5"),
          dash6 = document.getElementById("dash6"),
          dash7 = document.getElementById("dash7"),
          dash8 = document.getElementById("dash8"),
          dash9 = document.getElementById("dash9"),
          nav_btn = document.getElementById("nav_btn"),
          nav_btn2 = document.getElementById("nav_btn2"),
          nav_btn3 = document.getElementById("nav_btn3"),
          nav_btn4 = document.getElementById("nav_btn4"),
          nav_btn5 = document.getElementById("nav_btn5"),
          nav_btn6 = document.getElementById("nav_btn6"),
          nav_btn7 = document.getElementById("nav_btn7"),
          nav_btn8 = document.getElementById("nav_btn8"),
          nav_btn9 = document.getElementById("nav_btn9");
    mainbar.classList.toggle("clicked2")
    sidebar.classList.toggle("clicked")
    dash.classList.toggle("dashcl")
    dash2.classList.toggle("dashcl")
    dash3.classList.toggle("dashcl")
    dash4.classList.toggle("dashcl")
    dash5.classList.toggle("dashcl")
    dash6.classList.toggle("dashcl")
    dash7.classList.toggle("dashcl")
    dash8.classList.toggle("dashcl")
    dash9.classList.toggle("dashcl")
    nav_btn.classList.toggle("nav_btncl")
    nav_btn2.classList.toggle("nav_btncl")
    nav_btn3.classList.toggle("nav_btncl")
    nav_btn4.classList.toggle("nav_btncl")
    nav_btn5.classList.toggle("nav_btncl")
    nav_btn6.classList.toggle("nav_btncl")
    nav_btn7.classList.toggle("nav_btncl")
    nav_btn8.classList.toggle("nav_btncl")
    nav_btn9.classList.toggle("nav_btncl")
  }









  const xValues = [50,60,70,80,90,100,110,120,130,140,150];
  const yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});




const x_Values = ["Italy", "France", "Spain", "USA", "Argentina"];
const y_Values = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown", "midnightblue", "lightblue", "lightgreen", "lightgrey", "grey", "blueviolet"];

new Chart("mChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    }
  }
});




const x2Values = ["", "", ""];
const y2Values = [50, 60, 50,];
const bar2Colors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("yChart", {
  type: "pie",
  data: {
    labels: x2Values,
    datasets: [{
      backgroundColor: barColors,
      data: y2Values
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});
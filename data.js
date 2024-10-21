const dat = [
        'Jacob',
        53275531,
        "12 May 2017",
        "pending"
]

const dat2 = [
    "Messsy",
    53275532,
    "15 May 2017",
    "In progress"
]
const dat3 = [
    "John",
    53275533,
    "14 May 2017",
    "Fixed"
]

let td_profile1 = ""
let td_vatno1= ""
let td_created1 = ""
let td_status1 = ""
let td_profile2 = ""
let td_vatno2= ""
let td_created2 = ""
let td_status2 = ""



td_profile1 = dat[0]
td_vatno1 = dat[1]
td_created1 = dat[2]
td_status1 = dat[3]
td_profile2 = dat2[0]
td_vatno2 = dat2[1]
td_created2 = dat2[2]
td_status2 = dat2[3]
document.getElementById("td_profile1").innerHTML = td_profile1
document.getElementById("td_vatno1").innerHTML = td_vatno1
document.getElementById("td_created1").innerHTML = td_created1
document.getElementById("td_status1").innerHTML = td_status1
document.getElementById("td_profile2").innerHTML = td_profile2
document.getElementById("td_vatno2").innerHTML = td_vatno2
document.getElementById("td_created2").innerHTML = td_created2
document.getElementById("td_status2").innerHTML = td_status2




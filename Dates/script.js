// // let now = new Date ();
// // console.log(now)
// // let birthday = new Date ('1996-07-22');
// // console.log (birthday.toString()) jour mois date année heure GMT
// // console.log (birthday.toDateString()) jour mois date année
// // console.log(now.toISOString()) truc avec le Z
// // console.log(birthday.toLocaleDateString()) those we know
// // console.log(birthday.toLocaleString()) those we know + hours
// // console.log(now.toLocaleTimeString()) current time hours minutes seconds
// // console.log(now.toString()) Thu Oct 27 2022 09:15:02 GMT+0200 (heure d’été d’Europe centrale)
// // console.log(now.toTimeString()) 09:15:42 GMT+0200 (heure d’été d’Europe centrale)
// // console.log(now.toUTCString()) Thu, 27 Oct 2022 07:16:18 GMT
// // let randomDateTest = new Date ('October 19, 1963');
// // const birthdayDad = randomDateTest.getDate();
// // console.log(birthdayDad)
// // const hourTest = now.getSeconds();
// // console.log(hourTest)
// // console.log(now.getDay())
// // console.log (now.getUTCHours())
// // let christmas1995 = new Date('1995-12-25')
// // let halloween2002 = new Date('2002-10-30')
// // // console.log (christmas1995.getTime())
// // let christmas1995 = new Date('1995-12-25')
// // let halloween2002 = new Date('2002-10-30')

// // console.log((halloween2002.getTime() / 1000) + ' seconds have passed betweeen halloween 2002 and 1/1/1970')
// // console.log((halloween2002.getTime() - christmas1995.getTime()) / (1000 * 60) + ' minutes have passed betweeen halloween 2002 and c')

// // // let halloween2002 = new Date('2002-10-30')
// // let threeDays = 1000 * 60 * 60 * 24 * 3 // 1000 miliseconds * 60 seconds * 60 minutes * 24 hours * 3 days

// // let threeDaysPastHalloween2002 = new Date(
// //   halloween2002.getTime() + threeDays
// // )

// // console.log(threeDaysPastHalloween2002.toString())
// //Exo 1

// let now = new Date ();
// const brussels = document.getElementById('brussels');
// brussels.innerHTML = now.toLocaleString();
// const anchorage = document.getElementById('anchorage');
// let anchorageTime = now.toLocaleString("fr-Be", { timeZone: "America/Anchorage" });
// anchorage.innerHTML = anchorageTime;
// const reykjavik = document.getElementById('reykjavik');
// let reykjavikTime = now.toLocaleString("fr-Be", {timeZone : "Atlantic/Reykjavik"});
// reykjavik.innerHTML= reykjavikTime;
// const saintPetersburg = document.getElementById('saintpetersburg');
// let SPTime = now.toLocaleString("fr-Be",{timeZone: "Europe/Moscow"});
// saintPetersburg.innerHTML =SPTime;

// // Exo 2
// // let now = new Date ();
// // const birthday = new Date ('1996-07-22');
// // // console.log(birthday)
// // // console.log(birthday.getTime());
// // const birthdayMili = birthday.getTime ()
// // // console.log (number)
// // const nowMili = now.getTime();
// // const diff = nowMili-birthdayMili;
// // // console.log(diff)
// // const diffDays = Math.round(diff/(1000*60*60*24));
// // const years = Math.round(diffDays/365)
// // // console.log(diffDays)
// // // console.log(diffDays/365)
// // const txt = document.getElementById('me');
// // txt.innerHTML= diffDays + ' days since I was born (it means '+years+' years)'

// let daysCalculator = () => {
//     let nowi = new Date();
//     let date = document.getElementById('date').value;
//     let dateB = new Date (date)
//     let timeNow =nowi.getTime();
//     let timeb = dateB.getTime();
//     let diff = timeNow - timeb;
//     let result = Math.trunc(diff/(1000*60*60*24))
//     return document.getElementById('solution').innerHTML = result+' Days'
// }
// console.log(daysCalculator())
// // // console.log(daysCalculator+'Day between '+ date+' and now')

// //Exo 3


// let calculateFuturTime = () =>{
// let now = new Date ();
// let nowTime = now.getTime();
// let futurTime = 80000; // hours
// let timeFT = futurTime*60*60*1000
// let plus = nowTime+timeFT
// let FTMfinal = new Date (plus)
// return FTMfinal
// }
// console.log(calculateFuturTime())

// Exo 4

// const dayA = document.getElementsByClassName('day');
// const day = new Date();
// const dayB = day.getDay ()
// if (dayB === 0){
//     return 'Dimanche';
// } else if ( dayB == 1){
//     return 'Monday';
// } else if (dayB == 2){
//     return 'Tuesday';
// } else if (dayB == 3){
//     return 'Wednesday';
// } else if (dayB == 4){
//     return 'Thursday';
// } else if (dayB == 5){
//     return 'Friday';
// } else if (dayB == 6){
//     return 'Saturday',
// } 
// console.log(dayB)

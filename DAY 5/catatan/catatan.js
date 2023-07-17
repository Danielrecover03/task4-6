let test = '';

if (distanceseconds >= 60 && distanceminutes < 60) {
    test = `${distanceminutes} menit`;
} else if (distanceminutes >= 60 && distancehours < 24) {
    test = `${distancehours} jam`;
} else if (distancehours >= 24 && distancedays < 7) {
    test = `${distancedays} hari`;
} else if (distancedays >= 7 && distanceweeks < 4) {
    test = `${distanceweeks} minggu`;
} else if (distanceweeks >= 4 && distancemonths < 12) {
    test = `${distancemonths} bulan`;
} else if (distanceyears >= 12 && distanceyears < 36) {
    test = `${distanceyears} tahun`;
} else {
    test = 'Format waktu tidak valid';
}





//benar

if (startDate > endDate) {
    alert("masukan berapa lama mengerjakan")
}

let timedistance = inputendDate.getTime() - inputstartDate.getTime();

let distancedays = timedistance / (1000 * 60 *60 *24);
let distanceweeks =  Math.floor( day/ 7);
let distancemonths = Math.floor(month / 4);
let distanceyear = Math.floor(year / 12);
let duration = "";


if (distancedays < 7) {
    duration = days + " Hari";
  }else if (distancedays >= 7 && distanceweeks <4 ) {
    duration = distanceweeks + "Minggu";
  }else if (distanceweeks >= 4 && distancemonths <= 12) {
    duration = distancemonths + "bulan";
  }else {
    duration = distanceyear + "tahun"
  }

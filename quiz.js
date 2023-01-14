// QUIZ
// Specyfikacja (aby uzyskać max punktów kod javascript umieść w oddzielnym pliku):
// 1.	Quiz o dowolnej tematyce
// 2.	Baza co najmniej 10 pytań, w tym pytanie otwarte, jednokrotnego wyboru, wielokrotnego wyboru, z wartością liczbową.
// 3.	Sesja to 5 wylosowanych pytania,
// 4.	Timer odliczający czas na wykonanie zadania, wyświetla pozostały do końca czas,
// 5.	Podsumowanie pokazujące ilość uzyskanych punktów,
// 6.	Możliwość powtórzenia quizu.

//zegar
var czas = 10;
var odliczanie = czas;
document.getElementById('czas').innerHTML= czas;
let t1= document.getElementById('time1');
let t2= document.getElementById('time2');
let t3= document.getElementById('time3');
let t4= document.getElementById('time4');
let t5= document.getElementById('time5');
let t6= document.getElementById('time6');
let t7= document.getElementById('time7');
let t8= document.getElementById('time8');
let t9= document.getElementById('time9');
let t10= document.getElementById('time10');
  function timer(){
    t1.style.background="rgb(18, 134, 33)";
    t2.style.background="rgb(18, 134, 33)";
    t3.style.background="rgb(18, 134, 33)";
    t4.style.background="rgb(18, 134, 33)";
    t5.style.background="rgb(18, 134, 33)";
    t6.style.background="rgb(18, 134, 33)";
    t7.style.background="rgb(18, 134, 33)";
    t8.style.background="rgb(18, 134, 33)";
    t9.style.background="rgb(18, 134, 33)";
    t10.style.background="rgb(18, 134, 33)";
    odliczanie--;
    document.getElementById('czas').innerHTML= odliczanie;
    if(odliczanie == 9){
      t10.style.display='none';
    }
    if(odliczanie == 8){
      t9.style.display='none';
    }
    if(odliczanie == 7){
      t8.style.display='none';
    }
    if(odliczanie == 6){
      t7.style.display='none';
    }
    if(odliczanie == 5){
      t5.style.background="rgb(173, 16, 16)";
      t4.style.background="rgb(173, 16, 16)";
      t3.style.background="rgb(173, 16, 16)";
      t2.style.background="rgb(173, 16, 16)";
      t1.style.background="rgb(173, 16, 16)";
      t6.style.display='none';
    }
      if(odliczanie == 4){
        t5.style.display='none';
      }
      else if(odliczanie == 3){
        t4.style.display='none';
      }
      else if(odliczanie == 2){
        t3.style.background="rgb(173, 16, 16)";
        t2.style.background="rgb(173, 16, 16)";
        t1.style.background="rgb(173, 16, 16)";
        t3.style.display='none';
        
      }
      else if(odliczanie == 1){
        t3.style.background="rgb(173, 16, 16)";
        t2.style.background="rgb(173, 16, 16)";
        t1.style.background="rgb(173, 16, 16)";
        t2.style.display='none';
        
      }
      else if(odliczanie == 0){
        t1.style.display='block';
        t2.style.display='block';
        t3.style.display='block';
        t4.style.display='block';
        t5.style.display='block';
          t1.style.background="rgb(18, 134, 33)";
          t2.style.background="rgb(18, 134, 33)";
          t3.style.background="rgb(18, 134, 33)";
          t4.style.background="rgb(18, 134, 33)";
          t5.style.background="rgb(18, 134, 33)";
            zatwierdz();
            odliczanie = czas;
            document.getElementById('czas').innerHTML= odliczanie;
      }
  }
//punkty
var punkty = 0;
var suma = 0;

//pytania
var pyt1 ='5 grudnia 1982 roku ukazało się pierwsze wydanie czasopisma "Wprost", które jest?';
var pyt2 ='6 grudnia obchodzimy w Polsce mikołajki. Kiedyś był to dzień wolny od pracy, ale Kościół katolicki zniósł święto w roku?';
var pyt3 ='7 grudnia 2001 roku premierę miał polski film "Gulczas, a jak myślisz...", w którym zagrali uczestnicy reality show pod tytułem?';
var pyt4 ='8 grudnia 1854 uznano Niepokalane Poczęcie Najświętszej Maryi Panny jako dogmat wiary. Który papież do tego doprowadził?';
var pyt5 ='9 grudnia 1916 roku do obiegu weszła marka polska. Jak nazywała się moneta tej waluty?';
var pyt6 ='Symbolem Japonii jest?';
var pyt7 ='Stolicą Japonii jest?';
var pyt8 ='Buty służą do?';
var pyt9 ='Uszak gęstowłosy to?';
var pyt10 ='Jakim krajem włada Król Julian?';

//baza odpowiedzi
//p1
var p1= 'dziennikiem';
var p2= 'tygodnikiem';//true
var p3= 'miesięcznikiem';
//p2
var p4= '1953';
var p5= '1969';//true
var p6= '1985';
//p3
var p7= 'Warsaw Shore: Ekipa z Warszawy';
var p8= 'Hotel Paradise';
var p9= 'Big Brother';//true
//py4
var p10= 'Pius IX';//true
var p11= 'Grzegorz XVI';
var p12= 'Leon XIII';
//p5
var p13= 'cekin';
var p14= 'srebrnik';
var p15= 'fenig';//true
//p6
var p16 ='kwiat bzu';
var p17 ='kwitnąca wiśnia'; //true
var p18 ='liść klonu';
//p7
var potwarte1 ='tokio'; //true
//p8
var p19 ='Biegania';//true
var p20 ='Chodzenia';//true
var p21 ='Mieszania nimi bigosu';
//p9
var p22 ='smaczny grzyb jadalny'; //true
var p23 ='nowozelandzki puszysty zając';
var p24 ='mały miś';
//p10
var potwarte2 ='madagaskar'; //true
//baza odpowiedzi
const odpowiedzi = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24];

//baza pytan
const bpytan = [pyt1,pyt2,pyt3,pyt4,pyt5,pyt6,pyt7,pyt8,pyt9,pyt10];
//cache pytan wylosowanych
const wylosowanePytania = []; 

let licznik='';

//losowanie pytan
function losowanie(){ 
  for (let i = bpytan.length - 1; i > 0; i--) {
    const los = Math.floor(Math.random() * (i + 1));
    [bpytan[i], bpytan[los]] = [bpytan[los], bpytan[i]];
  }
  
}
let countp = 1;
  function wylosuj(){
    document.getElementById("nadpytanie").textContent = 'Pytanie ' + countp ;
    licznik= setInterval(timer, 1000);
    document.getElementById('pytanie').style.height= '52px';
    document.getElementById('pytanie').style.marginTop= '10px';
    document.getElementById('send').style.display='block';
    document.getElementById('send').setAttribute('onclick','zatwierdz()')
    losowanie();
      if(wylosowanePytania.length < 5){ //ilosc pytan wyswietlonych
        for(numerPyt=0;numerPyt<bpytan.length; numerPyt++){
          wylosowanePytania.push(bpytan[numerPyt]);
        }
      }
    pytania();
    document.getElementById('los').style.display= 'none'
  }
//liczba pytan
let p = 0;
//pokazuje pytanie
function pytania(){
  document.getElementById("pytanie").textContent = wylosowanePytania[p];
  odp();
}
//kolejne pytanie
function zatwierdz(){
//nowe pytanie
p++;
countp++;
document.getElementById("nadpytanie").textContent = 'Pytanie '+ countp;
sprawdzanie(); //sprawdza odpowiedzi
//czysci pola
document.getElementById('jedenWybor1').checked = false;
document.getElementById('jedenWybor2').checked = false;
document.getElementById('jedenWybor3').checked = false;
document.getElementById('kilkaWyborow1').checked = false;
document.getElementById('kilkaWyborow2').checked = false;
document.getElementById('kilkaWyborow3').checked = false;
document.getElementById('otwarte').value = '';

  //czas
  if(p == 5){
  //wstrzymanie licznik
    clearInterval(licznik);
  //sumowanie punktów
    document.getElementById("pytanie").textContent = '';
    document.getElementById("pytanie").style.height = '0px';
    document.getElementById("nadpytanie").textContent = 'Zdobyłeś/aś '+ punkty +' punktów';
    document.getElementById("ponow").style.display = ("block");
    document.getElementById('send').style.display='none';
    document.getElementById('send').removeAttribute('onclick');
  //czysczenie licznika
    var czas = '';
    odliczanie = czas;
    document.getElementById('czas').innerHTML= czas;
    t1.style.display='none';
    t2.style.display='none';
    t3.style.display='none';
    t4.style.display='none';
    t5.style.display='none';
    t6.style.display='none';
    t7.style.display='none';
    t8.style.display='none';
    t9.style.display='none';
    t10.style.display='none';
    t1.style.background="black";
    t2.style.background="black";
    t3.style.background="black";
    t4.style.background="black";
    t5.style.background="black";
    t6.style.background="black";
    t7.style.background="black";
    t8.style.background="black";
    t9.style.background="black";
    t10.style.background="black";
    document.getElementsByClassName('timebar')[0].style.display='none';
    document.getElementsByClassName('licz')[0].style.border='none';
  }

  else{ 
  //pokazywanie pytania
    document.getElementById("pytanie").textContent = wylosowanePytania[p];
  //reset licznika co pytanie
    var czas = 10;
    odliczanie = czas;
    document.getElementById('czas').innerHTML= czas;
    t1.style.display='block';
    t2.style.display='block';
    t3.style.display='block';
    t4.style.display='block';
    t5.style.display='block';
    t6.style.display='block';
    t7.style.display='block';
    t8.style.display='block';
    t9.style.display='block';
    t10.style.display='block';
    t1.style.background="rgb(18, 134, 33)";
    t2.style.background="rgb(18, 134, 33)";
    t3.style.background="rgb(18, 134, 33)";
    t4.style.background="rgb(18, 134, 33)";
    t5.style.background="rgb(18, 134, 33)";
    t6.style.background="rgb(18, 134, 33)";
    t7.style.background="rgb(18, 134, 33)";
    t8.style.background="rgb(18, 134, 33)";
    t9.style.background="rgb(18, 134, 33)";
    t10.style.background="rgb(18, 134, 33)";
  }
  odp();
}


//odpowiedzi wyswietlanie
function odp(){
  odpo= document.getElementById('pytanie').innerHTML;
  switch (odpo) {
    case '5 grudnia 1982 roku ukazało się pierwsze wydanie czasopisma "Wprost", które jest?':
      document.getElementById("jednaOdp").style.display = ("block");
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("none");
      document.getElementById('jedenWybor1').value = p1;
      document.getElementById('jedenWybor2').value = p2;
      document.getElementById('jedenWybor3').value = p3;
      document.getElementById('labelJedenWybor1').innerHTML = p1;
      document.getElementById('labelJedenWybor2').innerHTML = p2;
      document.getElementById('labelJedenWybor3').innerHTML = p3;

      
      break;
    case '6 grudnia obchodzimy w Polsce mikołajki. Kiedyś był to dzień wolny od pracy, ale Kościół katolicki zniósł święto w roku?':
      document.getElementById("jednaOdp").style.display = ("block");
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("none");
      document.getElementById('jedenWybor1').value = p4;
      document.getElementById('jedenWybor2').value = p5;
      document.getElementById('jedenWybor3').value = p6;
      document.getElementById('labelJedenWybor1').innerHTML = p4;
      document.getElementById('labelJedenWybor2').innerHTML = p5;
      document.getElementById('labelJedenWybor3').innerHTML = p6;      

      break;
    case '7 grudnia 2001 roku premierę miał polski film "Gulczas, a jak myślisz...", w którym zagrali uczestnicy reality show pod tytułem?':
      document.getElementById("jednaOdp").style.display = ("block");
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("none");
      document.getElementById('jedenWybor1').value = p7;
      document.getElementById('jedenWybor2').value = p8;
      document.getElementById('jedenWybor3').value = p9;
      document.getElementById('labelJedenWybor1').innerHTML = p7;
      document.getElementById('labelJedenWybor2').innerHTML = p8;
      document.getElementById('labelJedenWybor3').innerHTML = p9;      

      break;
    case '8 grudnia 1854 uznano Niepokalane Poczęcie Najświętszej Maryi Panny jako dogmat wiary. Który papież do tego doprowadził?':
      document.getElementById("jednaOdp").style.display = ("block");
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("none");
      document.getElementById('jedenWybor1').value = p10;
      document.getElementById('jedenWybor2').value = p11;
      document.getElementById('jedenWybor3').value = p12;
      document.getElementById('labelJedenWybor1').innerHTML = p10;
      document.getElementById('labelJedenWybor2').innerHTML = p11;
      document.getElementById('labelJedenWybor3').innerHTML = p12;      

      break;
    case '9 grudnia 1916 roku do obiegu weszła marka polska. Jak nazywała się moneta tej waluty?':
      document.getElementById("jednaOdp").style.display = ("block");
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("none");
      document.getElementById('jedenWybor1').value = p13;
      document.getElementById('jedenWybor2').value = p14;
      document.getElementById('jedenWybor3').value = p15;
      document.getElementById('labelJedenWybor1').innerHTML = p13;
      document.getElementById('labelJedenWybor2').innerHTML = p14;
      document.getElementById('labelJedenWybor3').innerHTML = p15;      

      break;
    case 'Symbolem Japonii jest?':
      document.getElementById("jednaOdp").style.display = ("block");
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("none");
      document.getElementById('jedenWybor1').value = p16;
      document.getElementById('jedenWybor2').value = p17;
      document.getElementById('jedenWybor3').value = p18;
      document.getElementById('labelJedenWybor1').innerHTML = p16;
      document.getElementById('labelJedenWybor2').innerHTML = p17;
      document.getElementById('labelJedenWybor3').innerHTML = p18;      

      break;
    case 'Stolicą Japonii jest?':
      document.getElementById("jednaOdp").style.display = ("none");
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("block");      

      break;
    case 'Buty służą do?':
      document.getElementById("kilkaOdp").style.display = ("block");
      document.getElementById("jednaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("none");
      document.getElementById('kilkaWyborow1').value = p19;
      document.getElementById('kilkaWyborow2').value = p20;
      document.getElementById('kilkaWyborow3').value = p21;
      document.getElementById('labelKilkaWyborow1').innerHTML = p19;
      document.getElementById('labelKilkaWyborow2').innerHTML = p20;
      document.getElementById('labelKilkaWyborow3').innerHTML = p21;      

      break;
    case 'Uszak gęstowłosy to?':
      document.getElementById("jednaOdp").style.display = ("block");
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("none");
      document.getElementById('jedenWybor1').value = p22;
      document.getElementById('jedenWybor2').value = p23;
      document.getElementById('jedenWybor3').value = p24;
      document.getElementById('labelJedenWybor1').innerHTML = p22;
      document.getElementById('labelJedenWybor2').innerHTML = p23;
      document.getElementById('labelJedenWybor3').innerHTML = p24;      
      break;
    case 'Jakim krajem włada Król Julian?':
      document.getElementById("jednaOdp").style.display = ("none");
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("block"); 

      break;
    case '':
      document.getElementById("kilkaOdp").style.display = ("none");
      document.getElementById("jednaOdp").style.display = ("none");
      document.getElementById("wpisz").style.display = ("none");
      break;
  }

}

function sprawdzanie(){
  spr= document.getElementById('pytanie').innerHTML;
  switch (spr) {
    case '5 grudnia 1982 roku ukazało się pierwsze wydanie czasopisma "Wprost", które jest?':
      if(document.getElementById('jedenWybor2').checked == true){
        punkty++;
      }
      break;
    case '6 grudnia obchodzimy w Polsce mikołajki. Kiedyś był to dzień wolny od pracy, ale Kościół katolicki zniósł święto w roku?':
      if(document.getElementById('jedenWybor2').checked == true){
        punkty++;
      }

      break;
    case '7 grudnia 2001 roku premierę miał polski film "Gulczas, a jak myślisz...", w którym zagrali uczestnicy reality show pod tytułem?':
      if(document.getElementById('jedenWybor3').checked == true){
        punkty++;
      }

      break;
    case '8 grudnia 1854 uznano Niepokalane Poczęcie Najświętszej Maryi Panny jako dogmat wiary. Który papież do tego doprowadził?':
      if(document.getElementById('jedenWybor1').checked == true){
        punkty++;
      }
   

      break;
    case '9 grudnia 1916 roku do obiegu weszła marka polska. Jak nazywała się moneta tej waluty?':
      if(document.getElementById('jedenWybor3').checked == true){
        punkty++;
      }
    

      break;
    case 'Symbolem Japonii jest?':
      if(document.getElementById('jedenWybor2').checked == true){
        punkty++;
      }
   

      break;
    case 'Stolicą Japonii jest?':
      if((document.getElementById('otwarte').value == 'Tokio') || (document.getElementById('otwarte').value == 'tokio')){
        punkty++;
      }
      break;
    case 'Buty służą do?':
      if((document.getElementById('kilkaWyborow1').checked == true) && (document.getElementById('kilkaWyborow2').checked == true)){
        punkty++;
      }
      break;
    case 'Uszak gęstowłosy to?':
      if(document.getElementById('jedenWybor1').checked == true){
        punkty++;
      }
      break;
    case 'Jakim krajem włada Król Julian?':
      if((document.getElementById('otwarte').value == 'Madagaskar') || (document.getElementById('otwarte').value == 'madagaskar')){
        punkty++;
      }
      break;

  }
}
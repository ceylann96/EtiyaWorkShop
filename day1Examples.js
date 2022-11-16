//  SORU 1
function asal(...numbers) {
    numbers.forEach(number => {
      let asalMi = true;
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          asalMi = false;
          break;
        }
      }
      if (asalMi) {
        console.log(number + " : asaldır");
      }
      else {
        console.log(number + " :  asal degildir")
      }
    })
  }
  asal(5, 7, 8, 9, 13, 27);
  console.log("---------------------------------------")
  
  
  // SORU 2
  function arkadasSayilar(sayi1, sayi2) {
    let toplam1 = 0;
    let toplam2 = 0;
    for (let i = 1; i < sayi1; i++) {
      if (sayi1 % i == 0) {
        toplam1 += i;
      }
    }
    for (let i = 1; i < sayi2; i++) {
      if (sayi2 % i == 0) {
        toplam2 += i;
      }
    }
  
    if (toplam1 == sayi2 && toplam2 == sayi1) {
      console.log(sayi1 + " " + sayi2 + " arki sayılardır")
    }
    else console.log(sayi1 + " " + sayi2 + " arki sayı degildirler")
  }
  arkadasSayilar(220, 284)
  
  console.log("---------------------------------------")
  
  // SORU 3
  
  function mükemmelSayi(sayi){
    let toplam=0;
    for(let i=1; i<=sayi; i++){
      if(sayi % i == 0) {
        toplam+=i;
      }
    }
    if(toplam== (2*sayi)) console.log(sayi +" mükemmel sayıdır");
    else console.log(sayi +" mükemmel sayı degildir");
  }
  mükemmelSayi(6)
  
  console.log("---------------------------------------")
  
  // SORU 4
  
  function asalSayilar(){
    for(let sayi=2; sayi<1000; sayi++){
      let asal=true;
      for(let i=2; i<sayi; i++){
        if(sayi%i == 0){
          asal=false;
          break;
        }
      }
      if(asal){
        console.log(sayi)
      }
    }
  }
  asalSayilar()
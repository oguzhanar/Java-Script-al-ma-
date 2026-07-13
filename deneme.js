// document.writeln("oguzhan ar");
// document.write("oziko ssssss <br>");
// document.write(435);


// KONSOL KODLARI
// console.log("hello world");
// console.log("oguzhan ar");
// console.log(4.87);
// console.log(true);
// console.log({name:"oguzhan", surname:"ar"});  //obje oluşturdu

// // console.clear()  konsolu temizler
// let a=5;
// let b=10;
// console.log(a+b)
// console.log("iki sayının toplamı :", + (a+b))
// console.log("iki sayının toplamı :", a+b)


// console.log(window);
// alert("burayı terk et")

// let a= 10
// let b= 5
// alert("iki sayının çarpımı : " + (a*b))

// console.warn("Dikkat Et");
// console.error("Hata");
// console.log(location.port);

//var : function scope

// function selamVer(){
//     var selam = "herkese selam"
//     if (true){
//         var b= 10;
//         console.log(b);
//         console.log(selam)
//     }

// }
// selamVer();


//* ---------------------------STRİNG VERİ TİPİ--------------------------------------
// let isim = "Oğuzhan bu sene 20 yaşında olcak"  string oldugu icin tırnak işareti lazım
// console.log(isim);
// console.log(typeof isim); //hangi veri tipinde oldugunu yazar (burdaki string)
//
// let sayi1 = 10; //sayı olduğu için tırnak işareti gerekmez

// console.log(sayi1);
// console.log(typeof sayi1) //veri tipi number

//* ---------------------------NUMBER VERİ TİPİ--------------------------------------
// let a = "5";
// let b = "2";
// console.log(a+b);
//52 sonucunu verir çünkü string tipi oldugu icin toplamaz birleştirir.

//string ve number toplama işlemine girine sistem toplayamaz ve yan yana yazar
// let soru = "Yaşınız: ";
// let cevap = 23;
// console.log(soru+cevap)
// 

//*---------------------------BOOLEAN VERİ TİPİ--------------------------------------
//boolean: true ve falsetan olusur. 
// let a = 3;
// let b = 12;
// let sonuc = a+b;
// console.log(sonuc>15) //false 
//* ---------------------------NULL VERİ TİPİ--------------------------------------

// let a = null;
// console.log(a) //null

// let b = null;
// b = 12;
// console.log(b) //output 12 verir 
//*---------------------------UNDEFİNED VERİ TİPİ--------------------------------------

// let a;

// console.log(a); değer atamadığımız için undefined 
// console.log(typeof a); 

//*---------------------------OBJECT VERİ TİPİ--------------------------------------

// let insan = {
//     isim : "Oğuzhan",
//     soyisim : "Ar",
//     yas : 20,
// }
// console.log(insan)
// console.log(typeof insan)


//let rakamlar = [1,2,3,4,5];  
//console.log(typeof rakamlar) **object veri tipi

//*---------------------------FUNCTİON VERİ TİPİ--------------------------------------
// let func = function(){
//     console.log("Merhaba");
// }
// func();
// console.log(typeof func) **function veri tipi 



//!------------------------------------ARİTMETİK OPERATÖRLER------------------------------- 

//*--------------------------- (+) OPERATORU --------------------------------------

// console.log(5+3);

// let note1 = 50;
// let note2 = 20.5;

// let sayi1 = "5";
// let sayi2 = 2;
// console.log(sayi1 + sayi2); //konsolda 52 yazar çünkü string ve number toplanmaz birleştirilir  

// console.log(note1 + note2);


//*--------------------------- (*) OPERATORU --------------------------------------

// let sayi1 = 10;
// let sayi2 = 23.6;

// console.log(sayi1*sayi2);

//*--------------------------- (/) OPERATORU --------------------------------------

// let note1 = 100
// let note2 = 70 

// let sonuc = (note1 + note2)/2 
// console.log(sonuc)

//*-------------------- (%) MOD ALMA OPERATORU (kalanı bulmak icin)-----------------

/**
 10/3 = kalan 1
 12/5 kalan 2 
 */

// console.log(10%3); //konsolda 1 yazıyor


//*------------------------------ (--)(++) OPERATORLERI---------------------------
//++ bir arttırmak icin -- bir azaltmak icin 
// let a = 10;
// a++;//11
// a++;//12
// a++;//13
// a--;//12
// console.log(a); //output 12 veriyor  

//*------------------------------ (**) ÜS ALMA OPERATORLERI---------------------------

//console.log(2**5)




//?--------------------------------ATAMA OPERATORLERİ----------------------------------


//*---------------------------------(==) OPERATORU-------------------------------------
// == : eşittir 
// console.log(5==4) //false yazar çünkü eşit değil 
// let a = 5;
// let b = 4;
// let sonuc = a+b;
// console.log(sonuc==10); //false yazar eşitlik yok 

//console.log(3=="3") true cünkü veri tipinin önemi yok içindeki değer önemli


//*---------------------------------(===) OPERATORU-------------------------------------
//hem tiplerin hemde değerlerinin eşit olup olmadığına bakar 

// console.log(5===5); true çünkü hepsi eşit
// console.log(5==="5") false çünkü veri tipleri aynı değil (number ve)

//*---------------------------------(+=) OPERATORU-------------------------------------

// let sayi = 4;
//  //sayi = sayi +2; uzun yol 
// sayi+=2 
// console.log(sayi);

//*---------------------------------(-=) OPERATORU-------------------------------------

// let sayi = 4;
// sayi-=3; 
// console.log(sayi)  output 1 verir 


//*---------------------------------(/=) OPERATORU-------------------------------------

// let sayi = 10;
// sayi /= 3; 
// console.log(sayi) //output 3.3333 

//*---------------------------------(%=) OPERATORU-------------------------------------

// let sayi = 12;
// sayi %= 5;
// console.log(sayi)

//*--------------------------------MANTIK OPERATORLERİ----------------------------------

//*---------------------------------(&&) VE OPERATORU-------------------------------------
// VE anlamına gelir yan yana yazılan olaylardan 1 tane false olsa bile output false çıkar. 
// let yas = 20;
// let para = 3500;
// let saglikliMi = false;
// console.log(yas>18 && para>3000 && saglikliMi==true)   //false olarak gelir çünkü sağlık kısmında false var

//*---------------------------------(||) VEYA OPERATORU-------------------------------------
// 9 tane False 1 tane True olsa bile sonuc True çıkar 

// console.log(5>2 || 4>5 || 3>7); true çıkar çünkü 5>2 true değeri veriyor

//*---------------------------------(!) DEĞİL OPERATORU-------------------------------------
//tersini alır 5 3 ten büyük True çıkar ama True değerini tersine çeviri 

// console.log( !(5>3) );



// let yas = 20;
// let para = 3500;
// let saglikliMi = false;
// let hakSayisi = 3;
// console.log((para>3000 && hakSayisi>1) || (yas>18 && saglikliMi)) //sol taraf true sağ taraf false çıkar ama arada veya oldugu icin output true çıkar





/*
?--------------------------------------DİYALOG KUTULARI--------------------------------------------
    -ALERT
    -PROMPT
    -CONFİRM
*/

//console.log(window);

//?---------------------------------ALERT KUTUSU------------------------------------
//alert("zırtttttt") 

//?---------------------------------PROMPT KUTUSU------------------------------------

// let isim = prompt("isminizi giriniz :");
// let yas = prompt("yaşınızı giriniz :");


// console.log("İsminiz :"+ isim);
// console.log("Yasınız :"+ yas );

//?---------------------------------CONFIRM KUTUSU------------------------------------

// let sonuc = confirm("Silmek istediğinize emin misiniz");
// console.log (sonuc);


/*
?--------------------------------------KOŞUL YAPILARI--------------------------------------------

if(koşul){
    kodlar
}
else{
    kodlar    
}
*/

//!---------KOŞUL YAPILARI


// let not = 23;
// if(not>=50){
//     console.log("Geçtiniz, notunuz :" + not);
// }
// else{
//     console.log("Kaldınız, notunuz :" + not)
// }

// let yas = Number (prompt("Yaşınız :")); //promptan gelen yaş string formatında geleceği için number classına alıp gelen değeri number formatına çeviriyoruz
// let para = Number (prompt("Bütçeniz :"))

// // console.log(typeof yas);
// // console.log(typeof para);

// if(yas>=18 && para>=3000){
//     alert("Ehliyet sınavına katılabilirsiniz")
// }
// else{
//     alert("Ehliyet sınavına katılamazsınız")
// };


//*------------ORTALAMA BULMA
// vize1 %30  vize2 %30  final %40

// let vize1 = Number(prompt("1. Vize notunuzu giriniz :"));
// let vize2 = Number(prompt("2. Vize notunuzu giriniz :"));
// let final = Number(prompt("Final notunuzu giriniz :"));

// let ortalama = (vize1*0.3) + (vize2*0.3)+ (final*0.4);
// if(ortalama>=50){
//     alert("Dersi geçtiniz " + ortalama)
//     console.log("Dersi geçtiniz " + ortalama)
// }else{
//     alert("Amk beyinsizi kaldın " + ortalama)
//     console.log("Amk beyinsizi kaldın " + ortalama)
// }



/*
? --------------- IF, ELSE IF, ELSE YAPISI
if(koşul){
    kodlar
}
else if{
    kodlar    
}
else if{
    kodlar    
}
else{
    kodlar
}
*/


// let vize1 = Number(prompt("1. Vize notunuzu giriniz :"));
// let vize2 = Number(prompt("2. Vize notunuzu giriniz :"));
// let final = Number(prompt("Final notunuzu giriniz :"));
// let ortalama = (vize1*0.3) + (vize2*0.3)+ (final*0.4);

// if(ortalama>=90){
//     alert("Dersi geçtiniz. Harf notunuz : A, ortalamanız : " +ortalama)
// }
// else if(ortalama<90 && ortalama>=80){
//     alert("Dersi geçtiniz. Harf notunuz : B, ortalamanız : " +ortalama)
// }  
// else if(ortalama<80 && ortalama>=70){
//     alert("Dersi geçtiniz. Harf notunuz : c, ortalamanız : " +ortalama)
// }
// else if(ortalama<70 && ortalama>=60){
//     alert("Dersi geçtiniz. Harf notunuz : D, ortalamanız : " +ortalama)
// }
// else if(ortalama<60 && ortalama>=50){
//     alert("Dersi geçtiniz. Harf notunuz : E, ortalamanız : " +ortalama)
// }
// else{
//     alert("Dersten kaldınız. Harf notunuz : F, ortalamanız : " + ortalama)
// }


/*
?------------------------ÇOKLU IF YAPISI
if(koşul){
    kodlar
}
if(koşul){
    kodlar
}
if(koşul){
    kodlar
}

*/


//!------------------------VÜCUT KİTLE ENDEKSİ İF ELSE ÇALIŞMA SORUSU 

// let kilo = Number(prompt("Kilonuzu giriniz : "));
// let boy = Number(prompt("Boyunuzu giriniz : "));
// let sonuc = kilo/(boy*2);

// if(sonuc<18.5){
//     alert("İdeal kilonun altındasınız " +sonuc)
// }
// else if(sonuc>=18.5 && sonuc<=24.9){
//     alert("İdeal kilodasınız" +sonuc)
// }
// else if(sonuc>=25 && sonuc<=29.9){
//     alert("İdeal kilonun üstündesiniz " +sonuc)
// }
// else if(sonuc>=30 && sonuc<=39.9){
//     alert("İdeal kilonun çok üstündesiniz (obezite) " +sonuc ) 
// }
// else if(sonuc>=40){
//     alert("İdeal kilonun çok üstündesiniz (morbid obez) " +sonuc)
// }

//!------------------------------BENZİN İSTASYONU ÖRNEK

// let dizel = 24.53  , benzin = 22.25, LPG = 11.1;
// const yeniSatir = "\r\n";
// const yakitMetni = "1-Dizel, Litre Fiyatı: 24.53 " +yeniSatir 
// +"2-Benzin, Litre Fiyatı: 22.25" +yeniSatir
// +"3-LPG, Litre Fiyatı: 11.1" +yeniSatir
// +"Yakıt türünü seçiniz : ";

// let yakitTipi = prompt(yakitMetni);
// if(yakitTipi=="1"|| yakitTipi=="2"|| yakitTipi=="3"){
// let yakitLitresi = Number (prompt("Yakıt litresini giriniz : "))
// let bakiye = Number (prompt("Bakiyenizi giriniz : "))


//     if(yakitTipi=="1"){
//         let odenecekTutar = yakitLitresi*dizel
//         if(odenecekTutar<bakiye){
//             bakiye = bakiye-odenecekTutar
//             alert("Yakıt alma işlemi başarılı. Tekrar görüşmek üzere" + yeniSatir
//             +"Kalan Bakiye : " +(bakiye))
            
//     }
//     else{
//         alert("Bakiyeniz yeterli değil" +yeniSatir
//         +"Ödenecek Tutar : " + odenecekTutar +yeniSatir
//         +"Bakiye : " + bakiye +yeniSatir
//         +"Eksik Tutar : " + (odenecekTutar-bakiye))
//         }

//     }   
//     else if(yakitTipi=="2"){
//         let odenecekTutar = yakitLitresi*benzin
//         if(odenecekTutar<bakiye){
//             bakiye = bakiye-odenecekTutar
//             alert("Yakıt alma işlemi başarılı. Tekrar görüşmek üzere" + yeniSatir
//             +"Kalan Bakiye : " +(bakiye))
        
//     }
//     else{
//         alert("Bakiyeniz yeterli değil" +yeniSatir
//         +"Ödenecek Tutar : " + odenecekTutar +yeniSatir
//         +"Bakiye : " + bakiye +yeniSatir
//         +"Eksik Tutar : " + (odenecekTutar-bakiye))
//         }
// }
// else if(yakitTipi=="3"){
//     let odenecekTutar = yakitLitresi*LPG   
//     if(odenecekTutar<bakiye){
//         bakiye = bakiye-odenecekTutar
//         alert("Yakıt alma işlemi başarılı. Tekrar görüşmek üzere" + yeniSatir
//         +"Kalan Bakiye : " +(bakiye))
        
//     }
//     else{
//         alert("Bakiyeniz yeterli değil" +yeniSatir
//         +"Ödenecek Tutar : " + odenecekTutar +yeniSatir
//         +"Bakiye : " + bakiye +yeniSatir
//         +"Eksik Tutar : " + (odenecekTutar-bakiye))
//         }

// }




// }
// else{
//     alert("Lütfen geçerli bir yakıt numarası seçin")
// }



/*
?-------------------------SWITCH CASE-------------------

switch(deger){

    case1:
        kodlar
    break;

    case2:
        kodlar
    break;

    case3:
        kodlar
    break;

    default:
        kodlar
    break;
}  */

//!-----------------CASE ÖRNEK 

// let sayi = prompt("1 ile 5 arasında bir sayı giriniz")

// switch(sayi){

//     case"1":
//         console.log("girilen sayı 1dir")
//     break;

//     case"2":
//         console.log("girilen sayı 2dir")
//     break;

//     case"3":
//         console.log("girilen sayı 3tür")
//     break;

//     case"4":
//         console.log("girilen sayı 4tür")
//     break;

//     case"5":
//         console.log("girilen sayı 5tir")
//     break;

//     default:
//         console.log("okuma yazman yok mu oevladı 1 ve 5 arası gireceksin")
//     break;
//}



//!-----------------CASE ÖRNEK 2

// let yeniSatir = "\r\n"
// let gun = "1-Pazartesi" +yeniSatir
// +"2-Salı" + yeniSatir
// +"3-Çarşamba" + yeniSatir
// +"4-Perşembe" + yeniSatir
// +"5-Cuma" + yeniSatir
// +"6-Cumartesi" +yeniSatir
// +"7-Pazar" +yeniSatir   
// +"Lütfen gelmek istediğiniz günü 1 ile 7 arasında seçin"

// let deger = prompt(gun);
// switch(deger){
//     case"1":
//         alert("Pazartesi gününü seçtiniz");
//         break;

//     case"2":
//         alert("Salı gününü seçtiniz");
//         break;

//     case"3":
//         alert("Çarşamba gününü seçtiniz");
//         break;
    
//     case"4":
//         alert("Perşembe gününü seçtiniz");
//         break;

//     case"5":
//         alert("Cuma gününü seçtiniz");
//         break;

//     case"6":
//         alert("Cumartesi gününü seçtiniz");
//         break;

//     case"7":
//         alert("Pazar gününü seçtiniz");
//         break;

//     default:
//         alert("1 ile 7 arasında seçeceksin aşkım")

// }



// !  ----------------SWITCH CASE ATM ÖRNEGİ  parayı çekebilmek için ihtiyacınız olan tutar: "+ (cekilecekTUtar-bakiye)
/*
1-bakiye görüntüleme
2-para çekme
3-para yatırma 
4-çıkış  */

// let yeniSatir= "\r\n"
// let bakiye = 2000 


// let metin= "1-Bakiye Görüntüleme"+ yeniSatir
// +"2-para çekme"+yeniSatir
// +"3-para yatırma"+yeniSatir
// +"4-çıkış"+yeniSatir
// +"Lütfen yapmak istediğiniz işlemi seçin"+yeniSatir

// let secim = prompt(metin);

// switch(secim){
//     case"1":
//         alert("Bakiyeniz " +bakiye);
//         break;

//     case"2":
//         let cekilecekTutar = Number (prompt("çekmek istediğiniz tutarı girin : "));
//         if(cekilecekTutar<bakiye){
//             bakiye = bakiye-cekilecekTutar
//             alert("para çekme işlemi başarılı. Kalan bakiyeniz : "+ bakiye)
//         }else{
//             alert("para çekme işlemi başarısız. Güncel bakiyeniz :" +bakiye + " " + yeniSatir 
//                 + "cekmek istediginiz tutar : " + cekilecekTutar +yeniSatir
//             + "eksik olan tutar : " + (cekilecekTutar-bakiye));}
//         break;

//     case"3":
//         let paraYatirma = Number(prompt("yatırmak istediğiniz tutarı giriniz: "))
//         bakiye=bakiye+paraYatirma
//         alert("hesabınızdaki yeni bakiye: "+bakiye +yeniSatir
//             +"Hesabınızdaki eski bakiye : " + (bakiye-paraYatirma)
//         )
//         break;
    
//     case"4":
//         confirm("Çıkış yapmak istediğinize emin misiniz");
//         break;

//     default:
//         prompt("1 ile 4 arasında bir değer girin")
//         break;
// }

//! -----------------------TYT PUAN HESAPLAMA SORUSU

/* 
?sorular
1-türkce 40 
2-matematik 40
3-sosyal bilimler 20 
4-fen bilimleri 20 

----> 100 puanı ösym veriyor 
----> okul puanı max 60 veriyor   */

// let turkceDogru, turkceYanlis = 0;
// let matematikDogru , matematikYanlis = 0;
// let sosyalDogru, sosyalYanlis = 0;
// let fenDogru, fenYanlis = 0;
// let puan = 0;
// let okulPuan = 0;

// let yeniSatir = "\r\n"
// let mesaj = "Tyt puan hesaplama sitesine hosgeldiniz" +yeniSatir
// +"1-Puan hesapla " +yeniSatir
// +"2-Çıkış yap";

// let islemler = prompt(mesaj);
// switch(islemler){
//     case"1":

//         okulPuan = Number(prompt("Okul puanınızı giriniz"))
//         turkceDogru = Number (prompt("Türkçe doğru sayısı: "));
//         turkceYanlis = Number (prompt("Türkçe yanlış sayısı: "));

//         matematikDogru = Number(prompt("Matematik doğru sayısı: "));
//         matematikYanlis = Number(prompt("Matematik yanlış sayısı: "))

//         sosyalDogru = Number(prompt("Sosyal bilimler doğru sayısı: "))
//         sosyalYanlis = Number(prompt("Sosyal bilimler yanlış sayısı: "))

//         fenDogru = Number(prompt("Fen bilimleri doğru sayısı: "))
//         fenYanlis = Number(prompt("Fen bilimleri yanlış sayısı: "))

//         let dogruSayisi= turkceDogru + matematikDogru + sosyalDogru + fenDogru
//         let yanlisSayisi= turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis
//         let netSayi = dogruSayisi - (yanlisSayisi/4)
//         puan = (netSayi*4) + ((okulPuan*60) / 100) + 100

//         alert("Toplam TYT puanınız : " +puan)
        
//         break;
    
//     case"2":
//         confirm("Çıkış yapmak istediğinize emin misiniz?")
//         break;

//     default:
//         prompt("Lütfen 1 ya da 2'yi tuşlayın")
//         break; 
// }

/* 
TODO -----------------------TÜR DÖNÜŞÜMLERİ--------------------------- 

     ? strings, numbers, booleans, undefined and null. (ilkel)
     *object, function  (gelişmiş) */

//let a = 5;
//let b = "10";
//let b = Number("10") //* bu da bir öntem string değerimiz number'a dönüşüyor

//console.log(a+b) //*510 yapar cunku biri number biri string

//let c = Number(b);
    //console.log(typeof c); //* number veri tipinde 
//console.log(a+c) //* 15 yapıyor çünkü b değerini numbera çevirdik 

//! BAŞKA BİR YOL 

//console.log(a+Number(b)); //* yine 15 yapıyor hemde başka değişken tanımlamaya uğraşmadan kısaca hallediyoruz.

// let a = 8
// let b = parseInt("12")
// console.log(a+b)    //* 20 değerini verir çünkü parseInt stringi numbera çevirdi



//? --------------------NUMBER TİPİNDEN STRİNG TİPİNE ÇEVİRME 

// let x = String(55);
// console.log(typeof x); //* string formatında yazıldı 
// console.log(x);  //*55 sonucunu verdi

// let x = (55). toString();
// console.log(typeof x); //* yine string formatında çünkü toString yazılan şeyi stringe çevirmeye yarıyor
// console.log(x);  //* output 55 olarak çıkıyor


// let sonuc = String(true);
// console.log(typeof sonuc); //* boolean tipinden stringe çevirdik 
// console.log(sonuc); //* outputumuz "true" olarak çıkar



// let rakamlar = String([1,2,3,4,5]);
// console.log(typeof rakamlar) //* başına string yazarak OBJECT tipi veriden STRİNG veri tipine çevirdik.

// let a = [" 1 ", 2 , 3 , 4, " 5 "];
// console.log(String(a[1]) + 5 )     //todo  output 25 olur çünkü a1 deki 2 sayımızı string tipine çeviriyoruz ve 5 ile toplamaya 
//                                    //todo  girince 2 ve 5 yan yana gelir (string+number) olduğu için



// console.log(Number(a[0])+ 5 )    //?  output değerimiz 6 olur ÇÜNKÜ a0 daki değer "1" string bir değer ama numbera çevirdik
//                                  //?  ve 1 değerini elde ettik sonra da 5 ile toplayıp 6 sayısını elde ettik.




//!----------------------------DÖNGÜLER------------------------------------
//? 1-For, 2-While, 3-Do-While, 4-ForEach
/* 
todo--------------FOR DÖNGÜSÜ

for(degisken; koşul; arttırma-azaltma){
    kodlar 
}
*/
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

/* 
*---------FOR DÖNGÜSÜ ÖRNEK ÇALIŞMASI
* 1 den 10a kadar çiftleri yazdıralım  */

// for (let i=0; i<=10; i+=2){
//     console.log(i)
// }



// for(let i=0; i<=10; i++){
//     if(i%2==1)
//         console.log("tekkk")
//     else{
//         console.log("çifttt")
//     }
// }

//* 50den 1 e kadar gidip toplamlarını bulalım

// let toplam = 0;
// for(let i=50; i>=1; i--){
//     toplam +=i;
//     console.log(i);
// }
// console.log("Toplam : "+toplam);


/* 
todo--------------WHİLE DÖNGÜSÜ 
while(koşul){
    kodlar
    sayacın değerini atarız
}
*---------WHİLE DÖNGÜSÜ ÖRNEK ÇALIŞMASI  
? 1den 10a kadar yazdıralım  */

// let sayac = 1;
// while(sayac<=10){
//     console.log(sayac);
//     sayac++;
  
// }

// let sayac = 0;
// while(sayac<=10){
//     if(sayac % 2 == 0){
//         console.log(sayac)
//     }
//     sayac++
// }

/*
 ?--------------------DO WHİLE DÖNGÜSÜ 
 do{
    kodlar
 }while(koşul);

 */
// let sayac = 1;

// do {
//     console.log(sayac)
//     sayac++;
// } while (sayac<=10);



// let sayac = 11;
// do {
//     console.log(sayac)
//     sayac++;
// } while (sayac<=10);   //11 10a eşit ya da küçük olmamasına rağmen konsolda output olarak 11 çıktı çünkü 
// do-while döngüsünde koşul aşşağıda kaldığı için eğer sayımız koşulu sağlamasa bile döngü 1 defa dönüyor ve
// output veriyor 

//* 1den 20ye kadar olan tek sayıların toplamı

// let a = 1
// let toplam = 0
// do {
//     if(a%2 == 1){
//         toplam+=a
//     }
//     a++;
// } while (a<=20);
// console.log(toplam)


/* 
!------------------BREAK VE CONTINUE     
*1den 10a kadar yazdıralım 8de çıkalım 
*/
// let sayac = 1;
// while(sayac<=10){
//     console.log(sayac);
//     if(sayac == 8){;
//         break};
//     sayac++;
// }   


//? çarpım tablosu örneği 

// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//     console.log(i+"x"+j+"="+(i*j))
//     }
//     console.log("----------------------------------")
// }   


//*asal sayı bulma uygulaması

// let sayi = Number(prompt("Sayı Giriniz: "));
// let sonuc = true;

// for(let i=2; i<= Math.floor(sayi/2); i++){
//     if(sayi %i == 0){;
//         sonuc=false
//         break;
//     }
// }
// if(sonuc){
//     alert(sayi+ "asal sayıdır")
// }else{
//     alert(sayi+ "asal sayı değildir")
// }

//*faktoriyel sayı bulma uygulaması

// let sayi = Number(prompt("Bir sayı giriniz"))
// let carpim =1;

// for(i=1; i<=sayi; i++){
//     carpim = carpim*i
// }

// alert("sonuç : " + carpim)


//*armstrong sayısı örneği   153

// let toplam = 0;
// let sayi = prompt("Sayıyı giriniz")

// for( let i=0; i<sayi.length; i++){
//     let rakam = sayi.charAt(i);
//     toplam += rakam*rakam*rakam ;
// }
// if(Number(sayi) == toplam) {
//     alert("Armstrong sayısıdır")
// }else{
//     alert("Armstorng sayısı değildir")
// }


/* 
!!!----------------------------------------------METODLAR-----------------------------------------------
*-------parametresiz ve geriye değer döndürmeyen metod

*  function yazdir(){
*     kodlar yazılacak   
*  }

*/

// function yazdir(){             
//     console.log("oğuzhan")        
// }                             //bu kısım yazdırmak için yetmiyor bu paketlenmiş bir halde bekliyor onu açmamiz lazim 

// yazdir();                     //açan kısım da bu fonksiyonu konsola yazdırdı


// function topla(){
//     console.log(5+7)
// }
// topla();

//*-------parametreli metod tanımlamak

// function yazdir(isim,soyisim){
//     debugger;
//     console.log(isim+ " " + soyisim)
// }
// debugger;
// yazdir("oguzhan","ar");




// cube(3)

// function cube(sayi){
//     console.log(sayi*sayi*sayi)
// }

// cube(5);
// cube(4);



// let yas = Number(prompt("Yaş giriniz: "))
// kontrolEt(yas);

// function kontrolEt (yas){
//     if(yas>=18){
//         alert("Ehliyeti alabilirsiniz");
//     }else{
//         alert("Ehliyeti alamazsınız");
//     }
// }


//? Geriye değer döndüren metot tanımlamak
//*  console.log satırını gerekli durumlarda kıvırcık parantezlerin dışarısına çıkarmak için 
//*  kullanılır


// let donenDeger = cube(3);
// console.log(donenDeger)

// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
//     return sonuc;   
// }




//!---------------          !METİNDE KAÇ TANE SEÇİLEN HARFTEN VAR        ÖRNEK SORU 
// let metin = ("Told her come and take a seat, pardon me 'Til you come, I can regular it and shake it and break it");
// let harf = prompt("Harf giriniz");
// let sonuc = bul(harf);
// alert("Harf Sayısı: " + sonuc);



// function bul(harf){
//     let toplam=0;
//     for(let i =0; i<metin.length; i++){
//         if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
//             toplam+=1;
//         }
//     } 
//     return toplam;
// }


//!---------------      MÜKEMMEL SAYI        ÖRNEK SORU 
// perfectNumber(496)

// function perfectNumber(number){
//     let toplam = 0;
//     for (let i=2; i<=number/2; i++){
//         if(number%i==0){
//             toplam+=i;
//         }
//     }
//     toplam+=1+number;

//     if(toplam==number*2){
//         console.log("Seçilen sayı mükemmel sayıdır")
//     }else{
//         console.log("Seçilen sayı mükemmel sayı değildir")
//     }

// }


// //?---------------- DECIMAL TO BINARY CONVERSION ORNEK SORU 

// decimalToBinary(10);

// function decimalToBinary (number){
//     let binary = "";
//     while(true){
//         binary+=(number%2).toString();
//         number =Math.floor(number/2);
//         if(number==1){
//             binary+=1            
//             break;
//         }
//     }
//     console.log(binary);
// }


//! DİZİLERE BASLANGIC

// let sayilar= [0,1,2,3,4,5,6,7,8,9,"Oğuzhan",12,4.5,"Ali"];

// console.log(sayilar[10]);
// sayilar[13]= "Mehmet"
// console.log(sayilar[13])


// let isimler = ["enes","kübra", "oğuzhan", "ceren"];
// //console.log(isimler[3])
// console.log(isimler)

// let dizi1 = []; 
// let dizi2 = new Array();

// dizi1[0] = "Oğuz"
// dizi1[1] = "Emir"

// dizi1[0] = "Alper"
// dizi1[1] = "Çağan"


//! FOREACH DÖNGÜSÜ
//* dizilerde kullanılır.

// let isimler = ["Oğuz", "Çağan","Emir","Alper","Ege"];

// isimler.forEach(function(isim){
//     console.log(isim)
// });

// //? FOR DÖNGÜSÜ İLE 
// for(let i=0; i<isimler.length; i++){
//     console.log(isimler[i]);
// }

//todo WHILE DONUGUSU İLE 
// let sayac = 0;
// while (sayac < isimler.length){
//     console.log(isimler[sayac]);
//     sayac++;
// }


//!----------------------------DİZİNİN METOTLARI----------------------------------------

// let arabalar1 = ["bmw","mercedes","toyota","opel","mazda"];
// let arabalar2 = ["hundai", "volkswagen", "seat",]


//todo PUSH METODU  *dizinin sonuna eleman ekler, dizinin uzunluğunu döner.
// arabalar.push ("porsche")
     // return length;

// console.log(arabalar);

//todo UNSHIFT METODU *dizinin başına eleman ekler, dizideki eleman saysını döner.
// arabalar.unshift("honda")
// console.log(arabalar);

//*   POP METODU   *dizinin sonundan eleman siler,dizinin uzunluğunu döner.

// let silineneleman = arabalar.pop();
// console.log(arabalar);
// console.log(silineneleman)

//*SHIFT METODU   *dizinin basından eleman siler, dizinin uzunluğunu döner.
// let silinenEleman = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman)

//? SPLICE METODU (index,incdex)   * eleman eklemek ve silmek için kullanılır. 
// arabalar.splice(0,0,"hundai");
// arabalar.splice(3,0,"cupra");
// arabalar.splice(5,1)  //opel silindi  5.indexten baslayıp 1 tane eleman sil demek 
// console.log(arabalar);

//? TO STRING METODU   * diziyi stringe çevirebilir
// console.log(typeof arabalar); // object veri tipi 
// let stringArabalar= arabalar.toString();
// console.log(stringArabalar);   //output bmw,mercedes,toyota,opel,mazda--> string tipinde,,  typeof string

//todo JOIN METODU  *diziyi stringe çevirir ve araya eleman ekleyebilir.
// let stringArabalar = arabalar.join("-");
// console.log (stringArabalar);  //bmw-mercedes-toyota-opel-mazda

//todo CONCAT METODU  *dizileri birleştirmek için kullanılır. 
// let yeniDizi = arabalar1.concat(arabalar2);
// console.log(yeniDizi);

//* SLICE METODU  *diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
// console.log(arabalar1)
// let yeniDizi = arabalar1.slice(2,4)
// console.log(yeniDizi);

//* LENGTH METODU  *dizini uzunluğunu verir.
// console.log(arabalar1.length);

//* REVERSE METODU  *dizinin elemanlarını ters çevirmeye yarar.
// console.log(arabalar1);
// arabalar1.reverse();
// console.log(arabalar1);


//? SPLIT METODU  *belirli bir ifadeye göre bölüp diziye çevirmek.
// let isimler = "Oğuz, Alper, Emir";

// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi)
// console.log(typeof isimlerDizi)

//? INDEXOF METHODU    *elemanın index numarasını verir.
// let indexmet = arabalar1.indexOf("bmw");    içeriyorsa 0 içermiyorsa -1 değeri veriyor 
// console.log(indexmet)

//? INCLUDES METHODU   *verilen elemanı içeriyor mu ona bakılır.
// let inc = arabalar1.includes("bmw")     eğer varsa true, yoksa false değeri veriyor. (boolean tipinde)
// console.log(inc)



//!----------------ARROW FUNCTİON 

// function yazdir(){
//     console.log("merhaba");
// } 
// yazdir()                     //bunu yapmak yerine aşşağıdaki yolu yapıcaz 


// const yazdir=()=>{
//     console.log("merhaba")
// }
// yazdir()


// const yazdir = (firstName, lastName)=>{
//     console.log("Merhaba" , firstName,lastName)
// }
// yazdir("Oğuzhan", "Ar")


// const yazdir = firstname=>console.log("Merhaba",firstname)      //* tek satırda hallettik 
// yazdir("Oğuzhan")



// const  kupAl = x=> x*x*x

// document.addEventListener("click",()=>{

// })

// console.log("Sonuç",kupAl(5))


//!-------------Destructing Kullanımı 
// let langs = ["C#", "C++", "JavaScript", "Python"]
// let lang1, lang2, lang3, lang4

// // lang1 = langs[0]
// // lang2 = langs[1]
// // lang3 = langs[2]
// // lang4 = langs[3]
// [lang1, lang2, lang3, lang4] = langs  //* destructing budur 


// console.log(lang1,lang2,lang3,lang4)


// const hesapla = (a,b)=>{
//     const toplam =a+b
//     const cikar = a-b
//     const carp = a*b
//     const bol = a/b

//     const dizi = [toplam,cikar,carp,bol]
//     return dizi
// } 

// let [x,y,z,w] = hesapla(10,2)
// console.log(x,y,z,w)



// const person = {
//     firstName : "Oğuz",
//     lastName : "Ar",
//     salary:50000,
//     age:20
// }

// //let isim,soyisim,maas,yas

// // isim = person.firstName
// // soyisim = person.lastName
// // maas = person.salary
// // yas = person.age

// let { firstName ,lastName,salary,age} = person
// console.log(firstName,lastName,salary,age)




//!-------------SPREAD OPERATORU 

// let numbers = [10,20,30,40]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }
// //*ESKİ YÖNTEM
// // add(numbers[0],numbers[1],numbers[2],numbers[3],)

// add(...numbers)


// const diller1 = ["java","C#"]
// // const diller2 = ["php","python",diller1[0], diller1[1]]
// const diller2 = ["php","python", ...diller1]

// console.log(diller2)


// const array1 = ["enes","ali","oğuz","emir"]
// // let array2 = []

// // array2[0] = array1[0]
// // array2[1] = array1 [1]
// // array2[2] = array1 [2]
// // array2[3] = array1 [3]

// array2 = [...array1]

// console.log(array2)


//!--------- FOR in & FOR of DÖNGÜLERİ

// let names = ["Oğuz","Çağan","Emir","Alper"]
// names.forEach(function(name){
//     console.log(name)
// })
// names.forEach(name=>console.log(name))

//*FOR in DÖNGÜSÜ  
//? for in döngüsü dizi üzerinde dönerken o dizideki elemanların index numarasını verir 

//degiskenTanimlama, in , diziIsmi
// for (let name in names){
//     console.log(name, names[name])
// }

//*FOR of DÖNGÜSÜ
//? in döngüsünün tam tersi 

// for (let isim of names){
//     console.log(isim, names.indexOf(isim))
// }


//! MAP -----> key(anahtar) value(değer)

// const map1 = new Map();

// // let value;
// map1.set(81,"Düzce")
// map1.set(34,"İstanbul")
// map1.set(6,"Ankara")
// map1.set(35, "İzmir")

// // console.log(map1.get(81))
// // value = map1.sizes
// // console.log(value)

// console.log(map1.has(81))


//*For Of map üzerinde  dönebiliriz. 

// for(let [key,value] of map1){
//     console.log(key,value)
// }

// const keys = Array.from(map1.keys()) 
// console.log(keys)

// keys.forEach(key => {
//     console.log(key)
// });

// for(let key of map1.keys()){
//     console.log(key)
// }



// //*Mapten Arraye çevirmek 

// const array2 =[
//     [81,"Düzce"],
//     [34,"İstanbul"],
//     [6,"Ankara"],
//     [35, "İzmir"]


// ]
// const array = Array.from(map1);

// array.forEach((value,key)=>{
//     console.log(value[1])
// })















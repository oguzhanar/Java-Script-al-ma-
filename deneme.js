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


// ---------------------------STRİNG VERİ TİPİ--------------------------------------
// let isim = "Oğuzhan bu sene 20 yaşında olcak"  string oldugu icin tırnak işareti lazım
// console.log(isim);
// console.log(typeof isim); //hangi veri tipinde oldugunu yazar (burdaki string)
//
// let sayi1 = 10; //sayı olduğu için tırnak işareti gerekmez

// console.log(sayi1);
// console.log(typeof sayi1) //veri tipi number

// ---------------------------NUMBER VERİ TİPİ--------------------------------------
// let a = "5";
// let b = "2";
// console.log(a+b);
//52 sonucunu verir çünkü string tipi oldugu icin toplamaz birleştirir.

//string ve number toplama işlemine girine sistem toplayamaz ve yan yana yazar
// let soru = "Yaşınız: ";
// let cevap = 23;
// console.log(soru+cevap)
// 

//---------------------------BOOLEAN VERİ TİPİ--------------------------------------
//boolean: true ve falsetan olusur. 
// let a = 3;
// let b = 12;
// let sonuc = a+b;
// console.log(sonuc>15) //false 
// ---------------------------NULL VERİ TİPİ--------------------------------------

// let a = null;
// console.log(a) //null

// let b = null;
// b = 12;
// console.log(b) //output 12 verir 
//---------------------------UNDEFİNED VERİ TİPİ--------------------------------------

// let a;

// console.log(a); değer atamadığımız için undefined 
// console.log(typeof a); 

//---------------------------OBJECT VERİ TİPİ--------------------------------------

// let insan = {
//     isim : "Oğuzhan",
//     soyisim : "Ar",
//     yas : 20,
// }
// console.log(insan)
// console.log(typeof insan)


//let rakamlar = [1,2,3,4,5];  
//console.log(typeof rakamlar) **object veri tipi

//---------------------------FUNCTİON VERİ TİPİ--------------------------------------
// let func = function(){
//     console.log("Merhaba");
// }
// func();
// console.log(typeof func) **function veri tipi 



                         //ARİTMETİK OPERATÖRLER  

//--------------------------- (+) OPERATORU --------------------------------------

// console.log(5+3);

// let note1 = 50;
// let note2 = 20.5;

// let sayi1 = "5";
// let sayi2 = 2;
// console.log(sayi1 + sayi2); //konsolda 52 yazar çünkü string ve number toplanmaz birleştirilir  

// console.log(note1 + note2);


//--------------------------- (*) OPERATORU --------------------------------------

// let sayi1 = 10;
// let sayi2 = 23.6;

// console.log(sayi1*sayi2);

//--------------------------- (/) OPERATORU --------------------------------------

// let note1 = 100
// let note2 = 70 

// let sonuc = (note1 + note2)/2 
// console.log(sonuc)

//-------------------- (%) MOD ALMA OPERATORU (kalanı bulmak icin)-----------------

/**
 10/3 = kalan 1
 12/5 kalan 2 
 */

// console.log(10%3); //konsolda 1 yazıyor


//------------------------------ (--)(++) OPERATORLERI---------------------------
//++ bir arttırmak icin -- bir azaltmak icin 
// let a = 10;
// a++;//11
// a++;//12
// a++;//13
// a--;//12
// console.log(a); //output 12 veriyor  

//------------------------------ (**) ÜS ALMA OPERATORLERI---------------------------

//console.log(2**5)




//--------------------------------ATAMA OPERATORLERİ----------------------------------


//---------------------------------(==) OPERATORU-------------------------------------
// == : eşittir 
// console.log(5==4) //false yazar çünkü eşit değil 
// let a = 5;
// let b = 4;
// let sonuc = a+b;
// console.log(sonuc==10); //false yazar eşitlik yok 

//console.log(3=="3") true cünkü veri tipinin önemi yok içindeki değer önemli


//---------------------------------(===) OPERATORU-------------------------------------
//hem tiplerin hemde değerlerinin eşit olup olmadığına bakar 

// console.log(5===5); true çünkü hepsi eşit
// console.log(5==="5") false çünkü veri tipleri aynı değil (number ve)

         //---------------------------------(+=) OPERATORU-------------------------------------

// let sayi = 4;
//  //sayi = sayi +2; uzun yol 
// sayi+=2 
// console.log(sayi);

//---------------------------------(-=) OPERATORU-------------------------------------

// let sayi = 4;
// sayi-=3; 
// console.log(sayi)  output 1 verir 


//---------------------------------(/=) OPERATORU-------------------------------------

// let sayi = 10;
// sayi /= 3; 
// console.log(sayi) //output 3.3333 

//---------------------------------(%=) OPERATORU-------------------------------------

// let sayi = 12;
// sayi %= 5;
// console.log(sayi)

//--------------------------------MANTIK OPERATORLERİ----------------------------------

//---------------------------------(&&) VE OPERATORU-------------------------------------
// VE anlamına gelir yan yana yazılan olaylardan 1 tane false olsa bile output false çıkar. 
// let yas = 20;
// let para = 3500;
// let saglikliMi = false;
// console.log(yas>18 && para>3000 && saglikliMi==true)   //false olarak gelir çünkü sağlık kısmında false var

//---------------------------------(||) VEYA OPERATORU-------------------------------------
// 9 tane False 1 tane True olsa bile sonuc True çıkar 

// console.log(5>2 || 4>5 || 3>7); true çıkar çünkü 5>2 true değeri veriyor

//---------------------------------(!) DEĞİL OPERATORU-------------------------------------
//tersini alır 5 3 ten büyük True çıkar ama True değerini tersine çeviri 

// console.log( !(5>3) );



// let yas = 20;
// let para = 3500;
// let saglikliMi = false;
// let hakSayisi = 3;
// console.log((para>3000 && hakSayisi>1) || (yas>18 && saglikliMi)) //sol taraf true sağ taraf false çıkar ama arada veya oldugu icin output true çıkar





/*--------------------------------------DİYALOG KUTULARI--------------------------------------------
    -ALERT
    -PROMPT
    -CONFİRM
*/

//console.log(window);

//---------------------------------ALERT KUTUSU------------------------------------
//alert("zırtttttt") 

//---------------------------------PROMPT KUTUSU------------------------------------

// let isim = prompt("isminizi giriniz :");
// let yas = prompt("yaşınızı giriniz :");


// console.log("İsminiz :"+ isim);
// console.log("Yasınız :"+ yas );

//---------------------------------CONFIRM KUTUSU------------------------------------

// let sonuc = confirm("Silmek istediğinize emin misiniz");
// console.log (sonuc);


/*--------------------------------------KOŞUL YAPILARI--------------------------------------------

if(koşul){
    kodlar
}
else{
    kodlar    
}
*/

//---------KOŞUL YAPILARI


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


//------------ORTALAMA BULMA
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



/* --------------- IF, ELSE IF, ELSE YAPISI
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


/*------------------------ÇOKLU IF YAPISI
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


//------------------------VÜCUT KİTLE ENDEKSİ İF ELSE ÇALIŞMA SORUSU 

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

//------------------------------BENZİN İSTASYONU ÖRNEK

let dizel = 24.53  , benzin = 22.25, LPG = 11.1;
const yeniSatir = "\r\n";
const yakitMetni = "1-Dizel, Litre Fiyatı: 24.53 " +yeniSatir 
+"2-Benzin, Litre Fiyatı: 22.25" +yeniSatir
+"3-LPG, Litre Fiyatı: 11.1" +yeniSatir
+"Yakıt türünü seçiniz : ";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1"|| yakitTipi=="2"|| yakitTipi=="3"){
let yakitLitresi = Number (prompt("Yakıt litresini giriniz : "))
let bakiye = Number (prompt("Bakiyenizi giriniz : "))


    if(yakitTipi=="1"){
        let odenecekTutar = yakitLitresi*dizel
        if(odenecekTutar<bakiye){
            bakiye = bakiye-odenecekTutar
            alert("Yakıt alma işlemi başarılı. Tekrar görüşmek üzere" + yeniSatir
            +"Kalan Bakiye : " +(bakiye))
            
    }
    else{
        alert("Bakiyeniz yeterli değil" +yeniSatir
        +"Ödenecek Tutar : " + odenecekTutar +yeniSatir
        +"Bakiye : " + bakiye +yeniSatir
        +"Eksik Tutar : " + (odenecekTutar-bakiye))
        }

    }   
    else if(yakitTipi=="2"){
        let odenecekTutar = yakitLitresi*benzin
        if(odenecekTutar<bakiye){
            bakiye = bakiye-odenecekTutar
            alert("Yakıt alma işlemi başarılı. Tekrar görüşmek üzere" + yeniSatir
            +"Kalan Bakiye : " +(bakiye))
        
    }
    else{
        alert("Bakiyeniz yeterli değil" +yeniSatir
        +"Ödenecek Tutar : " + odenecekTutar +yeniSatir
        +"Bakiye : " + bakiye +yeniSatir
        +"Eksik Tutar : " + (odenecekTutar-bakiye))
        }
}
else if(yakitTipi=="3"){
    let odenecekTutar = yakitLitresi*LPG   
    if(odenecekTutar<bakiye){
        bakiye = bakiye-odenecekTutar
        alert("Yakıt alma işlemi başarılı. Tekrar görüşmek üzere" + yeniSatir
        +"Kalan Bakiye : " +(bakiye))
        
    }
    else{
        alert("Bakiyeniz yeterli değil" +yeniSatir
        +"Ödenecek Tutar : " + odenecekTutar +yeniSatir
        +"Bakiye : " + bakiye +yeniSatir
        +"Eksik Tutar : " + (odenecekTutar-bakiye))
        }

}




}
else{
    alert("Lütfen geçerli bir yakıt numarası seçin")
}
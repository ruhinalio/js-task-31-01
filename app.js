// BIRINCI input ile daxil olan ededlerin sade bolenlerini cixartsin

//2. input ile daxil olan ededin evveline sonuna 3 elave edirik
// let a = prompt("UC REQEMLI eded daixl edin")
//     let elaveler = "3"+a+"3"
//     console.log(elaveler);

//3. input ile daxil olan ededin reqemlerinden boyuyunu tapin
// var a = prompt("ededi daxil edin").split("");
// var boyuk = 0;
// for (let i = 0; i < a.length; i++) {
//   if (boyuk < a[i]) {
//     boyuk = a[i];
//   }
// }
// console.log(boyuk);

//4. imput ile daxil olan ededlerin tam ededleri tapin
// var a= prompt('ededi daxil edin')
// if(a%1==0){
//   console.log('eded tam ededdir');
// }else{
// console.log('eded tam eded deyil');
// }

// 5. imput ile daxil olan ededlerin reqemlerinden cut ededleri gosterin
// var a = prompt('ededi daxil edin').split("")
// for(let i=0; i<a.length; i++){
//   if(a[i]%2==0){
//     console.log(a[i]);
//   }
// }

// 6. imput ile daxil olan ededlerin reqemlerinden sade ededleri gosterin
// var arr= [2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   var counter = 0;
//   for (let b = 1; b <= arr[i]; b++) {
//     if (a[i] % b == 0) {
//       counter++;
//     }
//   }
//   counter==2? console.log(arr[i]) : true;
// }

// YEDDINCI imput ile daxil olan ededin mukemmel eded olub olmadigini tapin

// 8. imput ile daxil olan ededlerin reqemlerinin sayini ve string ile tersini tapin
// var a = prompt('ededi daxil edin').split("")
// console.log(a.length, 'ededin reqemleri sayi');
// console.log('ededin tersi ise', a.reverse().join(""));

// 9. imput ile daxil olan birinci ededi ikinci ededin quvvetine yukseldin
// var a = +prompt("birinci ededi daxil edin")
// var b= +prompt('ikinci ededi daxil edin')
// console.log(a**b)

//10. imput ile daxil olan uc eded string ile yan yana yazilsin
// let total = ''
// for (let i = 0; i < 3; i++) {
//   var a = +prompt("birinci ededi daxil edin");
//   total+=a;
// }

//11 istifadeciden alinan n sayda ededin tam oldugunu tapin
// var a= prompt('ededi daxil edin')
// if(a%1==0){
//   console.log('eded tam ededdir');
// }else{
// console.log('eded tam eded deyil');
// }

//12 ededin reqemlerinin kvadratlari cemi
// var a = prompt("ededi daxil edin")
// var kvCem = 0
// for(let i= 0;i<a.length; i++ ){
//   let b = a[i]**2
//   kvCem+=b
// }
// console.log(`${kvCem}`);
// 13. ededin reqemlerinden cut olani secin
// var a = prompt("ededi daxil edin")
// for(var i=0;i<a.length; i++){
//   if(a[i]%2==0){
//     console.log(a[i]);
//   }
// }
//14. array icindeki tam ededlerin cemi
// var a = prompt("ededi daxil edin").split(",");
// var i = 0;
// var cem = 0;
// while (i < a.length) {
//   if (a[i] % 1 == 0) {
//     cem += +a[i];
//   }   
//   i++;
// }
// console.log(`${cem}`);
//15. input ile daxil olan ededin ortasini tap funksiya ile

var a = prompt('ededi daxil edin')
var b = prompt('ededi daxil edin')
var c = prompt('ededi daxil edin')
function findMedian(a, b, c) {
  if (a < b && a > c || a > b && a < c) {
    return a;
  } else if (b < a && b > c || b > a && b < c) {
    return b;
  } else {
    return c;
  }
}
console.log(findMedian(a,b,c))

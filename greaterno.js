let a=50;
let b=9;
let c=70;

// if(a>b && a>c && a>d ){
//     console.log("a is big");
// }
// else if(b>a && b>c && b>a){
//     console.log(" b is big");

// }
// else if(c>a && c>b && c>d)
// {
//     console.log("c is big");
// }
// else if(d>a && d>b && d>c)
// {
//     console.log(" d is big");
// }
// else{
//     console.log(" both are equal");
// }

//  if else condition
// if (a >=b) {
//     if (a >= c) {
//        console.log("a is greater")
//     } else {
//         console.log("c is greater")
//     }
// } else {
//     if (b >= c) {
//         console.log("b is big")
//     } else {
//           console.log("c is big")
//     }
// }

//using switch statment in js
// function daycheak(num)
// {
// switch (num) {
//     case 0:(num==0)
//     console.log("sunday");
//       break;
//     case 1:(num==1)
//       console.log("monday")
//       break;
//     case 2:(num==2)
//        console.log("tuesday");
//        break;
//     case 3:(num==3)
//       console.log("Wednesday")
//       break;
//     case 4:(num==4)
//       console.log("Thursday")
//       break;
//     case 5:(num==5)
//       console.log("Friday")
//       break;
//     case 6:(num==6)
//       console.log("satuarday")

//       default:console.log("number is not math")
//   }
// }
// daycheak(5);

let num1=66,num2=66,num3=6,num4=9;

if (num1 >= num2) {
    if (num1 >= num3) {
        if (num1 >= num4) {
            console.log("num1 is greater")
        } else {
            console.log("num4 is greater")
        }
    } else {
        if (num3 >= num4) {
            console.log("num3 is greater")
        } else {
            console.log("num4 is greater")
        }
    }
} else {
    if (num2 >= num3) {
        if (num2 >= num4) {
            console.log("num2 is greater")
        } else {
            console.log("num4 is greater")
        }
    } else {
        if (num3 >= num4) {
            console.log("num3 is greater")
        } else {
            console.log("num4 is greater")
        }
    }
}

// * * * *
// * * * *
// * * * *
// * * * *
// function startPrinting(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       row = row + "* ";
//     }
//     console.log(row);
//   }
// }

// startPrinting(4);

// *
// * *
// * * *
// * * * *

// function startPrinting(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//       row = row + "* ";
//     }
//     console.log(row);
//   }
// }

// startPrinting(4);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// function startPrinting(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j <= i; j++) {
//             row = `${row + (j + 1)} `
//         }
//         console.log(row)
//     }
// }

// startPrinting(5)

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// function startPrinting(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j <= i; j++) {
//             row = `${row + (i + 1)} `
//         }
//         console.log(row)
//     }
// }

// startPrinting(5)

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// function startPrinting(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j < n - i; j++) {
//             row = `${row + (j + 1)} `
//         }
//         console.log(row)
//     }
// }

// startPrinting(5)

// * * * * *
// * * * *
// * * *
// * *
// *

// function startPrinting(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j < n - i; j++) {
//             row = `${row + "*"} `
//         }
//         console.log(row)
//     }
// }

// startPrinting(5)

//          *
//        * *
//      * * *
//    * * * *
//  * * * * *

// my method

// function startPrinting(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j <= n; j++) {
//             if (j >= n - i) {
//                 row = `${row + "*"} `
//             }
//             else {
//                 row = `${row + " "} `
//             }
//         }
//         console.log(row)
//     }
// }

// startPrinting(5)

// namaste DSA method
// function startPrinting(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         // adding empty space
//         for (let j = 0; j < n - (i + 1); j++) {
//             row = row + "  "
//         }
//         // adding star
//         for (let k = 0; k < i + 1; k++) {
//             row = row + " *"
//         }
//         console.log(row)
//     }
// }

// startPrinting(5)\

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

// my method
// function startPrinting(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//       if (j % 2 === 0) {
//         row = row + "1 ";
//       } else {
//         row = row + "0 ";
//       }
//     }

//     console.log(row);
//   }
// }

// startPrinting(6);

// namaste DSA method
// function startPrinting(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     let toggle = 1;
//     for (let j = 0; j < i + 1; j++) {
//       row = row + toggle;
//       if (toggle) toggle = 0;
//       else toggle = 1;
//     }

//     console.log(row);
//   }
// }

// startPrinting(6);

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1
// 0 1 0 1 0 1

// function startPrinting(n) {
//   let toggle = 1;
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//       row = row + toggle;
//       if (toggle) toggle = 0;
//       else toggle = 1;
//     }

//     console.log(row);
//   }
// }

// startPrinting(6);

function startPrinting(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle) toggle = 0;
      else toggle = 1;
    }
    console.log(row);
  }
}

startPrinting(6);

class SmallestIntegerFinder {
    // findSmallestInt(args) {
    //   let min = args[0]
    //   for(let i = 1; i < args.length; i++){
    //     if (min > args[i]){
    //         min = args[i]
    //     }
    //   }
    //   return min
    // }

    // findSmallestInt(args) {
    //     return Math.min.apply(null, args)
    // }

    // findSmallestInt(args) {
    //     return Math.min(...args)
    // }

    findSmallestInt = (args) =>  Math.min(...args)
}

let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]))


// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Step  1
let traveldestination: string[] = ["Japan", "Korea", "China", "Palistine", "sodan"]
// Step 2
console.log("original order:")
console.log(traveldestination)
// Step 3
console.log("\n alphabetical without modifying the actual list")
console.log([...traveldestination].sort())
// Step 4
console.log("\n showing array is still in its oreder ")
console.log(traveldestination)
// Step 5
console.log("\n reverse alphabetical order without modifying the actual list")
console.log([...traveldestination].sort().reverse())
// Step 6
console.log("\n showing array is still inits order ")
console.log(traveldestination)
// Step 7
console.log("\n reverse order")
traveldestination.reverse()
console.log(traveldestination)
// Step 8
console.log("\n back to orignal")
traveldestination.reverse()
 console.log(traveldestination)
// Step 9
console.log("\n change to alphabetical order")
traveldestination.sort()
console.log(traveldestination)
// Step 10
console.log("\n change to reverse alphabetical order")
traveldestination.sort().reverse()
console.log(traveldestination)




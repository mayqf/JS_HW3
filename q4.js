//Write a program that prints out, in reverse order, every multiple of 3 between 1 and 200. 
//output should be 198 195 192 ......

const myfunction = () => {
    for (i = 198; i > 1; i -= 3) {
        console.log(i)

    }
}
myfunction()
function reverseString_nomethod(str){
    let reversed = ""
    split_str = str.split(" ")
    console.log(split_str.length)
    for(let i = 0; i < split_str.length;i++){
        for(let j = split_str[i].length -1; j>= 0; j--)
        {
            reversed = reversed + split_str[i][j]
        }
        reversed += " "
    }
    console.log(reversed)
} 

reverseString('hello there')

// Do not edit below this line
module.exports = reverseString;

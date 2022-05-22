// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const string = "Hola"

let vowels_found = 0;

let new_string = string.split("");

new_string.forEach(element => {
    if (element === "a" || "b" || "c" || "d" || "e"){
        vowels_found++;
    } else {
        //pass
    }
});

console.log("Numero de vocales: " + vowels_found)
    



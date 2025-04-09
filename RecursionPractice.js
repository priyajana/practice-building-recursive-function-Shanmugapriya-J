/*
    This function takes a string as input 
    and reverses the string recursively
    returning the reversed string as output at the end.
*/


function reverseString(name)
{
    // Base case where the input string length is 1 or if its an empty string
    if(name.length == 1 || name == "")
        {
            
            return name;
        }
    else
    {
        /**
         * Eg: hello 
         * Iteration 1 : name.substring(1)=> ello + h
         * Iteration 2 : name.substring(1)=>  llo  + e
         * Iteration 3 : name.substring(1)=>   lo + l
         * Iteration 4 : name.substring(1)=>    o + l
         * Iteration 5:                         o
         * return olleh
         */
        return reverseString(name.substring(1))+name.charAt(0);
       
    }

}

 
console.log(reverseString("hello"));
console.log(reverseString("recursion"));
console.log(reverseString("a"));
console.log(reverseString(""));



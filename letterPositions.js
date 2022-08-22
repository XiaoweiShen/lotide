//Implement letterPositions
//modified from implement countLetters in Lotide
/*eslint linebreak-style: ["error", "windows"]*/
// FUNCTION IMPLEMENTATION

const letterPositions = function(sen) 
    { let result={};
      for(let i=0;i<sen.length;i++)
       {
        if((sen.charCodeAt(i)<=90&&sen.charCodeAt(i)>=64)||(sen.charCodeAt(i)<=122&&sen.charCodeAt(i)>=97)){
        let letter=sen[i];
        if(!Object.keys(result).includes(letter))
          { result[letter]=[];
            result[letter].push(i);}
        else
          {
            result[letter].push(i);
          }
       }
       //console.log(result);}
       
    }
    return result;
  }
 
 console.log(letterPositions("aanaazhe me jian dan ?"));

 
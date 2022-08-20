//Implement countLetters in Lotide
/*eslint linebreak-style: ["error", "windows"]*/
// FUNCTION IMPLEMENTATION

function countLetters(str)
  { let result={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0,A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:0,N:0,O:0,P:0,Q:0,R:0,S:0,T:0,U:0,V:0,W:0,X:0,Y:0,Z:0};
    let res={};
    for(let i=0;i<str.length;i++)
    { 
      if((str.charCodeAt(i)<=90&&str.charCodeAt(i)>=64)||(str.charCodeAt(i)<=122&&str.charCodeAt(i)>=97))
      result[str[i]]=result[str[i]]+1;
    }
   for (let obj in result)
   {
    if (result[obj]!==0) 
    res[obj]=result[obj];
   }
   return(res);
  }
 console.log(countLetters("aaaaaaaaaaaabbbbbbbbbbbbbvccccccccccccccccr"));


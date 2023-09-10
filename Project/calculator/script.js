function clicks(){
    let s=0;
    document.getElementById('text-block').value += s;
}
function nula(){
    document.getElementById('text-block').value="";
}
function click1(){
    let s=1;
    document.getElementById('text-block').value += s;
}
function click2(){
    let s=2;
    document.getElementById('text-block').value += s;
}
function click3(){
    let s=3;
    document.getElementById('text-block').value += s;
}
function click4(){
    let s=4;
    document.getElementById('text-block').value += s;
}
function click5(){
    let s=5;
    document.getElementById('text-block').value += s;
}
function click6(){
    let s=6;
    document.getElementById('text-block').value += s;
}
function click7(){
    let s=7;
    document.getElementById('text-block').value += s;
}
function click8(){
    let s=8;
    document.getElementById('text-block').value += s;
}
function click9(){
    let s=9;
    document.getElementById('text-block').value += s;
}
function plus(){
    let s='+';
    document.getElementById('text-block').value += s;
}
function minus(){
    let s='-';
    document.getElementById('text-block').value += s;
}
function Math(){
    let s='*';
    document.getElementById('text-block').value += s;
}
function division(){
    let s='/';
    document.getElementById('text-block').value += s;
}
function point(){
    let s='.';
    document.getElementById('text-block').value += s;
}
function coma(){
    let s=',';
    document.getElementById('text-block').value += s;
}
function procent(){
    let s='%';
    document.getElementById('text-block').value += s;
}
function sum(){
    
    let numbers = document.querySelector("#text-block").value;
    let element;
    let x;
    let n;

   for(x in numbers)
   {
    
    if(Number(x)>0)
    {
        x=n;
        if(x===numbers.length){
            document.querySelector("#text-block").value = element;
            break;
        }
    }
    
    if(numbers[x]==='+')
    {
            x++;
            n++;
            let r=0;
            if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                for(n;n<numbers.length;)
                {
                    if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                        
                        if(Number(r)===0){

                            r=numbers[x]; 

                            n++;
                        }
                        else{

                            r+=String(numbers[n]); 

                            n++;
                        }
                    }
                  else{
                    break;
                  }
                   
                }
                element =Number(element)+Number(r);    
            }
            else{
                r=numbers[x];
                element =Number(element)+Number(r);     
                 n++;    
            }      
    }   
    else if(numbers[x]==='%')
    {
        x++;
        n++; 
        let r=0;
            
        if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                
                for(n;n<numbers.length;)
                {
                    if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                        
                        if(Number(r)===0){
                            r=numbers[x]; 
                            n++;
                        }
                        else{
                            r+=String(numbers[n]); 
                            n++;
                        }
                    }
                  else{
                    break;
                  }
                   
                }
                
                element =Number(element) *(Number(r)/100);    
            }
            else{
              
                r=numbers[x];
                
                element =Number(element) *(Number(r)/100);       
                
                n++;    
            }
    }
    else if(numbers[x]==='-')
    {
        x++;
        n++; 
        let r=0;
            
        if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                
                for(n;n<numbers.length;)
                {
                    if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                        
                        if(Number(r)===0){
                            r=numbers[x]; 
                            n++;
                        }
                        else{
                            r+=String(numbers[n]); 
                            n++;
                        }
                    }
                  else{
                    break;
                  }
                   
                }
                
                element =Number(element)-Number(r);    
            }
            else{
              
                r=numbers[x];
                
                element =Number(element)-Number(r);     
                
                n++;    
            }
    }
    else if(numbers[x]==='/')
    {
        x++;
        n++; 
        let r=0;
            if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                for(n;n<numbers.length;)
                {
                    if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                        
                        if(Number(r)===0){

                            r=numbers[x]; 

                            n++;
                        }
                        else{

                            r+=String(numbers[n]); 

                            n++;
                        }
                    }
                  else{
                    break;
                  }
                   
                }
                element =Number(element)/Number(r);    
            }
            else{
                r=numbers[x];
                element =Number(element)/Number(r);     
                 n++;    
            }
    }
    else if(numbers[x]==='*')
    {
        x++;
        n++; 
        let r=0;
            if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                for(n;n<numbers.length;)
                {
                    if(numbers[x]!='+'||numbers[x]!='/'||numbers[x]!='*'||numbers[x]!='-'||numbers[x]!='%'){
                        
                        if(Number(r)===0){

                            r=numbers[x]; 

                            n++;
                        }
                        else{

                            r+=String(numbers[n]); 

                            n++;
                        }
                    }
                  else{
                    break;
                  }
                   
                }
                element =Number(element)*Number(r);    
            }
            else{
                r=numbers[x];
                element =Number(element)*Number(r);     
                 n++;    
            }
    }
    else {
        if(Number(x)===0){
            element=Number(numbers[x]); n=1;
        }
       else{
        element+=String(numbers[x]); 
        n++;
       }     
    }
    console.log(element);
    console.log(n);
   }
}
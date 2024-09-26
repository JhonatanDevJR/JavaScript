function calcular(){
    var num=Number(document.getElementById('num').value)
    let res= document.getElementById('res')
    let tab= document.getElementById('sel')
    let c= 1
    tab.innerHTML=''
    
     while(c<=10){
        
        let item= document.createElement('option')
        item.text=`${num} x ${c} = ${num*c}`
        tab.appendChild(item)
        c++
    } if(num==0){
        alert('Por favor, digite um número!')
        tab.innerHTML=''
    }
  }
  

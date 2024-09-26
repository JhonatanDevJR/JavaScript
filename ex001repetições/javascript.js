function contar(){
    var txt1= Number(document.getElementById('txt1').value)
    var txt2= Number(document.getElementById('txt2').value)
    var res= document.getElementById('res')
    let cont

    res.innerHTML=`<p>Contando de <strong>${txt1}</strong> até <strong>${txt2}</strong></p>`
        
        if (txt1<txt2) {
            cont = txt1
            while (cont <= txt2) {
                res.innerHTML += ` <b>${cont} 👍</b>`
                cont ++
            }
        } else  if (txt2<txt1) {
            cont = txt1
            while (cont >= txt2) {
                res.innerHTML += ` <p>${cont}</p>`
                cont --
            }
        }
    }
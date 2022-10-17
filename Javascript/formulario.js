
 const nome = document.getElementById("name")
 const email = document.getElementById("email")
 const affair = document.getElementById("affair")
 const form = document.getElementById("form")
 const paragrafo = document.getElementById("warnings")

 form.addEventListener("submit" , e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    paragrafo.innerHTML = ""
    if(nome.value.length <6){
       warnings += `Nome muito curto <br>`
       entrar = true
    }
     
     
    if(!regexEmail.test(email.value)){
        warnings += `O email não é valido <br>`
        entrar = true
    }
    if(affair.value.length < 1){
        warnings += `Não é um asunto <br>`
        entrar = true
    }
    if(entrar){
        paragrafo.innerHTML = warnings
    }else{
        paragrafo.innerHTML = "Enviado"
    }

    
    
 })
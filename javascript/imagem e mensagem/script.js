function carregar(){
    img = document.querySelector('img#img')
    titulo = document.querySelector('h1#titulo')
    data = new Date()
    hora = data.getHours()
    minuto = data.getMinutes()
    segundo = data.getSeconds()    
    horario.innerHTML = `${hora}:${minuto}:${segundo}`

    if(hora>=0 && hora<12)
    {
        //bom dia!
        titulo.innerHTML = `BOM DIA!!!`
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ffd277'
        horario.style.color = '#ffd277'
    }
    else if(hora>=12 && hora<=18)
    {
        //boa tarde!
        titulo.innerHTML = `BOA TARDE!!!`
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#7b7670'
        horario.style.color = '#7b7670'
    }
    else
    {
        //boa noite!
        titulo.innerHTML = `BOA NOITE!!!`
        img.src = 'imagens/noite.png'
        document.body.style.background = '#04304b'
        horario.style.color = '#04304b'
    }
}

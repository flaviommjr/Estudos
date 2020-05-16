function carregar(){
    img = document.querySelector('img#img')
    titulo = document.querySelector('h1#titulo')
    
    timer = setInterval(myTimer, 1000)
    function myTimer() {
        
        data = new Date()
        semana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
        diasem = data.getDay()
        dia = data.getDate()
        if(dia < 10)
        {
            dia = '0' + dia
        }
    
        mes = data.getMonth()
        mes++
        if(mes < 10)
        {
            mes = '0' + mes
        }

        ano = data.getFullYear()

        hora = data.getHours()
        if(hora < 10)
        {
            hora = '0' + hora
        }
        minuto = data.getMinutes()
        if(minuto < 10)
        {
            minuto = '0' + minuto
        }

        segundo = data.getSeconds()
        if(segundo < 10)
        {
            segundo = '0' + segundo
        }
        
        horario.innerHTML = `${semana[diasem]} ${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`

        if(hora>=0 && hora<12)
        {
            //bom dia!
            titulo.innerHTML = `BOM DIA!!!`
            img.src = 'imagens/manha.png'
            document.body.style.background = 'linear-gradient(180deg, #7cbae9, #ffffff, #fffd41, #ffd277)'
            horario.style.color = '#ffd277'
        }
        else if(hora>=12 && hora<=18)
        {
            //boa tarde!
            titulo.innerHTML = `BOA TARDE!!!`
            img.src = 'imagens/tarde.png'
            document.body.style.background = 'linear-gradient(180deg, #e77d00, #fffd41, #7b7670)'
            horario.style.color = '#7b7670'
        }
        else
        {
            //boa noite!
            titulo.innerHTML = `BOA NOITE!!!`
            img.src = 'imagens/noite.png'
            document.body.style.background = 'linear-gradient(180deg, #000000, #04304b, #000000)'
            horario.style.color = '#04304b'
        }
    }    
}

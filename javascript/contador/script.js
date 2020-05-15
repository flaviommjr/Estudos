function contar() {
    
    let resultado = document.querySelector('div#resultado')

    resultado.innerHTML = ''

    let inicio = document.querySelector('input#inicio')
    let final = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')

    if (inicio.value.length == 0)
    {
        window.alert ('[ERRO] - Necessário ter um número inicial...')
    }
    else if (final.value.length == 0)
    {
        window.alert ('[ERRO] - Necessário ter um número final...')
    }
    else if (passo.value.length == 0)
    {
        window.alert ('[ERRO] - Necessário número de passo...')
    }
    else
    {
        let ini = Number(inicio.value)
        let fim = Number(final.value)
        let pass = Number(passo.value)

        if(pass == 0)
        {
            window.alert ('[ERRO] - Número de passo mínimo é "1"...\n Considerando passo = 1...')
            pass = 1                
        }

        if(ini < fim)
        {               
            for (ini; ini <= fim; ini += pass)
            {
                resultado.style.textAlign = 'center'
                //resultado.innerHTML += `${ini} \u{1F4A2} `
                resultado.innerHTML += `${ini} \u{1F449} `
            }         
        }
        else
        {
            for (ini; ini >= fim; ini -= pass)
            {
               resultado.style.textAlign = 'center'
               //resultado.innerHTML += `${ini} \u{1F4A2} `
               resultado.innerHTML += `${ini} \u{1F449} `                  
            }            
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
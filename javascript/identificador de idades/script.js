function verificar()
{
    info = new Date()
    anoAtual = info.getFullYear()
    mesAtual = info.getMonth()
    diaAtual = info.getDate()

    anoUsuario = document.querySelector('input#ano')
    resp = document.querySelector('div#resp')  

    if(anoUsuario.value.length == 0 || Number(anoUsuario.value)  > anoAtual)
    {
        window.alert('[ERRO] - Necessário indicar o ano de nascimento!')
    }
    else if(anoUsuario.value.length < 4 || anoUsuario.value.length > 4)
    {
        window.alert('[ERRO] - Digite o ano de nascimento com 4 algarismos!')
    }
    else
    {
        sex = document.getElementsByName('sex')
        resultado = anoAtual - Number(anoUsuario.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(sex[0].checked)
        {            
            if(resultado >= 1 && resultado < 5)
            {
                //bebe
                genero = 'Bebê (menino)'
                img.setAttribute('src','imagens/bebe-masc.png')
            }
            else if(resultado < 11)
            {
                //crianca
                genero = 'Criança (menino)'
                img.setAttribute('src','imagens/crianca-masc.png')
            }
            else if(resultado < 18)
            {
                //jovem
                genero = 'Jovem (Homem)'
                img.setAttribute('src','imagens/jovem-masc.png')
            }
            else if(resultado < 60)
            {
                //adulto
                genero = 'Adulto (Homem)'
                img.setAttribute('src','imagens/adulto-masc.png')
            }
            else
            {
                //idoso
                genero = 'Idoso (Homem)'
                img.setAttribute('src','imagens/idoso-masc.png')
            }
        }
        else if(sex[1].checked)
        {            
            if(resultado >= 1 && resultado < 4)
            {
                //bebe
                genero = 'Bebê (menina)'
                img.setAttribute('src','imagens/bebe-fem.png')
            }
            else if(resultado < 10)
            {
                //crianca
                genero = 'Criança (menina)'
                img.setAttribute('src','imagens/crianca-fem.png')
            }
            else if(resultado < 17)
            {
                //jovem
                genero = 'Jovem (Mulher)'
                img.setAttribute('src','imagens/jovem-fem.png')
            }
            else if(resultado < 60)
            {
                //adulto
                genero = 'Adulto (Mulher)'
                img.setAttribute('src','imagens/adulto-fem.png')
            }
            else
            {
                //idoso
                genero = 'Idoso (Mulher)'
                img.setAttribute('src','imagens/idoso-fem.png')
            }
        }
        resp.style.textAlign = 'center'
        resp.innerHTML = `Foi detectado ${genero} com ${resultado} anos.`
        resp.appendChild(img)
    }
}

function mostrar()
{
    qtd = document.getElementsByName('qtd')
    if(qtd[1].checked)
    {
        document.querySelector('div#num2').style.display = 'block'
        document.querySelector('div#resultado2').style.display = 'block'
        lab1.innerHTML = 'Digite o 1° número:'        
    }
    else
    {
        document.querySelector('div#num2').style.display = 'none'
        document.querySelector('div#resultado2').style.display = 'none'
        lab1.innerHTML = 'Digite um número:'        
    }   
}

function gerar()
{
    sent = document.getElementsByName('sentido')    
    num = document.querySelector('input#numero')
    num2 = document.querySelector('input#numero2')
    qtd = document.getElementsByName('qtd')

    if(qtd[1].checked)
    {
        if(num.value.length == 0)
        {
            alert('[ERRO] - Necessário um número para gerar a 1ª tabuada!')
        }
        else if(num2.value.length == 0)
        {
            alert('[ERRO] - Necessário um número para gerar a 2ª tabuada!')
        }
        else
        {
            numb = Number(num.value)
            numb2 = Number(num2.value)

            if(sent[0].checked)
            {
                resultado1.innerHTML = ''
                for(let i = 0; i <= 10; i++)
                {
                    resultado1.innerHTML += `${numb} x ${i} = ${numb*i}` + `<br>`            
                }

                resultado2.innerHTML = ''
                for(let i = 0; i <= 10; i++)
                {
                    resultado2.innerHTML += `${numb2} x ${i} = ${numb2*i}` + `<br>`            
                }
            }
            else
            {
                resultado1.innerHTML = ''
                for(let i = 10; i >= 0; i--)
                {
                    resultado1.innerHTML += `${numb} x ${i} = ${numb*i}` + `<br>`            
                }

                resultado2.innerHTML = ''
                for(let i = 10; i >= 0; i--)
                {
                    resultado2.innerHTML += `${numb2} x ${i} = ${numb2*i}` + `<br>`            
                }
            }
        }        
    }
    else
    {
        if(num.value.length == 0)
        {
            alert('[ERRO] - Necessário um número para gerar a tabuada!')
        }
        else
        {
            numb = Number(num.value)

            if(sent[0].checked)
            {
                resultado1.innerHTML = ''
                for(let i = 0; i <= 10; i++)
                {
                    resultado1.innerHTML += `${numb} x ${i} = ${numb*i}` + `<br>`            
                } 
            }
            else
            {
                resultado1.innerHTML = ''
                for(let i = 10; i >= 0; i--)
                {
                    resultado1.innerHTML += `${numb} x ${i} = ${numb*i}` + `<br>`            
                }
            }
        }        
    }    
}
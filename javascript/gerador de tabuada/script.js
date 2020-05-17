function mostrar(){

    qtd = document.getElementsByName('qtd')
    if(qtd[1].checked)
    {
        document.querySelector('div#num2').style.display = 'block'
        document.querySelector('select#resultado2').style.display = 'block'
        document.querySelector('div#sentido2').style.display = 'block'
        lab1.innerHTML = 'Digite o 1° número:'
        titSentido.innerHTML = '1° sentido:'
    }
    else
    {
        document.querySelector('div#num2').style.display = 'none'
        document.querySelector('select#resultado2').style.display = 'none'
        document.querySelector('div#sentido2').style.display = 'none'
        lab1.innerHTML = 'Digite um número:'
        titSentido.innerHTML = 'Sentido:'
    }
}

//-------------------------------------------------------

function gerar(){

    sent = document.getElementsByName('sentido')
    sent2 = document.getElementsByName('sentid')    
    num = document.querySelector('input#numero')
    num2 = document.querySelector('input#numero2')
    qtd = document.getElementsByName('qtd')
    result1 = document.querySelector('select#resultado1')
    result2 = document.querySelector('select#resultado2')

    if(qtd[1].checked){
        
        if(num.value.length == 0){
            
            alert('[ERRO] - Necessário um número para gerar a 1ª tabuada!')
        
        }else if(num2.value.length == 0){
        
            alert('[ERRO] - Necessário um número para gerar a 2ª tabuada!')
        
        }else{

            numb = Number(num.value)
            numb2 = Number(num2.value)

            if(sent[0].checked && sent2[0].checked){

                resultado1.innerHTML = ''
                for(let i = 0; i <= 10; i++){
                    
                    let item = document.createElement('option')
                    item.text = `${numb} x ${i} = ${numb*i}`
                    item.value = `tabuada-1${i}`
                    result1.appendChild(item)
                }

                resultado2.innerHTML = ''
                for(let i = 0; i <= 10; i++){

                    let item = document.createElement('option')
                    item.text = `${numb2} x ${i} = ${numb2*i}`
                    item.value = `tabuada-2${i}`
                    result2.appendChild(item)
                }

            }else if(sent[1].checked && sent2[1].checked){

                resultado1.innerHTML = ''
                for(let i = 10; i >= 0; i--){

                    let item = document.createElement('option')
                    item.text = `${numb} x ${i} = ${numb*i}`
                    item.value = `tabuada-1${i}`
                    result1.appendChild(item)
                }

                resultado2.innerHTML = ''
                for(let i = 10; i >= 0; i--){

                    let item = document.createElement('option')
                    item.text = `${numb2} x ${i} = ${numb2*i}`
                    item.value = `tabuada-2${i}`
                    result2.appendChild(item)
                }

            }else if(sent[0].checked && sent2[1].checked){

                resultado1.innerHTML = ''
                for(let i = 0; i <= 10; i++){

                    let item = document.createElement('option')
                    item.text = `${numb} x ${i} = ${numb*i}`
                    item.value = `tabuada-1${i}`
                    result1.appendChild(item)
                }

                resultado2.innerHTML = ''
                for(let i = 10; i >= 0; i--){

                    let item = document.createElement('option')
                    item.text = `${numb2} x ${i} = ${numb2*i}`
                    item.value = `tabuada-2${i}`
                    result2.appendChild(item)
                }

            }else{

                resultado1.innerHTML = ''
                for(let i = 10; i >= 0; i--){

                    let item = document.createElement('option')
                    item.text = `${numb} x ${i} = ${numb*i}`
                    item.value = `tabuada-1${i}`
                    result1.appendChild(item)
                }

                resultado2.innerHTML = ''
                for(let i = 0; i <= 10; i++){

                    let item = document.createElement('option')
                    item.text = `${numb2} x ${i} = ${numb2*i}`
                    item.value = `tabuada-2${i}`
                    result2.appendChild(item)
                }

            }

        }

    }else{

        if(num.value.length == 0){

            alert('[ERRO] - Necessário um número para gerar a tabuada!')
        
        }else{

            numb = Number(num.value)

            if(sent[0].checked){

                resultado1.innerHTML = ''
                for(let i = 0; i <= 10; i++){

                    let item = document.createElement('option')
                    item.text = `${numb} x ${i} = ${numb*i}`
                    item.value = `tabuada-1${i}`
                    result1.appendChild(item)
                }
            }
            else{

                resultado1.innerHTML = ''
                for(let i = 10; i >= 0; i--){

                    let item = document.createElement('option')
                    item.text = `${numb} x ${i} = ${numb*i}`
                    item.value = `tabuada-1${i}`
                    result1.appendChild(item)
                }

            }

        }

    }

}
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include<math.h>
#include<locale.h>

//converte datas completas em dias
int converterdia(int x, int y, int z)
{
    int soma, ano, mes, dia;

    ano=z*365; mes=y*30; dia=x;

    soma=ano+mes+dia;

    return soma;
}

//calcula a diferença em dias por conta dos anos bisextos
int anobisexto(int x)
{
    int bisex;

    bisex=(x-1583)/4;

    return bisex;
}

int main()
{
    
    //retorna a data atual
    struct tm *data_hora_atual;
    time_t segundos;
    time(&segundos);
    data_hora_atual = localtime(&segundos);

    int dia, mes, ano, datadias, bisex, datacomp; 
    //adiciona dia mês e ano corretamente nas variáveis correspondentes
    dia=data_hora_atual->tm_mday;
    mes=data_hora_atual->tm_mon+1;
    ano=data_hora_atual->tm_year+1900;

    //retorna a data completa do computador convertida para dias
    datadias=converterdia(dia, mes, ano);
    //retorna a diferença em dias por conta dos anos bisextos
    bisex=anobisexto(ano);
    //adiciona a uma variável a soma da data completa em dias mais a diferença em dias dos anos bisextos (computador)
    datacomp=datadias+bisex;

    int anobisexusuario, datausuario[3], datausuariodias, datauser;
    //obtém a data de nascimento do usuário
    printf("\nDigite a data de nascimento desejada para verificar sua idade: (dia = xx / mês = xx / ano = xxxx)\n");
    
    int x;
    for(x=0;x<3;x++)
    {
        printf("Digite o %d° campo:\n",x+1);
        scanf(" %d",&datausuario[x]);
    }
    //retorna a data completa do usuário convertida para dias
    datausuariodias=converterdia(datausuario[0],datausuario[1],datausuario[2]);
    ////retorna a diferença em dias por conta dos anos bisextos
    anobisexusuario=anobisexto(datausuario[2]);
    //adiciona a uma variável a soma da data completa em dias mais a diferença em dias dos anos bisextos (usuário)
    datauser=datausuariodias+anobisexusuario;

    int resultadodias, rano, rmes, rdia;
    //calcula a diferença entre a data atual e a data de nascimento do usuário (em dias)
    resultadodias=datacomp-datauser;
    
    rano=resultadodias/365;
    rmes=(resultadodias%365)/30;
    rdia=(resultadodias%365)%30;
    
    printf("\n\nNo dia de hoje, você possui %d anos, %d meses e %d dias.\n\n",rano, rmes, rdia);


    return 0;
}
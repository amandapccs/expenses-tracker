
## Projeto Expenses Tracker - JavaScript - React - Redux

Neste projeto foi desenvolvida uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:

- Adicionar, remover e editar um gasto;
- Visualizar uma tabela com seus gastos;
- Visualizar o total de gastos convertidos para uma moeda de escolha;

O usuário irá navegar entre 2 rodas:
- A rota inicial, que serve para realizar o Login. Essa rota conta com uma verificação de emails válidos e uma senha mínima de 6 caracteres para habilitar o botão 'Entrar' e ser redirecionado para a rota seguinte.
- Uma rota para a carteira e manejo dos gastos, a qual estão concentradas as funcionalidades principais da aplicação.

## Sumário

[Tecnologias](#tecnologias)

[Como instalar e inicializar o projeto](#como-instalar-e-inicializar-o-projeto)

[Documentação da API de Cotações de Moedas](#documentação-da-api-de-cotações-de-moedas)

[Imagens da aplicação em funcionamento](#imagens-da-aplicação-em-funcionamento)

[Pessoa responsável pelo desenvolvimento](#pessoa-responsável-pelo-desenvolvimento)

## Tecnologias

- Projeto desenvolvido na linguagem Javascript;
- Utiliza a biblioteca React para montar interfaces;
- Utiliza a biblioteca Redux para gerenciamento de estado global.

## Como instalar e inicializar o projeto

- Instale as dependências com o comando:
  - `npm install`
- Inicialize o projeto com o comando:
  - `npm start`


## Documentação da API de Cotações de Moedas

A Expenses-Tracker consome os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, vocês precisarão consultar o seguinte _endpoint_:

- <https://economia.awesomeapi.com.br/json/all>

Se você quiser aprender mais informações sobre a API, veja a [documentação](https://docs.awesomeapi.com.br/api-de-moedas).

## Imagens da aplicação em funcionamento
![UnxDa08](https://user-images.githubusercontent.com/97243572/169604284-05f8f0a1-60e4-449a-a8e6-2b376c07abce.png)
- Tela de Login

![RmL1HBO](https://user-images.githubusercontent.com/97243572/169604305-c75f1d89-57a9-4c54-a744-b07eaf37f38a.png)
- Tela da rota principal.

# Pessoa responsável pelo desenvolvimento:
1. [amandapccs](https://github.com/amandapccs)


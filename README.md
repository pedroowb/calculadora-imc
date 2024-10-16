# Calculadora de IMC

Este é um projeto simples de uma calculadora de **IMC (Índice de Massa Corporal)**, que permite ao usuário inserir seu peso e altura para descobrir em qual faixa de peso ele se encontra (abaixo do peso, peso normal, sobrepeso ou obesidade).

## Funcionalidades

- O usuário insere o peso e a altura nos campos correspondentes.
- O IMC é calculado com base nos valores inseridos.
- O resultado mostra a faixa de IMC em que o usuário se enquadra, junto com o valor calculado.
- Usa **HTML**, **CSS** e **JavaScript**.

## Como usar

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo **`index.html`** em um navegador.
3. Insira o **peso** e a **altura** nos campos fornecidos.
4. Clique no botão "Enviar" para calcular seu IMC.
5. O resultado será exibido em um popup com a classificação correspondente.

## Estrutura do Projeto

- **`index.html`**: Estrutura principal da página.
- **`style.css`**: Estilos da calculadora (pode ser ajustado conforme o layout desejado).
- **`script.js`**: Lógica do cálculo do IMC e manipulação da interface.

## Fórmula do IMC

O IMC é calculado usando a fórmula:

IMC = peso (kg) / altura (m)²

## Classificação do IMC

- **Abaixo de 18,5**: Abaixo do peso
- **Entre 18,5 e 24,9**: Peso normal
- **Entre 25 e 29,9**: Sobrepeso
- **30 ou mais**: Obesidade

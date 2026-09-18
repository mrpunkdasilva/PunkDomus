---
title:  🙅🏾‍♂️ Flexbox Sem Frescura
description: Desvende o CSS Flexbox de forma simples e prática! Este guia completo explora os fundamentos, terminologias e todas as propriedades essenciais do Flexbox. Aprenda a criar layouts flexíveis e responsivos com exemplos de código e recursos para aprofundar seus conhecimentos. 
tags: [css,web]
slug: flexbox-simples-e-pratico
img: flexbox-simples-e-pratico.png
createdAt: 2025-07-10
---



**Table of Contents**

- [Introdução ao CSS Flexbox](#introdu%C3%A7%C3%A3o-ao-css-flexbox)
	- [O que é Flexbox?](#o-que-%C3%A9-flexbox)
	- [Quais são os benefícios?](#quais-s%C3%A3o-os-benef%C3%ADcios)
	- [Modelos de Layouts](#modelos-de-layouts)
	- [Vantagens do Flexbox](#vantagens-do-flexbox)
- [Terminologia](#terminologia)
	- [Flex Container](#flex-container)
	- [Flex Items](#flex-items)
	- [Flex Lines](#flex-lines)
	- [Direções e Dimensionamento](#dire%C3%A7%C3%B5es-e-dimensionamento)
- [Tipos de displays flex: `display: flex;` e `display: inline-flex;`](#tipos-de-displays-flex-display-flex-e-display-inline-flex)
	- [Introdução](#introdu%C3%A7%C3%A3o)
	- [Diferença entre `display: flex;` e `display: inline-flex;`](#diferen%C3%A7a-entre-display-flex-e-display-inline-flex)
	- [Uso](#uso)
- [Flex Direction](#flex-direction)
	- [Propriedades de Direção:](#propriedades-de-dire%C3%A7%C3%A3o)
	- [Propriedades de Direção com Ordenamento Inverso:](#propriedades-de-dire%C3%A7%C3%A3o-com-ordenamento-inverso)
	- [Uso](#uso)
- [Flex Wrap](#flex-wrap)
	- [Propriedades de Flex Wrap:](#propriedades-de-flex-wrap)
	- [Uso](#uso)
- [Justify Content](#justify-content)
	- [Valores:](#valores)
	- [Uso](#uso)
- [Align Items](#align-items)
	- [Valores:](#valores)
	- [Uso](#uso)
- [Flex Grow](#flex-grow)
	- [Como funciona:](#como-funciona)
	- [Uso](#uso)
- [Flex Shrink](#flex-shrink)
	- [Como funciona:](#como-funciona)
	- [Uso](#uso)
- [Flex Basis](#flex-basis)
	- [Detalhes:](#detalhes)
	- [Uso](#uso)
- [Propriedade Flex](#propriedade-flex)
	- [Valor padrão:](#valor-padr%C3%A3o)
	- [Sintaxe:](#sintaxe)
	- [Detalhes:](#detalhes)
	- [Uso](#uso)
- [Propriedade Order](#propriedade-order)
	- [Detalhes:](#detalhes)
	- [Regras de ordenação:](#regras-de-ordena%C3%A7%C3%A3o)
	- [Uso](#uso)
- [Align Self](#align-self)
	- [Valor padrão:](#valor-padr%C3%A3o)
	- [Valores:](#valores)
	- [Uso](#uso)
- [Nota do autor](#nota-do-autor)

---

## Introdução ao CSS Flexbox

### O que é Flexbox?  
- O **CSS Flexible Box Layout Model** (Modelo de Layout de Caixa Flexível do CSS) é um modelo de layout que oferece uma maneira eficiente de:  
  - Dispor, alinhar e distribuir espaços entre os itens de um contêiner.  

### Quais são os benefícios?  
- Permite o alinhamento das caixas para criar layouts em duas dimensões.  
- A ordem de exibição dos elementos é independente da ordem no código-fonte.  


### Modelos de Layouts  
- Layout em tabelas.  
- Layout em blocos.  
- Layout em linhas.  
- Layout posicionado.  

### Vantagens do Flexbox  
- O layout flex oferece diversas vantagens, como:  
  - Posicionamento preciso dos elementos.  
  - Capacidade de alongamento e redimensionamento.  
  - Ajuste do tamanho dos elementos conforme necessário.  
  - Maior flexibilidade no design.  
  - Controle sobre o espaçamento, escolha e ordenação dos itens.  

---

## Terminologia

### Flex Container  
- **Flexbox** é um modelo de layout que funciona através de um conjunto de propriedades específicas.  
- O primeiro elemento necessário é o **Flex Container**. Para se tornar flexível, o contêiner recebe a propriedade `display` com o valor `flex` ou `inline-flex`.  


### Flex Items  
- Outro elemento essencial são os **Flex Items**, que são os itens (filhos diretos) de um **Flex Container**.  


### Flex Lines  
- Os elementos filhos do **Flex Container** são dispostos e alinhados em linhas flexíveis (**Flex Lines**).  
- Um **Flex Container** pode conter uma única linha ou múltiplas linhas.  


### Direções e Dimensionamento  
- As direções e termos de dimensionamento aplicam-se ao contêiner flexível, permitindo controle detalhado sobre como os elementos são dispostos e redimensionados.  

---

## Tipos de displays flex: `display: flex;` e `display: inline-flex;`

### Introdução  
- Usar `display: flex;` ou `display: inline-flex;` transforma o elemento em uma **caixa flexível**, sendo essa a primeira propriedade necessária para utilizar o Flexbox.  
- Ao aplicar essa propriedade, o elemento se torna um **Flex Container**, e seus filhos diretos passam a ser **Flex Items**.  
- Os **Flex Items** têm a propriedade de se esticar (ou se alongar) para ocupar todo o espaço disponível dentro do **Flex Container**. Por conta disso, eles perdem o tamanho ou largura definidos anteriormente, exigindo atenção ao comportamento do layout.  

### Diferença entre `display: flex;` e `display: inline-flex;`  
- `display: flex;`:  
  - Transforma o **Flex Container** em um elemento de **bloco**.  
  - Os **Flex Items** são dispostos em uma única **Flex Line** (linha flexível).  

- `display: inline-flex;`:  
  - Transforma o **Flex Container** em um elemento **inline**.  
  - Permite que múltiplos contêineres com `inline-flex` sejam dispostos lado a lado, diferentemente do comportamento de `display: flex;`.  


### Uso

- **Código:**
```css
/*Modulo 1/3 display-flex inline-flex/3-display-flex-inline-flex.html*/
.wrraper{
	padding: 1%;
	margin-top: 1em;
}

.container-flex, .container-inline-flex{
	background-color: #85d0bc;				
	border: 1px solid #028082;
	width: 30%;
	padding: 1%;
	margin: 0 auto;
	color: #028082;
}	

.container-flex{
	display: flex;
}

.container-inline-flex{
	display: inline-flex;
	background-color: #d0b285;				
	border: 1px solid #822b02;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xcsozwihwdal907t85ik.png)


> 🔗 **Resource**: https://github.com/mrpunkdasilva/CSS-Flex-Box/blob/master/Modulo%201/3%20display-flex%20inline-flex/3-display-flex-inline-flex.html


---

## Flex Direction 

O **Flex Direction** é uma propriedade do CSS que define a direção do eixo principal de um container flexível. Existem duas direções principais, e para cada uma delas, há um comportamento específico dos itens dentro do container. Quando o eixo principal é alterado, há também uma alteração nas propriedades dos itens flexíveis.

### Propriedades de Direção:

- **`flex-direction: row;`**
  - Ao usar `flex-direction: row;`, o eixo principal dos itens flexíveis é definido na horizontal. Os itens se ajustam automaticamente para preencher a largura total do container, podendo diminuir ou se alongar conforme necessário.
  - **Nota**: `flex-direction: row` é o valor padrão.

- **`flex-direction: column;`**
  - Ao utilizar `flex-direction: column;`, o eixo principal é definido na vertical. Os itens são empilhados verticalmente, ocupando a altura do container em vez de sua largura. Cada item se ajusta para ocupar a altura máxima disponível.

### Propriedades de Direção com Ordenamento Inverso:

- **`flex-direction: row-reverse;`**
  - Semelhante ao `row`, mas com a ordem dos itens flexíveis invertida. O último item ficará na primeira posição, e assim por diante.

- **`flex-direction: column-reverse;`**
  - Semelhante ao `column`, mas com a ordem dos itens flexíveis invertida. O último item ficará no topo da pilha, enquanto os itens anteriores serão organizados a partir de baixo.


### Uso

- **Código:**
```css
/*
Modulo 1/4 flex direction/flex-direction.html
*/
.direction-row, .direction-column{
	display: flex;
	background-color: #85d0bc;				
	border: 1px solid #028082;
	width: 30%;
	padding: 1%;
	margin: 0 auto;
	color: #028082;
}	

.direction-column{
	flex-direction: column;	
	margin-bottom: 2em;
}

.direction-row{
	flex-direction: row;	
}
```

- **Resultado:** no primeiro é o `column` no segundo é o `row`

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ubgdkd2nw1jwpvln72nx.png)

> 🔗 **Resource**: https://github.com/mrpunkdasilva/CSS-Flex-Box/blob/master/Modulo%201/4%20flex%20direction/flex-direction.html

---

## Flex Wrap


O **flex-wrap** é uma propriedade do CSS que define se os itens dentro de um container flexível devem "quebrar" para uma nova linha ou coluna quando o espaço disponível não for suficiente. Isso impede que os itens preencham a largura ou altura do container, permitindo que eles se reorganizem de forma mais flexível.

### Propriedades de Flex Wrap:

- **`flex-wrap: wrap;`**
  - Esta propriedade define que os itens podem quebrar e criar novas linhas ou colunas, respeitando seus valores originais de largura ou altura. Os itens serão distribuídos para ocupar as novas linhas ou colunas conforme necessário.

- **`flex-wrap: wrap-reverse;`**
  - Semelhante ao `wrap`, mas a ordem dos itens será invertida ao quebrar a linha. Ou seja, os itens serão organizados de forma reversa nas novas linhas ou colunas.

- **`flex-wrap: nowrap;`**
  - Quando essa propriedade é utilizada, o wrap não acontece. Os itens são forçados a permanecer em uma única linha ou coluna, e o conteúdo pode transbordar do container se não houver espaço suficiente.

> **Nota**: Se os itens não couberem, o conteúdo transbordará do container flexível.

> **Observação**: Quando o `wrap` é utilizado e o eixo principal está na horizontal, os itens irão quebrar na direção horizontal. Se o eixo estiver na vertical, a quebra ocorrerá na direção vertical.


### Uso

- **Código:**
```css
/*
Modulo 1/5  flex-wrap/flex-wrap.html
*/
.container {
	display: flex;
	background-color: #85d0bc;				
	border: 1px solid #028082;
	flex-direction: row;
	width: 30%;
	height: 600px;
	padding: 1%;
	margin: 0 auto;
	color: #028082;
}	
.item {
	background-color: #cdf6eb;
	border: 1px solid #028082;
	width: 100px;
	height: 200px;
}
```
- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d3xexhq8zwm9rcpsqdq1.png)

> 🔗 **Resource**: https://github.com/mrpunkdasilva/CSS-Flex-Box/blob/master/Modulo%201/5%20%20flex-wrap/flex-wrap.html

---

## Justify Content

O **justify-content** é uma propriedade do CSS que alinha os itens dentro de um container flexível ao longo do eixo principal. Em alguns casos, é necessário utilizar o **flex-wrap** em conjunto para que os itens possam ser movidos na horizontal (ou vertical, dependendo da direção do eixo).

### Valores:

- **`justify-content: center;`**
  - Alinha os itens flexíveis no centro do container, distribuindo o espaço igualmente ao redor deles.

- **`justify-content: flex-start;`**
  - Alinha os itens flexíveis no início do container, com o espaço restante sendo distribuído após o último item.

- **`justify-content: flex-end;`**
  - Alinha os itens flexíveis no final do container, com o espaço restante antes do primeiro item.

- **`justify-content: space-between;`**
  - Distribui os itens flexíveis de modo que o espaço entre eles seja igual, mas não há espaço extra nas extremidades do container.

- **`justify-content: space-around;`**
  - Coloca um espaço igual ao redor de cada item flexível, incluindo as extremidades do container.

- **`justify-content: space-evenly;`**
  - Tenta distribuir o espaço de maneira igual entre os itens e ao redor deles, incluindo as extremidades.

> **Nota**: Quando o `flex-direction` está definido como `column`, a orientação do **justify-content** muda devido ao eixo principal ser vertical, enquanto em `row` ele é horizontal.


### Uso

- **Código:**
```css
/*
Modulo 1/6  justify-content/justify-content.html
*/
.container {
	display: flex;
	background-color: #85d0bc;				
	border: 1px solid #028082;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 30%;
	height: 600px;
	margin: 0 auto;
	color: #028082;
}	
.item {
	background-color: #cdf6eb;
	border: 1px solid #028082;
	width: 100px;
	height: 200px;
}	
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zammw1ia1epeqea1zl2m.png)

> 🔗 **Resource**: https://github.com/mrpunkdasilva/CSS-Flex-Box/blob/master/Modulo%201/6%20%20justify-content/justify-content.html


---

## Align Items

A propriedade **align-items** do CSS é responsável por alinhar os itens dentro de um container flexível no eixo transversal, ou seja, no eixo vertical quando o **flex-direction** está configurado para `row` (horizontal) ou no eixo horizontal quando o **flex-direction** está configurado para `column` (vertical).

### Valores:

- **`align-items: stretch;`**
  - Este é o valor padrão. Faz com que os itens flexíveis se estiquem para ocupar toda a altura (ou largura, dependendo da direção do eixo) do container.

- **`align-items: center;`**
  - Alinha os itens flexíveis no centro do container ao longo do eixo transversal (vertical ou horizontal, dependendo da direção do eixo principal).

- **`align-items: flex-start;`**
  - Alinha os itens no início do eixo transversal, ou seja, no topo do container (se o eixo principal for horizontal) ou à esquerda (se o eixo principal for vertical).

- **`align-items: flex-end;`**
  - Alinha os itens no final do eixo transversal, ou seja, na parte inferior do container (se o eixo principal for horizontal) ou à direita (se o eixo principal for vertical).

- **`align-items: baseline;`**
  - Alinha os itens flexíveis com base na linha de base do texto dentro de cada item, permitindo que o alinhamento seja feito de acordo com a linha de base de seus conteúdos.


### Uso

- **Código:**
```css
/*
Modulo 1/7  align-items/align-items.html
*/
.container {
	display: flex;
	background-color: #85d0bc;				
	border: 1px solid #028082;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: baseline;
	width: 30%;
	height: 600px;
	margin: 0 auto;
	color: #028082;
}	
.item {
	background-color: #cdf6eb;
	border: 1px solid #028082;
	width: 100px;
	height: 70px;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vbywo6uzb0m18kbxbw33.png)

> 🔗 **Resource**:https://github.com/mrpunkdasilva/CSS-Flex-Box/blob/master/Modulo%201/7%20%20align-items/align-items.html

---

## Flex Grow

A propriedade **flex-grow** define o fator de crescimento dos itens dentro de um container flexível. Seu valor padrão é 0, o que significa que, por padrão, os itens não crescem para ocupar o espaço disponível. O **flex-grow** recebe apenas valores numéricos.

### Como funciona:
O fator de crescimento é calculado usando a seguinte fórmula:

- **Unidade de Crescimento** = Espaço disponível / Somatória de todos os fatores de crescimento

- **Espaço disponível** = Largura do flex-container - Soma das larguras dos flex-items

Depois de calcular a unidade de crescimento, ela é somada à largura do item flexível, fazendo com que ele se expanda para preencher o espaço restante no container.

### Uso

- **Código:**
```css
/*
Modulo 1/9  flex-grow/flex-grow.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 1000px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}
.item {
	background-color: #cdf6eb;
	width: 150px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.item:nth-child(even) {
	background-color: #a4ddce;
}

.item:nth-child(2){
	flex-grow: 4;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i4242vnujnuf2kozaknp.png)

> 🔗 **Resource**: https://github.com/mrpunkdasilva/CSS-Flex-Box/blob/master/Modulo%201/9%20%20flex-grow/flex-grow.html

---

## Flex Shrink

A propriedade **flex-shrink** faz o inverso do **flex-grow**, determinando o fator de encolhimento dos itens flexíveis dentro de um container. Seu valor padrão é 1, o que significa que, por padrão, os itens podem encolher até a largura do flex-container, se necessário.

### Como funciona:
O fator de encolhimento é calculado usando a mesma fórmula do **flex-grow**:

- **Unidade de Encolhimento** = Espaço disponível / Somatória de todos os fatores de encolhimento

- **Espaço disponível** = Largura do flex-container - Soma das larguras dos flex-items

A unidade de encolhimento é aplicada para fazer com que os itens se encolham proporcionalmente para ajustar o layout ao tamanho disponível do container.

### Uso

- **Código:**
```css
/*
Modulo 1/10  flex-shrink/flex-shrink.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 500px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}
.item {
	background-color: #cdf6eb;
	width: 200px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.item:nth-child(even) {
	background-color: #a4ddce;
	flex-shrink: 6;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3609g0ckjj78m9qh995a.png)

> 🔗 **Resource**: https://github.com/mrpunkdasilva/CSS-Flex-Box/blob/master/Modulo%201/10%20%20flex-shrink/flex-shrink.html
> 
---

## Flex Basis

A propriedade **flex-basis** define a dimensão inicial de um item flexível, que pode ser a largura ou a altura, dependendo da direção do eixo. Quando a direção do eixo está na horizontal, a dimensão alterada é a largura; quando está na vertical, a dimensão alterada é a altura.

### Detalhes:

- **Unidades de medida**: O valor de **flex-basis** é definido utilizando unidades de medida, como pixels, porcentagens, entre outras.
  
- **Valor padrão**: O valor padrão de **flex-basis** é `auto`. Quando configurado como `auto`, a dimensão do item será equivalente ao tamanho do flex-container.

- **Valor zero**: Quando **flex-basis** é definido como zero, o item não ocupará nenhuma dimensão inicial, a menos que tenha uma propriedade de **flex-grow** ou uma largura já definida.

- **Conteúdo maior**: Se o conteúdo de um item for maior que a dimensão definida em **flex-basis**, o item não terá a dimensão definida e se ajustará ao tamanho do conteúdo.

- **Interação com `width` e `height`**: Quando **flex-basis** é definido com um valor maior que zero, as propriedades **width** e **height** não terão efeito. Para que isso ocorra, o valor de **flex-basis** deve ser maior que zero.

- **Limitações com `min-width` e `max-width`**: Você pode restringir o comportamento de **flex-basis** com as propriedades **min-width**, **max-width**, **min-height** e **max-height**. O **flex-grow**, **flex-shrink** e **flex-basis** usarão esses limites como referência.

- **Uso com `wrap`**: Quando **flex-basis** é utilizado juntamente com o **wrap**, se um item não couber na mesma linha que os outros, ele será quebrado e ajustado para caber na nova linha.

### Uso

####  [flex-basis-largura-altura](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis/11.1%20%20flex-basis-largura-altura)

- **Código:**
```css
/*
Modulo 1/11 flex-basis/11.1  flex-basis-largura-altura/flex-basis-largura-altura.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 550px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
	overflow: hidden;
	border-radius: 12%;
}
.item {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #cdf6eb;
	box-shadow: 0 0 12rem #fff;
	height: 150px;
	border-radius: 5%;
	margin-top: 20%;
	margin-right: 4px;
	flex-basis: 250px;
	flex-shrink: 0;
	animation: rotateItem 6s infinite;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sv39cumzgn2xeztyxz3s.png)


#### [flex-basis-auto](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis/11.2%20flex-basis-auto)
- **Código:**
```css
/*
Modulo 1/11 flex-basis/11.2 flex-basis-auto/flex-basis-auto.html
*/
.container {
	display: flex;
	flex-direction: column;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 500px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}
.item {
	background-color: #cdf6eb;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-basis: auto;
}
.item:nth-child(even) {
	flex-grow: 1;
	background-color: #a4ddce;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cuvwlsdrssd6w17mca81.png)

> 🔗 **Resource**: https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis



####  [flex-basis-zero](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis/11.3%20flex-basis-zero)
- **Código:**
```css
/*
Modulo 1/11 flex-basis/11.3 flex-basis-zero/flex-basis-zero.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 500px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}
.item {
	background-color: #cdf6eb;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
}
.item:nth-child(even) {
	background-color: #a4ddce;
}
```

- **Resultado:**
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ppozmr69zb3qpxsjfk3q.png)

#### [flex-basis-conteúdo-maior](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis/11.4%20flex-basis-conte%C3%BAdo-maior)

- **Código:**
```css
/*
Modulo 1/11 flex-basis/11.4 flex-basis-conteúdo-maior/flex-basis-conteúdo-maior.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 1000px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}
.item {
	background-color: #cdf6eb;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-basis: 1200px;
}
.item:nth-child(even) {
	background-color: #a4ddce;
}
.item:nth-child(1) {
	flex-basis: auto;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z90y91axurv5tvf3ekxt.png)

#### [flex-basis-conteúdo-width-height](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis/11.5%20flex-basis-conte%C3%BAdo-width-height)

- **Código:**
```css
/*
Modulo 1/11 flex-basis/11.5 flex-basis-conteúdo-width-height/flex-basis-conteúdo-width-height.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 500px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
	flex-direction: row;
}
.item {
	background-color: #cdf6eb;
	height: 70px;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-basis: 200px;
}
.item:nth-child(even) {
	background-color: #a4ddce;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6cbkl3pwvkma23er0puu.png)


#### [flex-basis-min-width](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis/11.6%20flex-basis-min-width)

- **Código:**
```css
/*
Modulo 1/11 flex-basis/11.6 flex-basis-min-width/flex-basis-min-width.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 500px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}
.item {
	background-color: #cdf6eb;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-basis: 90px;
	min-width: 100px;
	flex-grow: 0;
}
.item:nth-child(even) {
	background-color: #a4ddce;
}
```

- **Resultado:**
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nihdciejloxnyl1vv7ot.png)


#### [flex-basis-max-width](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis/11.7%20flex-basis-max-width)

- **Código:**
```css
/*
Modulo 1/11 flex-basis/11.7 flex-basis-max-width/flex-basis-max-width.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 600px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}
.item {
	background-color: #cdf6eb;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-basis: 30%;
	flex-shrink: 0;
}
.item:nth-child(even) {
	background-color: #a4ddce;
}
```

- **Resultado:**
  - Adivinhe porque o item estourou o componente pai

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h1fn52ej9qg7v0l1tauq.png)



#### [flex-basis-wrap](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis/11.8%20flex-basis-wrap)

- **Código:**
```css
/*
Modulo 1/11 flex-basis/11.8 flex-basis-wrap/flex-basis-wrap.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 400px;
	height: 160px;
	margin: 0 auto;
	color: #028082;
	flex-wrap: wrap;
}
.item {
	background-color: #cdf6eb;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-basis: 200px;
	flex-grow: 1
}
background-color: #a4ddce;
.item:nth-child(even) {
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wfe3ni78wajl3lh7wdbg.png)



> 🔗 **Resource de todos os exemplos deste tópico**: https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/11%20flex-basis

---

## Propriedade Flex

A propriedade **flex** é uma forma simplificada de declarar outras propriedades do Flexbox, como **flex-grow**, **flex-shrink** e **flex-basis**. Ela combina as três em uma única declaração.

### Valor padrão:
- **`flex: 0 1 auto;`**

### Sintaxe:
- **`flex: <flex-grow> <flex-shrink> <flex-basis>;`**

### Detalhes:

- Quando um número é especificado na propriedade **flex**, ele assume as seguintes significações:
  - O número especificado corresponde ao valor de **flex-grow**.
  - **flex-shrink** será igual a 1.
  - **flex-basis** será igual a 0.

Essa abordagem simplifica o uso do Flexbox, permitindo a declaração compacta de propriedades comuns em um único valor.



### Uso

#### [flex-valor-padrão](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/12%20flex/12.1%20flex-valor-padr%C3%A3o)
- **Código:**
```css
/*
Modulo 1/12 flex/12.1 flex-valor-padrão/flex-valor-padrão.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 500px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}
.item {
	background-color: #cdf6eb;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 0 2 100px;
}
```

- **Resultado:**
![[Flexbox Sem Frescura-ex17.png]]

####  [flex-valor-flexivel-inflexivel](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/12%20flex/12.2%20flex-valor-flexivel-inflexivel)
- **Código:**
```css
/*
Modulo 1/12 flex/12.2 flex-valor-flexivel-inflexivel/flex-valor-flexivel-inflexivel.html
*/
.container {
	display: flex;
	background-color: #85d0bc;				
	border: 1px solid #028082;
	width: 500px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}	
.item {
	background-color: #cdf6eb;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: auto;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l4p6x1w8p5uhbwzo2qrb.png)


####  [flex-valor-zero](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/12%20flex/12.3%20flex-valor-zero)
- **Código:**
```css
/*
Modulo 1/12 flex/12.3 flex-valor-zero/flex-valor-zero.html
*/
.container {
	display: flex;
	background-color: #85d0bc;
	border: 1px solid #028082;
	width: 500px;
	height: 400px;
	margin: 0 auto;
	color: #028082;
}
.item {
	background-color: #cdf6eb;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
}
.item:nth-child(even) {
	background-color: #a4ddce;
}
.item:nth-child(3) {
	flex: 2;
}
.item:nth-child(4) {
	flex: 0;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ej78e0of3vkloam7dbao.png)



> 🔗 **Resource**: https://github.com/mrpunkdasilva/CSS-Flex-Box/blob/master/Modulo%201/12%20flex/

---

## Propriedade Order

A propriedade **order** define a ordem em que os elementos (itens flexíveis) serão exibidos, mas não altera a ordem no HTML. Ela afeta apenas a disposição visual dos elementos.

### Detalhes:

- A **order** pode ser usada com qualquer valor numérico, onde a ordem visual dos itens será ajustada de acordo com o valor atribuído.
  
- O comportamento da **order** é o mesmo independentemente da direção (**row** ou **column**).

### Regras de ordenação:
- Números negativos aparecem antes de 0 e de números positivos.
- O número 0 aparece antes dos números negativos e depois dos números positivos.
- Números positivos aparecem depois de 0 e dos números negativos.


### Uso

- **Código:**
```css
/*
Modulo 1/13 order/order.html
*/
.item {
	background-color: #cdf6eb;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex: 1 1 auto;
	margin: 4px 8px;
}
.order_menosUm {
	order: -1;
}
.order {
	order: 0;
}
.order_1 {
	order: 1;
}
.order_2 {
	order: 2;
}
.order_3 {
	order: 3;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dwpig1prmhdrye5ia2nw.png)



> 🔗 **Resource**: https://github.com/mrpunkdasilva/CSS-Flex-Box/blob/master/Modulo%201/13%20order/order.html

---

## Align Self

A propriedade **align-self** permite alterar o alinhamento de um único item dentro de um container flexível, funcionando da mesma forma que **align-items**, mas aplicando-se apenas a um item específico.

### Valor padrão:
- **`auto`**: O item segue o valor de **align-items** do container.

### Valores:

- **`align-self: stretch;`**
  - Valor padrão. Estica o item para preencher o espaço disponível no eixo transversal.

- **`align-self: center;`**
  - Alinha o item no centro do eixo transversal (vertical ou horizontal, dependendo da direção do eixo principal).

- **`align-self: flex-start;`**
  - Alinha o item no início do eixo transversal.

- **`align-self: flex-end;`**
  - Alinha o item no final do eixo transversal.

- **`align-self: baseline;`**
  - Alinha o item com base na linha de base da tipografia dentro do item.


### Uso

#### [align-self-eixo-principal](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/14%20align-self/14.1%20align-self-eixo-principal)

- **Código:**
```css
/*
Modulo 1/14 align-self/14.1 align-self-eixo-principal/align-self-eixo-principal.html
*/
.item {
	background-color: #cdf6eb;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex: 1 1 auto;
}
.item:nth-child(even) {
	background-color: #a4ddce;
}

.stretch {
	align-self: stretch;
}
.flex-start{
	align-self: flex-start;
}
.flex-end{
	align-self: flex-end;
}
.center{
	align-self: center;
}
.baseline{
	align-self: baseline;
	font-size: 5em;
}
.baseline-2{
	align-self: baseline;
}
```

- **Resultado:**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/arw2jyw3s4jbfsxd5kry.png)

####  [align-self-eixo-transversal](https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/14%20align-self/14.2%20align-self-eixo-transversal)

- **Código:**
```css
/*
Modulo 1/14 align-self/14.2 align-self-eixo-transversal/align-self-eixo-transversal.html
*/
.item {
	background-color: #cdf6eb;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex: 1 1 auto;
}	
.item:nth-child(even) {
	background-color: #a4ddce;
}
.stretch {
	align-self: stretch;
}
.flex-start {
	align-self: flex-start;
}
.flex-end {
	align-self: flex-end;
}
.center {
	align-self: center;
}
.baseline {
	align-self: baseline;
} 
```

- **Resultado:**
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2f9g1oecs00i4q9g5l7k.png)


> 🔗 **Resource de todos esses exemplos deste tópico**: https://github.com/mrpunkdasilva/CSS-Flex-Box/tree/master/Modulo%201/14%20align-self


---

## Nota do autor

Espero que seja útil e recomendo usar como se fosse uma "colinha", já que é normal esquecermos os nomes ou funções, somente praticando acaba ficando enraizado na nossa massa cinzenta.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uqxdzpha343cx2dsddg3.gif)

Alguns jogos para praticar e aprender flexbox:
- [https://flexboxfroggy.com/](https://flexboxfroggy.com/)
- [https://mastery.games/flexboxzombies/](https://mastery.games/flexboxzombies/)
- [http://www.flexboxdefense.com/](http://www.flexboxdefense.com/)


<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/olsxvwz6jgnjj5mkygsf.png" height="50"/>


>  Documentação oficialísima, para quando o cuzinho apertar e nada na internet você achar: [https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)

Olhando mais adiante da pica reta do horizonte cofira os links para ver sobre Layout Grid, que é um dos principais modelos de layout usadas:
- [https://cssgridgarden.com/](https://cssgridgarden.com/)
- [https://codingfantasy.com/games/css-grid-attack/play](https://codingfantasy.com/games/css-grid-attack/play)
- [Doc oficial MDN Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)
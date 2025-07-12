---
title: Entendendo a acessibilidade web através do WAI-ARIA
description: Um guia completo sobre WAI-ARIA, explicando como ele revoluciona a acessibilidade web, seus conceitos, usos e a importância de tornar a web mais inclusiva. 
tags: [wai-aria, acessibility, web]
slug: wai-aria-a-revolucao-invisivel-da-web-acessivel
img: wai_aria_a_revolucao_invisivel_da_web_acessivel.png
createdAt: 2025-07-11
---

# WAI-Aria: A Revolução Invisível da Web Acessível


### Entendendo a acessibilidade web através do WAI-ARIA

<br>

## Introdução
![Introdução](https://cdn-images-1.medium.com/max/800/1*6yCfhvCrGIcBXOjAldskyA.png)

### Do que se trata?

**WAI-ARIA é uma série de regulamentações de construção de código** de um website **que visa uma maior acessibilidade seja atingida.**

**Define atributos HTML adicionais**, que podem ser aplicados a elementos para **providenciar acessibilidade onde se falta** com o código base.

<br>

---

<br>

![Entendendo o significado](https://cdn-images-1.medium.com/max/800/1*DU_BfuFDY93F2uuzehWQNA.png)

### Entendendo o significado
A WAI-ARIA serve para estender o significado das interações do seu site. Quando as tags do HTML5 vieram, elas já começaram **um trabalho importante de dar significado às estruturas do layout.**

Você consegue marcar agora **o que é um menu de navegação, uma sidebar, um header, um footer etc**. Esse trabalho é muito importante por que ajuda a **definir a importância dos elementos que cada elemento contém**.

Com tudo isso, a métrica WAI-ARIA se torna uma revolução para a web se tornar mais universal e assim ser mais acessível. 

Porém, ela não é difundida e muito menos conhecida por muitos desenvolvedores o que a torna invisível no mundo da Tecnologia influênciando diretamente como são construídas as aplicações na web. 

Com isso devemos como desenvolvedores pensar nos usuários como foco ao criar qualquer serviço, j**á que acessibilidade vai além de fazer com que pessoas com deficiências possam acessar o sistema e sim sobre qualquer pessoa conseguir usá-lo**. 

Agora, no recorte de inclusão nós referiamos a ela como transforma a web para as pessoas com deficiências.

<br>

---

<br>

![Quem desenvolve o WAI-ARIA?](https://cdn-images-1.medium.com/max/800/1*x07DJG4j3Xz-BSAOsZNeNQ.png)


### Quem desenvolve o WAI-ARIA?

Os documentos técnicos **WAI-ARIA** são desenvolvidos pelo **Accessible** **Rich Internet Applications Working Group** (ARIA WG), que faz parte do World **Wide Web Consortium** (W3C) **Web Accessibility Initiative** (WAI).

<br>

---

<br>

![Usando WAI-ARIA](https://media1.tenor.com/m/Va_MYd9zdeUAAAAC/gato-mouse.gif)

### Usando WAI-ARIA
As práticas que se tem no WAI-ARIA se estendem a muitas para proporcionar a WWW (World Wide Web) acessível.

Dentro desse ecossistema podemos destacar algumas como:

- Tornar conteúdo eficientemente **legível** por **leitores de tela**:

![](https://cdn-images-1.medium.com/max/800/1*KyWdKisJNEehx_yiFoD0nA.jpeg)

*Imagem da Etec de Francisco Morato superior*

<br>

![](https://cdn-images-1.medium.com/max/800/1*t4TPDFIrD00PuTBOnAsikQ.jpeg)
*Imagem da Etec de Francisco Morato parte do menu acionado*

Certos elementos em websites nem sempre são reconhecidos por leitores de tela. Dificultando o uso de leitores de tela para deficientes visuais.

- Atribuir elementos em código, especificando o que é cada parte:
```html
<ul role="arvore">
   <li role="itensDaArvore">
     Frutas

     <ul role="grupo">
       <li role="fruta">
         Maças
       </li>

       <li role="fruta">
         Bananas
       </li>

       <li role="fruta">
         Laranjas
       </li>
     </ul>
   </li>
</ul>
```

Atributos WAI-ARIA utilizados num código para torná-lo mais compreensível e consequentemente acesssível.

- Usar o HTML Semântico, com a chegada dele a W3C se volta a web buscando **dar significado ao conteúdo ao contrário do que será antes, já que o foco era apenas construir conteúdo, exibir elementos**. 
- No HTML5 as métricas se dão para **construir o conteúdo baseado em significados, ou seja, escrever o teu site com semântica**.

![](https://cdn-images-1.medium.com/max/800/1*xqjEKZkwlAiRCgRwnmgNdQ.jpeg)
*Imagem que demonstra blocos de marcações depreciada a esquerda usando div para tudo; a maneira atual onde se usa elementos semânticos*

Usando os novos blocos de marcações como: *header, main, footer, section, article, sidebar, hgroup, h1 a h6, figure, thead, tbody, tfooter, entre outras* diversas que buscam agora dar significado ao que se encontra na tela para obter metricas melhores em: **SEO** e na questão de leitores de tela, por exemplo.

Logo o uso de `div` se torna necessário apenas em agrupar elementos que não necessitem significado.


<br>

---

<br>

![Soluções Técnicas](https://cdn-images-1.medium.com/max/800/1*8l43uLoGtEy4FxqsbuTY2Q.jpeg)
*Soluções Técnicas*

**WAI-ARIA** fornece uma estrutura para adicionar atributos para identificar recursos para interação do usuário, como eles se relacionam entre si e seu estado atual. 

**WAI-ARIA descreve técnicas de navegação para marcar regiões e estruturas comuns da Web** como menus, conteúdo primário, conteúdo secundário, informações de banner e outros tipos de estruturas da Web.

Por exemplo, com o WAI-ARIA, os desenvolvedores podem identificar regiões de páginas e permitir que usuários de teclado se movam facilmente entre regiões, em vez de pressionar Tab muitas vezes.

<br>

---

<br>

![Conformidade](https://cdn-images-1.medium.com/max/800/1*UU4Ee8wlRqNuXR5k1oK6_Q.jpeg)

### Do que se trata as conformidades no WAI-ARIA?
Define as seções **NORMATIVAS** e **INFORMATIVAS** da especificação.

- Normativas: 

Seções normativas fornecem requisitos que autores, agentes de usuário e tecnologias assistivas **DEVEM** seguir para uma implementação em conformidade com essa especificação.

- Informativas:

Seções informativas fornecem informações úteis para entender a especificação. Sendo que elas **PODEM** seguir.

### Diretrizes das normas
- **All WAI-ARIA in DOM:**
**Deixar as regras do WAI-ARIA** ao manipular o DOM.

- **Communicated Assistive Technology Notices to Web Applications:**
**Usar notificações de tecnologias assistivas comunicativas nas aplicações web,** ou seja, usar os meios da WAI-ARIA para fazer com que o web app esteja assistindo o usuário e o notificando.

- **Conformance Checkers:**
**São os agentes ou softwares que irão checar** se o web app está seguindo as conformidades (regras) do WAI-ARIA.

- **Deprecated Requirements:**
**Análise dos requisitos que estão depreciados** (desuso), sendo eles os requisitos que não estão elsendo mais usados, pois, possuem algum outro melhor que o substitua em alguma questão.

#### Exemplo de uso das conformidades

![Exemplo de Tablist](https://cdn-images-1.medium.com/max/800/1*mSEOIoB2xZ9Ge4k_V3LGmw.jpeg)
*Exemplo de Tablist*

Neste exemplo, ao criar essa Tablist básica que foi criada de maneira semântica e de tro das regras do WAI-ARI, isto é, foram usados: atributos **aria** (selected, controls), **label**, **id**, **role**, **class**, **tags semânticas** que vão de encontro com tornar a web semântica, assistiva e inclusiva.

<br>

---

<br>

![Roles, States e Properties](https://cdn-images-1.medium.com/max/800/1*X3CshD34Az_Szxa-FQDSTg.jpeg)

A WAI-ARIA divide a semântica em duas partes:
- Roles, que define - que tipo de elemento o usuário está interagindo;

- States/Properties - que são suportadas pelas Roles, que definem o estado daquele elemento;

A **Role** você fala que **determinado elemento é uma** collapse.

Com o **States/Properties** você **diz se esse collapse está aberto ou fechado**.
- Definido **DIRETO** no elemento, ou via **ATRIBUTOS**.


#### Exemplo de collapse:
![Exemplo de Collapse](https://cdn-images-1.medium.com/max/800/1*fgCnonak7yNHEADtL4kKeA.jpeg)
*Exemplo de Collapse*

Na Collapse de exemplo temos um elemento pai que contém toda a Collapse sendo um container, temos os itens que contém seu respectivo conteúdo. 

Se perceber a Collapse nada mais é do que uma lista que ao usuário pode realizar as ações de abrir ou fechar a Collapse.

Então se atente as duas palavras principais desse parágrafo: **elemento** e **ações**. Sendo que foi mencionando anteriormente:

> Role  -  diz o que é o elemento.

> States/Properties  -  definem o estado em que aquele elemento está com base em alguma ação passada por propriedades, por exemplo.


#### Roles
Cada role é **responsavel por um determinado gênero de elemento**.

Tipos:
- Widgets
- Document Structure
- Landmarks

##### Widgets
Widgets para marcar elementos de interface soltos, como caixas de alerta, botões, checkbox, links, tabs etc.

Exemplos:
- `option`
- `progressbar`
- `radio`
- `searchbox`
- `tabpanel`
- `textbox`

##### Document Structure
Document Structure para **definir estruturas de organização da página**. Estruturas que não são interativas como **o header, footer, sidebar, essas coisas**.

Exemplos:
- `heading`
- `figure`
- `table`
- `presentation`
- `img`
- `article`

##### Landmarks
Landmarks para **regiões de página que são pontos importantes para onde o usuário navegaria**.

Exemplos:
- `banner`
- `complementary`
- `contentinfo`
- `navigation`
- `form`
- `region`

#### States e properties
Você consegue usar essas propriedades para **informar se determinado elemento está escondido ou visível** para o usuário, **fornecer informações de texto ou até esconder elementos visuais desnecessário**.

Veremos dois deles:
- `aria-hidden`
- `aria-label`

##### aria-hidden
![Uso do aria-hidden](https://cdn-images-1.medium.com/max/800/1*hU0okiWtUqL62mlW6gPzJA.png)
*Uso do aria-hidden*

No exemplo acima, o link tem um ícone com **um significado apenas visual**, já que a informação importante está no texto. 

Sendo assim, o `aria-hidden=”true` faz com que **leitores de tela ignorem esse elemento**.

##### aria-label
É usado para **fornecer informações sobre o elemento caso o texto não esteja disponível na tela**.
De novo, um exemplo com ícone:

![Uso do aria-label](https://cdn-images-1.medium.com/max/800/1*SeNPfF6X4_YjR3fg0_G4Iw.png)
*Uso do aria-label*

Ao invés de usar o `aria-hidden=”true”`, usamos o aria-label para informar o significado do ícone. 

<br>

---

<br>

![Imagem capa do titulo exmeplo de uso](https://cdn-images-1.medium.com/max/800/1*GUnHYDu79C4kVjJqYYwieg.png)

### Exemplos de uso – WAI-ARIA
> Pure CSS Components (felipefialho.com) 

- **Accordion**
![Imagem de um exemplo de accordion usando WAI-ARIA](https://miro.medium.com/v2/format:webp/1*ZueD_STz83adHDkRKvS54A.png)
*Imagem de um exemplo de accordion usando WAI-ARIA*

<br>

- **Dropdown**
![Imagem de um exemplo de dropdown usando WAI-ARIA](https://miro.medium.com/v2/format:webp/1*4anUjXDopt-0INzprC4WrQ.png)
*Imagem de um exemplo de dropdown usando WAI-ARIA*


<br>

- **Tooltip**
![Imagem de um exemplo de tooltip usando WAI-ARIA](https://miro.medium.com/v2/format:webp/1*Sav76VGTuy8qnJMnxG0p7w.png)
*Imagem de um exemplo de tooltip usando WAI-ARIA*

<br>

---

<br>

## Fontes

- WAI-ARIA Overview - https://www.w3.org/WAI/standards-guidelines/aria/#who-develops-wai-aria

- Accessible Rich Internet Applications (WAI-ARIA) 1.1 - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

- WAI-ARIA - https://tableless.com.br/wai-aria-estendendo-o-significado-das-interacoes/

- Frontinsampa 2015 - Vanessa Me Tonini - https://www.youtube.com/watch?v=l_NBdzqYm44 

- ARIA HTML Tutorial - https://www.youtube.com/watch?v=0hqhAIjE_8I
youtube.com/watch?v=CNoz0TXG-vk

- WAI - ARIA in 5 Steps - https://www.youtube.com/watch?v=2zpcDL9r-QI

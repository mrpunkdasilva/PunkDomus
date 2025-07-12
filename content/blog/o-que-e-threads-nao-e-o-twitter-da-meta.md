---
title: O que é Threads? Não é o Twitter da Meta
description: Entenda o conceito de threads em sistemas operacionais, suas características, tipos (singlethread e multithread), usos em servidores web e RPC, e os benefícios de sua aplicação para responsividade, compartilhamento de recursos, economia e escalabilidade. 
tags: [so]
slug: o-que-e-threads-nao-e-o-twitter-da-meta  
img: o-que-e-threads-nao-e-o-twitter-da-meta.png
createdAt: 2025-07-10
---

## Threads

Threads são as fatias de processos do sistema, são "fios" criados para resolver um processo, assim é possível fazer mais de uma tarefa. 

> Uma thread é uma unidade básica de utilização de CPU

Vamos imaginar um cenário, de uma loja:

> ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bx0qhcwb55y83ogtit7m.png)

**Pense assim:**
- O Gerente é a  thread main (seria o "fio" principal);
- O Caixa 1, 2 e 3 são respectivamente os lugares de entradas de dados, onde os atendentes fazer o atendimento dos clientes elas sendo as threads secundarias;
- Atendente 1, 2, 3... eles são os recursos da CPU, ou mesmo podemos chamar de CPU  onde ela irá servir para atender o cliente e alocar ou não determinados recursos que foram pedidos;
- Cliente seria o usuario que entrou com algum dado que é passado para o sistema operacional que faz alguma chamada nas threads secundarias (atendentes) thread main (gerente);

**Funcionamento:**
- O Gerente **cria e gerencia** as threads secundarias (caixas).
- As caixas são as responsáveis por **escolher um dos atendentes para atender** os clientes, de modo que elas são **independentes** e veja que logo cada uma está trabalhando de modo **concorrente**, como se estivessem "disputando".
- Os atendentes são os recursos usados pela CPU, ou mesmo pode se dizer a CPU, para resolver a thread, ou seja, executar determinada tarefa.

> ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/izzzqh4yqev5xgt6oq1k.png)


> Tudo isso é gerenciado e orquestrado pelo Sistema Operacional.

Assim , as threads compartilham de algumas coisas em comum:
- Seção de **código**;
- seção de **dados**;
- Seção de outras coisas como **arquivos** e **sinais**;

Trazendo para o exemplo acima temos que o Gerente, caixa e atendente compartilham de:
- Seção de códigos de conduta, o código que define o que eles devem fazer e como deve ser feito;
- Seção de dados, tanto da loja como deles mesmos ou de clientes ou tarefas
- Seção  de arquivos ou mesmo utensílios da loja

Porem, não é só isso, **as threads possuem** basicamente:
- ID da thread
- Conjunto de registradores;
- Uma pilha;
- Contador de programa;

```
┌───────────────────────────────────────────────────────────────┐
│                   Gerente 👨‍💼                 
│ ┌─────────┐ ┌──────────┐ ┌─────────┐              
│   Caixa 1      Caixa       Caixa 3                
│   💻 📁 🔣    💻 📁 🔣    💻 📁 🔣             
│   ID 1          ID 2        ID 3                   
│   ⚙️ ⏱️ 🧠    ⚙️ ⏱️ 🧠    ⚙️ ⏱️ 🧠                 
│ └─────────┘ └──────────┘ └──────────┘              
│           🔄         🔄         🔄           
│ ┌─────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐  ┌──────────┐
│  Atend. 1     Atend.  2     Atend. 3    Atend. 4     Atend. 5  
│   💻 📁 🔣    💻 📁 🔣     💻 📁 🔣    💻 📁 🔣     💻 📁 🔣 
│   ID 1         ID 2           ID 3       ID 4          ID 5                   
│  ⚙️ ⏱️ 🧠    ⚙️ ⏱️ 🧠     ⚙️ ⏱️ 🧠     ⚙️ ⏱️ 🧠    ⚙️ ⏱️ 🧠  
│ └─────────┘ └──────────┘ └──────────┘ └─────────┘  └──────────┘
│           🔄         🔄         🔄         
│     ┌───┐      ┌───┐        ┌───┐        ┌───┐        ┌───┐       
│      👤         👤           👤           👤           👤        
│     └───┘      └───┘        └───┘        └───┘        └───┘        
└──────────────────────────────────────────────────────────────────┘
```
Nesta representação, utilizei os seguintes elementos:
- 👨‍💼: Símbolo do Gerente
- 💻: Código (seção de código compartilhada)
- 📁: Dados (seção de dados compartilhada)
- 🔣: Arquivos e Sinais (seção de outros recursos compartilhados)
- ⚙️: Registradores
- ⏱️: Contador de programa
- 🧠: Pilha
- 👤: Clientes
- 🔄: Fluxo de execução (threads)
- ID: Identificador único de cada thread

1. O Gerente 👨‍💼 cria as threads de Caixa (Caixa 1, Caixa 2, Caixa 3), cada uma com seu próprio ID, conjunto de registradores, pilha, contador de programa, e compartilhando a seção de código, dados, arquivos e sinais.

2. Os Atendentes (Atend. 1, Atend. 2, Atend. 3, Atend. 4, Atend. 5) também são criados como threads, com as mesmas características de ID, registradores, pilha e contador, além de compartilharem a seção de código, dados, arquivos e sinais com o Gerente e as Caixas.

3. Os Clientes 👤 chegam e são atendidos pelas threads de Caixa e Atendentes, que compartilham os recursos necessários para processar as compras.

> ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m6njunqhccem8673sgjl.png)


As threads em seu uso, ou seja a forma como os processos são construídos, podem ser divididos em **dois tipos threads:**
- **Singlethread**: é uma **única** **thread** em uso;

> ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m9xrv6z2595e4d4t1urg.png)

- **Multithread**: são **varias** **threads** que funcionam simultaneamente, de modo **paralelas**;

> ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eyq3xoavy7rsz5jgopvx.png)

---

## Usos
Vários softwares que são executados nos computadores modernos são dotados de múltiplas threads. 
Sendo que se olharmos para uma **aplicação** ela é em geral **um processo principal** sendo executado **de forma separada** e com **varias threads de controle**.
Quando olhamos para **algumas aplicações** elas tendem a fazer **varias tarefas semelhantes,** como no caso de um **servidor Web**.

Tomemos como exemplo, um servidor web, o que ele faz? Bem ele recebe requisições de um cliente (um outro computador) tal servidor que é um computador pode ter diversos senão centenas de outros clientes fazendo **requisições** ao mesmo tempo de modo **concorrente** já que as requisições estão sendo executadas no mesmo momento (é o mesmo que dizer que elas estão competindo, são concorrentes)
Caso pensarmos que o servidor fosse um sistema **com uma unica thread** temos que a cada **requisição** ao **servidor ele só atenderia um cliente por ver.**

Assim temos que a **solução** para este problema é justamente fazer com que existam multiplas threads assim podemos fazer com que **o servidor** p**ossa criar uma thread para cada requisição** e assim **essa thread possa atender a requisição**.

Threads tem uma função muito importante nas **RPC**
 (*remote procedure call* -> **fazem a comunicação entre os processos**, algo parecido com chamadas comuns de função)
 Os servidores de RPC atuam de modo multithreads: ele espera **receber** uma **requisição (mensagem)** então ele **cria uma thread especifica para resolver aquela mensagem** , assim o sistema consegue atuar  com **varias requisições de modo simultâneo**.
 
---

## Benefícios
Tais benefícios podem ser divididos em quatro categorias:
1. **Responsividade** --> *Capacidade de dar uma resposta não importando a condição de outras tarefas*.
  - A execução de varias tarefas de modo independente faz com que mesmo se uma tarefa estiver demorando muito ou então foi interrompida não faz com que as outras acabem caindo (sejam mortas ou interrompidas). Assim temos 

2. **Compartilhamento de Recursos** --> *Ter varias threads no mesmo  endereço de memoria compartilhando dados*.
  - Como as threads conseguem compartilhar os códigos e dados de duas formas: memoria compartilhada e trocas de mensagens (tais técnicas são feita pelos desenvolvedores), as threads conseguem executar diversas atividades e estarem no mesmo espaço de memoria e compartilharem recursos entre si

3. **Economia** --> *A principal economia que se tem ao se usar  threads é o baixo processamento e uso de memoria para cria-las e gerenciar*  . 
  - Ao criarmos um processo temos que usar mais processamento e memoria do que criar uma thread, além de que as threads compartilham recursos do seu processo pai. De modo que temos não só uma economia na criação mais também no uso de threads já que os recursos que uma usa as outras caso precisem conseguem usar, sem ter que fazer um outro processo

4. **Escalabilidade** -> *O uso e mulithreads em um sistema multicore (múltiplas CPUS) faz com que se possa ter o uso do paralelismo elevado ao máximo, assim aumentamos o poder e velocidade de processamentos*.
  - Ao usar múltiplas threads em um processo em que o sistema é apenas de uma CPU acaba que temos que uma única thread só pode ser executada em um único processador o que diminui a eficiência e por vez a escalabilidade, mas em sistemas com arquiteturas multicore temos varias threads sendo executadas em vários processadores, o que resulta em um maior uso do paralelismo  
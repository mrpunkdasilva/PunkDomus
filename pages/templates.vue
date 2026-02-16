<template>
  <main class="page-container">
    <header class="page-header">
      <h1 class="page-title" data-text="Templates">Templates</h1>
    </header>

    <article class="page-content">
      <section class="page-section" aria-labelledby="intro">
        <h2 id="intro" class="section-title">Uso de Templates</h2>
        <p class="section-text">
          Para manter a consistência e a qualidade da documentação, utilizamos templates como ponto de partida. Eles garantem que todas as informações essenciais sejam incluídas. Abaixo está o template base para a criação de uma nova página de documentação técnica.
        </p>
      </section>

      <section class="page-section" aria-labelledby="markdown-template">
        <h2 id="markdown-template" class="section-title">Template Markdown</h2>
        <p class="section-text">
          Copie e cole o código abaixo em um novo arquivo <code>.md</code> dentro do diretório apropriado e preencha as seções.
        </p>
        <pre class="code-block"><code>
---
title: "Título do Documento"
description: "Uma breve descrição (uma ou duas frases) sobre o que este documento aborda."
category: "Categoria Principal"
status: "draft"
date: "{{ date }}"
technologies:
  - "Tecnologia 1"
  - "Tecnologia 2"
---

# Título do Documento

## 1. Introdução

Aqui você deve fornecer uma visão geral do tópico. Explique o propósito do documento e o que o leitor aprenderá.

## 2. Pré-requisitos

Liste quaisquer ferramentas, conhecimentos ou outros documentos que o leitor precise ter antes de continuar.

- Conhecimento básico em ...
- Ferramenta X instalada.

## 3. Guia Passo a Passo

Esta é a seção principal. Divida o conteúdo em passos lógicos e claros.

### 3.1. Primeiro Passo

Descrição detalhada do primeiro passo.

```csharp
// Example of a code block in English
public class HelloWorld
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}
```

### 3.2. Segundo Passo

Descrição detalhada do segundo passo.

## 4. Solução de Problemas (Opcional)

Liste problemas comuns que os usuários podem encontrar e como resolvê-los.

- **Erro X:** Causa e solução.
- **Problema Y:** Causa e solução.

## 5. Conclusão

Faça um resumo do que foi abordado no documento e sugira os próximos passos ou leituras recomendadas.
        </code></pre>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'TemplatesPage',
  head() {
    return {
      title: 'Templates - PunkDomus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Templates e guias para a criação de nova documentação no PunkDomus.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-container {
  padding: 80px 30px;
  margin: 0 auto;
  position: relative;
  background: linear-gradient(180deg, rgba(8, 14, 26, 0.9) 0%, rgba(8, 14, 26, 0.95) 50%, rgba(8, 14, 26, 0.9) 100%);
  color: #efefef;
}

.page-header {
  margin-bottom: 100px;
  text-align: center;
  padding: 60px 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  border: 2px solid rgba(252, 93, 127, 0.3);
}

.page-title {
  font-size: 4em;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #21DEEA; /* Solid color */
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5); /* Single color shadow */
}

.page-content {
  margin-top: 80px;
  display: grid;
  gap: 60px;
}

.page-section {
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  border: 1px solid rgba(252, 93, 127, 0.2);
  backdrop-filter: blur(10px);
}

.section-title {
  font-size: 2.2em;
  margin-bottom: 30px;
  color: #FC5D7F;
  text-shadow: 0 0 10px rgba(252, 93, 127, 0.5);
}

.section-text {
  line-height: 1.9;
  font-size: 1.15em;
  margin-bottom: 20px;
}

.code-block {
  background-color: #0d0d0d;
  border: 1px solid rgba(33, 222, 234, 0.3);
  border-radius: 8px;
  padding: 20px;
  overflow-x: auto;
  color: #e0e0e0;
  font-family: 'Fira Code', monospace;
  font-size: 0.95em;
  white-space: pre;
}

@media (max-width: 768px) {
  .page-container { padding: 40px 20px; }
  .page-header { padding: 40px 20px; margin-bottom: 60px; }
  .page-title { font-size: 2.5em; }
  .section-title { font-size: 1.8em; }
}
</style>

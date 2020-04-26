# perfect-pay

## Documentação do Projeto de Teste

Bem vindo ao projeto de teste para Perfect Pay. Refere-se a um simulador de gastos do Bill Gates baseado no site a seguir:
[Neal Fun](https://neal.fun/spend/)

A tecnologia utilizada para realização desse projeto foi um sistema em Vue.js configurado com Vuex, Router, Eslint + Prettier e o framework de testes unitários Jest. Também foi utilizado como pré processador de CSS o SCSS e a estruturação lógica feita em Javascript. Abaixo segue instruções para rodar o projeto e detalhamento de arquitetura.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Como trabalhar com cada componente

Os componentes são estruturados com HTML, scripts e estilo em SCSS no mesmo arquivo. Para isso mantemos os arquivos com o mínimo de conteúdo possível e alta componentização (o que diminui código duplicado e permite maior escalabilidade). Na criação das classes de CSS seguimos o modelo BEM CSS e no script a ideia de mínimo acesso ao DOM para usar bem os recursos de reatividade que o Vue proporciona.
Outra boa prática que seguimos é evitar ao máximo escrever lógica no HTML, usando para isso recursos disponíveis no Vue como o computed. 
Além disso boa parte da estrutura é feita com CSS Grid. O que permite maior controle das variações responsivas e dinamismo visual no código.

Veja um exemplo de componente:
```vue
<template>
    <section class="BaseComponent">
        <h1 class="BaseComponent__title">Hello World</h1>
    </section>
<template>

<script>
export default {
    name: 'BaseComponent'
}
</script>

<style lang="scss" scoped>
.BaseComponent {
    display: grid;
    &__title {
        color: red;
    }
}
</style>
```

## Estilos globais

Os estilos globais, variáveis e funções de SCSS estão na estrutura de assets/scss. O estilo *main.scss* é carregado no arquivo principal da aplicação App.vue. Ele contém resets.css e estilos de formulários globais.
O arquivo *scoped.scss* contém um exportador para cada componente com as váriaveis de CSS para cores, fontes, mixings, variávies de espaçamento e padrões de z-index. Dessa forma cada componente tem um estilo nunca compartilhado no formato *scoped*.

## Componentização

Para montar a biblioteca de componentes desse projeto usamos a arquitetura Atomic Design, disponível na pasta */components*. Cada tipo de componente segue um prefixo para fácil identificação:
* Átomos (Base)
* Moleculas (Sem prefixo)
* Organismos (The)

Como o projeto contém apenas um template não adicionamos essa camada no Atomic Design.

## Máscaras

Para máscaras criamos um plugin Mask no projeto, que recebe o conteúdo e o retorna com as máscaras. Assim podemos controlar cada máscara necessária nos sistemas usando regex quando necessário.


## Testes unitários

Foram feitos testes unitários com a ferramenta Jest com cobertura atual de 100% de coverage de testes. Os arquivos de testes estão estruturados nas mesmas pastas dos componentes para facilitar a manutenção dos mesmos. Também foram feitos testes de snapshots que estão disponíveis em cada componente. Segue os scripts para rodar os testes:

### Rodar os testes
```
yarn test
```

### Rodar os testes com auto-reload
```
yarn test:watch
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Chapa UI

Para rodar o projeto:

`npm run dev`

Para fazer a build do projeto:

`npm run build`

Para publicar o storybook e a biblioteca, basta subir o projeto para a main.

## Composição do repositório

O repositório é composto por cinco pastas:
* eslint-confing: configurações do eslint para os demais pacotes;
* ts-config: configurações do typescript para os demais pacotes
* tokens: pasta com configurações de variáveis de css, que representam tokens. São configurados os seguintes tokens: cores, tamanhos de fonte, peso de fontes, famílias de fontes, espaçamento entrelinhas, arredondamento das bordas e espaçamentos. Esses elementos representam a essência da identidade do projeto.
* react: aplicação react utilizando o framework vite. Aqui, estão todos os componentes criados e exportados para a biblioteca npm. As configurações de estilo dos componentes utilizando a css-in-js com a biblioteca Stitches, com o tema utilizando as configurações da pasta tokens.
* docs: documentação da biblioteca de componentes utilizando a biblioteca storybook. O storybook auxilia na documentação dos componentes em um ambiente web, apresentando controles de variáveis e espaços para a descrição da composição e utilização de cada componente.


## Bibliotecas utilizadas


### Tsup

Biblioteca para fazer o bundle dos arquivos typescript.

[Documentação aqui] (https://github.com/egoist/tsup)


### TurboRepo

Biblioteca para executar os scripts em todos os pacotes ao mesmo tempo, a partir da raíz do repositório.

[Documentação aqui] (https://turbo.build/repo/docs)

A biblioteca também ajuda a acelerar a build da aplicação, guardando cache no node_modules.


### Storybook

Biblioteca para a documentação de componentes da UI.

[Documentação aqui] (https://storybook.js.org/docs/react/get-started/introduction)

São criados arquivos .stories.(js/tsx/mdx) para a criação de cada história, que é uma página que renderiza o componente e contém a explicação do seu uso. As histórias são escritas da seguinte forma:

  import React from 'react';

  import { Button } from './Button';

  export default {
    title: 'Button',
    component: Button,
  };

  export const Primary = () => <Button primary>Button</Button>;

ou para arquivos mdx:

  import { Meta }  from '@storybook/addon-docs'
  import { ColorsGrid } from '../../components/ColorsGrid'

  <Meta title="Tokens/Colors" />

  ...


### Radix

Biblioteca para componentes mais complexos, que precisam de suporte de acessibilidade. Utilizada na construção do Avatar e do Checkbox.

[Documentação aqui] (https://www.radix-ui.com/docs/primitives/overview/introduction)

Com tempo, os componentes podem ser substituídos para código próprio.


### Phospor react

Biblioteca de ícones.

[Documentação aqui] (https://phosphoricons.com/)

Com tempo, os ícones podem ser substituídos para arquivos svgs próprios.


### Storybook Deployer

Biblioteca para facilitar o deploy do Storybook como um site estático hospedado no Github Pages ou na AWS.

[Documentação aqui] (https://github.com/storybookjs/storybook-deployer)

Por enquanto, o projeto está configurado para fazer deploy no Github Pages.


### Changeset/cli

Biblioteca para ajudar na administração das versões dos pacotes e para a publicação como uma biblioteca npm.

[Documentação aqui] (https://github.com/changesets/changesets)

Comando para adicionar as alterações do pacote:

`npm run changeset`

Comando para adicionar a nova versão do pacote:

`npm run version-packages`

Comando para publicar a biblioteca no npm:

`npm run release`


## Observações

A build dos pacotes não está perfeita. Caso algum bug aconteça ao rodar o projeto, apague as pastas dists e o cache criado pelo turboRepo e confira se o projeto está rodando novamente.

A integração com o Github também deve ser revista. Caso a biblioteca não esteja funcionando corretamente, confira se ela foi publicada com a pasta dist/. Caso isso não tenha acontecido, utilize o script `release`.


  > Vai dar bom!

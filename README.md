# Log com cores

## Como usar?

### Instalação

```shell
npm install log-and-color
```

### Aplicando o log

```js
const { l, c } = require("log-and-color");

//para chamar o console.log normal
l("param1", "param2", "param3");

//para colorir parametros dentro do console.log
l("param1", c("param2", "param3"), "param4");

//para mudar a cor da letra "foreground"
l("param1", c("param2", "param3").fg(3), "param4");

//para mudar a cor de fundo "background"
l("param1", c("param2", "param3").bg(3), "param4");

//para mudar ambos (cor das letras e de fundo)
l("param1", c("param2", "param3").bg(3).fg(2), "param4");
l("param1", c("param2", "param3").fg(2).bg(3), "param4"); //tanto faz a ordem.

//para ver a lista de cores de seu terminal
c().show();
```

### Descrição dos metodos

- `l(value,value...)`;

  - função para logar no console
  - `value` pode ser um ou varios parametros

- `c(value,value...)`;

  - função para colorir.
  - `value` pode ser um ou varios parametros
  - ela deve ser invocada como parametro da função `l();`

- `c().show(numeroDeCores, quebraDeLinha);`;

  - função para mostrar a paleta de cores do terminal.
  - `numeroDeCores:number` numero de cores que será mostrada na paleta.
  - `quebraDeLinha:number` numero de cores em cada linha antes de quebrar a linha.

# License

(The MIT License)

Copyright (c) 2020 Gustavo Novais Rodrigues: gustavonovaisrodrigues@gmail.com

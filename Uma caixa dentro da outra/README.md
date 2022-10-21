# Uma caixa dentro da outra

## Box Model

- Fundamental para fazer layouts para a web
- Maior facildiade para aplicar o CSS

### O que é?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- `width` - Tamanho(largura x altura)
- `content` - Conteudo 
- `border` - Bordas
- `padding` - Preenchimento interno
- `margin` - Espaços fora da caixa

## box-sizing

Como será calculado o tamanho total da caixa?

- content-box|border-box

Por padrão, é utilizado o `content-box` para calcular o tamanho total da caixa (contando a partir do conteúdo dentro da box)

Para padronizarmos o tamanho a partir da distância entre as bordas, utilizamos o `border-box`

```css
div{
    box-sizing: border-box;
}
```

Podemos também instanciar o `border-box` de forma global, para que isso não acabe atrapalhando no desenvolvimento de nossa aplicação

```css
*{
    box-sizing: border-box;
}
```

## Display: block vs display:inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

| **block**                                                     | **inline**                                               |
| ------------------------------------------------------------- | -------------------------------------------------------- |
| Ocupa toda a linha, colocando o próximo elemento abaixo desse | Elemento ao lado do outro                                |
| width e height são respeitados                                | width e height não funcionam                             |
| padding, margin, border irão funcionar normalmente            | Somente valores horizontais de margin, padding e border. |

Exemplos de tags

block: `<p> <div> <section> <h1> <h2>...` 

inline: `<a> <strong> <span> <em>` 

## Margin

Espaços entre os elementos

- `margin-top` | `margin-right` | `margin-bottom` | `margin-left`
- values: `<length>` | `<percentage>` | auto

```css
div{
    /* shorthand */
    margin: 12px 16px 10px 4px; /* top | right | bottom | left */
    margin: 12px 16px 0; /* top | right-left | bottom */
    margin: 8px 16px; /* top-bottom | right-left */
    margin: 8px; /* top-bottom-right-left */
}
```

## Padding

Preenchimento interno da caixa

- `padding-top` | `padding-right` | `padding-bottom` | `padding-left`
- values: `<length>` | `<percentage>` | auto

* Padding poderá causar diferença na largura de um elemento

## Border

As bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>` 
  - style: `solid` | `dotted` | `dashed` | `double` | `groove` | `ridge` | `inset` | `outset`
  - width: `<length>`
  - color: `<color>`


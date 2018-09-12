let h = React.createElement
let render = ReactDOM.render

let Head = () => 
    h('div', {className: 'head'}, [
        h('div', {className: 'header flip'}, 'Dg.'),
        h('img', {className: 'headIMG', src: 'images/dgdg.png'}),
        h('div', {className: 'header'}, 'Dg.'),
    ])

let HeadCaption = () => 
    h('div', {className: 'head column subHead'}, [
        h('div', {className: 'dg1'}, 'Do good.'),
        h('div', {className: 'dg2'}, 'Die great.'),
        h('div', {}, 'Stay connected.'),
    ])

let TotalHead = () => 
    h('div', {}, [
        h(Head),
        h(HeadCaption)
    ])



render(h(TotalHead), document.getElementById('body'));


let h = React.createElement
let render = ReactDOM.render

let head = () => 
    h('div', {className: 'head'}, [
        h('div', {className: 'header flip'}, 'Dg.'),
        h('img', {className: 'headIMG', src: 'images/dgdg.png'}),
        h('div', {className: 'header'}, 'Dg.'),
    ])


render(h(head), document.getElementById('body'));


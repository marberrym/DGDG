let h = React.createElement
let render = ReactDOM.render

let Head = () => 
    h('div', {className: 'head'}, [
        h('div', {className: 'header flip'}, 'Dg.'),
        h('img', {className: 'headIMG', src: 'images/dgdg.png'}),
        h('div', {className: 'header'}, 'Dg.'),
    ])

let HeadCaption = () => 
    h('div', {className: 'head subHead'}, [
        h('div', {className: 'dg1'}, 'Do good.'),
        h('div', {className: 'dg2'}, 'Die great.'),
        h('div', {className: 'dg3'}, 'Stay connected.'),
    ])

class DGDGHomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postsByCity: 1,
        }
    }
    render() {
        return h('div', {}, [
            h(Head),
            h(HeadCaption)
        ])
    }

}
    



render(h(DGDGHomePage), document.getElementById('body'));


// type ClickProps = {
//     button: string
//     msg: string
// }

// export const Frases = (props: ClickProps) => {
//     return (
//         <div>
//             <button onClick={() => alert (props.msg) }>{props.button}</button>
//         </div>
//     )
// }

// import React from 'react'
// import {frases} from '../frases/frases'

// type GerarState = {
//     frase: string
// }

// export class Gerar extends React.Component<{},GerarState> {
//     state = {   
//         frase: frases[0]
//     }

//     gerandoFrase = () => {
//         const index = Math.floor(Math.random() * 10 )
//         this.setState({
//             frase: frases[index],
//         })
//     }

//     render() {
//         return (
//             <>
//             <div>
//                 {this.state.frase}
//             </div>
//             <button onClick={this.gerandoFrase}>Nova frase</button>
//             </>
//         )
//     }
// }

import React from 'react'

type GerarState = {
    numeros: number
}

export class Gerar extends React.Component<{},GerarState> {
    state = {   
       numeros : 0
    }

    gerandoNumero = () => {
        this.setState({
            numeros: this.state.numeros +1
        })
    }

    subtraindoNumero = () => {
        if (this.state.numeros > 0){
        this.setState({
            numeros: this.state.numeros -1
        })
    }
    }
 
    render() {
        return (
            <>
            <h2>Contador</h2>
            <button onClick={this.gerandoNumero}><h4>Adicionar número +</h4></button>
            <div>
                <h1>{this.state.numeros}</h1>
            </div>
            <button onClick={this.subtraindoNumero}><h4>Subtrair número -</h4></button>
            </>
        )
    }
}
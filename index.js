const SIMBOLNAME = "lg-color"
function l(...args) {
    let retorno = []
    for (const iterator of args) {
        if (typeof iterator == "object" && iterator) {

            if (iterator[Symbol.for(SIMBOLNAME)]) {
                let treco = iterator.exec()
                for (let index = 0; index < treco.length; index++) {
                    if (index == 0) treco[index] = '\x1B' + treco[index]
                    if (index == 1) treco[index] = '\x1B' + treco[index]
                    if (index == (treco.length - 1)) treco[index] = '\x1B' + treco[index]
                    retorno.push(treco[index])
                }
            } else retorno.push(iterator)
        } else
            retorno.push(iterator)
    }
    console.log(...retorno)
}

class Color {
    constructor(n_cor, n_bg, ...args) {
        const COLOR = Symbol.for(SIMBOLNAME)
        this.c = '[38;5;' + n_cor + 'm'
        this.b = '[48;5;' + n_bg + 'm'
        this.ar = [...args]
        this[COLOR] = true
    }
    fg(num) {
        this.c = '[38;5;' + num + 'm'
        return this
    }
    bg(num) {
        this.b = '[48;5;' + num + 'm'
        return this
    }
    exec() {
        return [this.b, this.c, ...this.ar, '[0m']
    }
    show(num = 256, quebraLinha = 15) {
        let data = ['\n']
        for (let index = 0; index < num; index++) {
            data.push(
                `\x1B[38;5;16m\x1B[48;5;${index}m${index.toString().padStart(5, ' ')}\x1B[0m${
                ((index + 1) % (quebraLinha + 1) == 0) ? '\n' : ''
                }`
            )
        }
        console.log(...data)
    }
}

let c = (...args) => {
    return new Color(120, 99, ...args)
}

module.exports = { l, c }
//Color_xbox.js

//*Es un modulo de componente para Layout de Xbox, esta clase es la encargada de cambiar los colores de los elementos que se encuentran en el widget*//

/* -- Clase Abstracta de color
    - getColor() = Metodo abstracto que retorna el color en formato string
    - getRgb() = Metodo abstracto que retorna el color en formato rgb
    - getHex() = Metodo abstracto que retorna el color en formato hexadecimal

*/
class Color {

    get getColor() {
        throw new Error("El metodo getColor() debe ser implementado en la subclase")
    }

    get getRgb() {
        throw new Error("El metodo getRgb() debe ser implementado en la subclase")
    }

    get getHex() {
        throw new Error("El metodo getHex() debe ser implementado en la subclase")
    }
}

/*
Clase Concreta - Color Obsidian
    -getColor() = Metodo que retorna message: comet blue, logo: dolphin nav
    -getRgb() = Metodo que retorna message: rgb(90, 85, 117), logo: rgb(98, 96, 118)
    -getHex() = Metodo que retorna message: #5A5575, logo: #626076

    El color message es el color principal del widget
    El color logo es el color secundario del widget
*/

class Obsidian extends Color {

    get getColor() {
        return {
            message: "Dolphin Navy",
            logo: "Heavenly Gray"
        }
    }

    get getRgb() {
        return {
            message: "rgba(90, 85, 117, 1)",
            logo: "rgb(98, 96, 118)"
        }
    }

    get getHex() {
        return {
            message: "#635F76",
            logo: "#a4a1aeff"
        }
    }

}

/*
Clase Concreta - Color Purple
    -getColor() = Metodo que retorna message: Deep Mauve, logo: Bright Lilac
    -getRgb() = Metodo que retorna message: rgb(188, 104, 254), logo: rgb(212, 166, 254)
    -getHex() = Metodo que retorna message: #BC68FE, logo: #D4A6FE

    El color message es el color principal del widget
    El color logo es el color secundario del widget
*/
class Purple extends Color {

    get getColor() {
        return {
            message: "Deep Mauve",
            logo: "Bright Lilac"
        }
    }

    get getRgb() {
        return {
            message: "rgb(188, 104, 254)",
            logo: "rgb(212, 166, 254)"
        }
    }

    get getHex() {
        return {
            message: "#BC68FE",
            logo: "#D4A6FE"
        }
    }

}

/*
Clase Concreta - Color Esmeralda
    -getColor() = Metodo que retorna message: Deep Mauve, logo: Bright Lilac
    -getRgb() = Metodo que retorna message: rgb(188, 104, 254), logo: rgb(212, 166, 254)
    -getHex() = Metodo que retorna message: #BC68FE, logo: #D4A6FE

    El color message es el color principal del widget
    El color logo es el color secundario del widget
*/
class Esmeralda extends Color {

    get getColor() {
        return {
            message: "Mermaid",
            logo: "Neon Blue-Green"
        }
    }

    get getRgb() {
        return {
            message: "rgb(17, 223, 185)",
            logo: "rgb(15, 248, 226)"
        }
    }

    get getHex() {
        return {
            message: "#11DFB9",
            logo: "#0FF8E2"
        }
    }

}

/*
Clase Concreta - Color Diamante
    -getColor() = Metodo que retorna message: New Car, logo: French Sky Blue
    -getRgb() = Metodo que retorna message: rgb(47, 75, 203), logo: rgb(110, 187, 255)
    -getHex() = Metodo que retorna message: #2F4ACB, logo: #6EBBFF

    El color message es el color principal del widget
    El color logo es el color secundario del widget
*/
class Diamante extends Color {

    get getColor() {
        return {
            message: "New Car",
            logo: "French Sky Blue"
        }
    }

    get getRgb() {
        return {
            message: "rgb(47, 75, 203)",
            logo: "rgb(110, 187, 255)"
        }
    }

    get getHex() {
        return {
            message: "#2F4ACB",
            logo: "#6EBBFF"
        }
    }

}

/*
Clase Concreta - Color Amarillo
    -getColor() = Metodo que retorna message: Gold Punk, logo: Festival
    -getRgb() = Metodo que retorna message: rgb(252, 200, 65), logo: rgb(255, 232, 109)
    -getHex() = Metodo que retorna message: #FCC841, logo: #FFE86D

    El color message es el color principal del widget
    El color logo es el color secundario del widget
*/
class Amarillo extends Color {

    get getColor() {
        return {
            message: "Gold Punk",
            logo: "Festival"
        }
    }

    get getRgb() {
        return {
            message: "rgb(252, 200, 65)",
            logo: "rgb(255, 232, 109)"
        }
    }

    get getHex() {
        return {
            message: "#FCC841",
            logo: "#FFE86D"
        }
    }

}

/*
Clase Concreta - Color Rubi
    -getColor() = Metodo que retorna message: Permanent Red Violet, logo: Fiery Rose
    -getRgb() = Metodo que retorna message: rgb(218, 41, 67), logo: rgb(252, 82, 119)
    -getHex() = Metodo que retorna message: #DA2943, logo: #FC5277

    El color message es el color principal del widget
    El color logo es el color secundario del widget
*/
class Rubi extends Color {

    get getColor() {
        return {
            message: "Permanent Red Violet",
            logo: "Fiery Rose"
        }
    }

    get getRgb() {
        return {
            message: "rgb(218, 41, 67)",
            logo: "rgb(252, 82, 119)"
        }
    }

    get getHex() {
        return {
            message: "#DA2943",
            logo: "#FC5277"
        }
    }

}
export { Obsidian, Purple, Esmeralda, Diamante, Rubi, Amarillo };
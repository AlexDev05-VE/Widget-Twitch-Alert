/* 
-- Clase Padre / Abstracta: Layout
    Define la estructura acoplada sin dependencias, pero altamente modificables con componentes de clases externas.

    - Propiedades Protegidas:
        -#soundClass = Archivo de audio de la alerta
        -#iconClass = Icono de la alerta
        -#colorClass = Clase que contiene el mensaje de la alerta
        -#messageClass = Clase que contiene el mensaje de la alerta
*/

export class Layout {
    #soundClass;
    #iconClass;
    #colorClass;
    #messageClass;

    /*Constructor encargado de que le pasen todas las instancias para construir la alerta*/
    constructor(soundClass, iconClass, colorClass, messageClass) {
        this.#soundClass = soundClass;
        this.#iconClass = iconClass;
        this.#colorClass = colorClass;
        this.#messageClass = messageClass;
    }

    // Getters públicos para que las clases hijas puedan leerlos
    get soundClass() { return this.#soundClass; }
    get iconClass() { return this.#iconClass; }
    get colorClass() { return this.#colorClass; }
    get messageClass() { return this.#messageClass; }

    /*Metodo de la clase abstracta para que las clases hijas puedan implementar*/
    getBitsAlert() {
        throw new Error("Este método debe ser implementado por las clases hijas");
    }
}
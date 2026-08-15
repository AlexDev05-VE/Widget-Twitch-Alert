//message_xbox.js

//*Es un modulo de componente para Layout de Xbox, esta clase es la encargada de cambiar los mensajes o entregar los objetos de mensaje por parte de conexiones de twitch, por lo cual debe de tener una clase abstracta de Message*//

/* -- Clase Abstracta de Message
    - getNameIcon() = Nombre del icono
    - getSrcUrl() = URL del icono
    - getTypeAlert() = Tipo de alerta
*/
class Message {
    // -- Constructor
    constructor(user, message) {
        if (this.constructor === Message) {
            throw new Error("No se puede instanciar directamente la clase abstracta 'Message'");
        }
        this.user = user;
        this.message = message;
    }

    // Método abstracto para formatear el texto completo de la alerta
    getFormattedMessage() {
        throw new Error("El método 'getFormattedMessage()' debe ser implementado en la subclase");
    }
    // Método abstracto para obtener el usuario
    getUser() {
        throw new Error("El método 'getUser()' debe ser implementado en la subclase");
    }
    // Método abstracto para obtener el mensaje
    getMessage() {
        throw new Error("El método 'getMessage()' debe ser implementado en la subclase");
    }
}

/* --- CLASES CONCRETAS (SUBCLASES) --- */
/* 
1. Clase Concreta - Bits
    - Propiedades:
        - user = Usuario que envia la alerta
        - message = Mensaje de la alerta
        - bitsAmount = Cantidad de bits
*/
class BitsMessage extends Message {
    constructor(user, message, bitsAmount) {
        // Llamamos al constructor padre
        super(user, message);
        // Implementacion de propiedad extra
        this.bitsAmount = bitsAmount;
    }

    //Metodo que retorna el mensaje en formato string
    getFormattedMessage() {
        return `¡${this.user} ha donado ${this.bitsAmount} Bits!"`;
    }
    //Metodo que retorna el usuario
    get getUser() {
        return this.user;
    }
    //Metodo que retorna el mensaje
    get getMessage() {
        return this.message;
    }
    //Metodo que retorna la cantidad de bits
    get getBitsAmount() {
        return this.bitsAmount;
    }
}

/* 
2. Clase Concreta - Follow
    - Propiedades: user, message (ej. mensaje de bienvenida personalizado)
*/
class FollowMessage extends Message {
    constructor(user, message = "¡Gracias por el follow!") {
        super(user, message);
    }

    getFormattedMessage() {
        return `¡${this.user} ahora te sigue! ${this.message}`;
    }
}

/* 
3. Clase Concreta - Subscribers
    - Propiedades: user, message, months (meses acumulados o nivel de suscripción)
*/
class SubscribersMessage extends Message {
    constructor(user, message, months) {
        super(user, message);
        this.months = months;
    }

    getFormattedMessage() {
        return `¡${this.user} se ha suscrito por ${this.months} mes(es)! Mensaje: "${this.message}"`;
    }
}

export { BitsMessage, FollowMessage, SubscribersMessage };
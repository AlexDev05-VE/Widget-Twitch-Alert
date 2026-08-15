//Sound Xbox Bits

//*Es un modulo para cambiar los sonidos de los elementos, por Bits donados al usuario*//

/* 
-- Clase Padre / Abstracta: SoundTheme Establece las propiedades esenciales para todos los iconos.
- getSoundName() = Nombre del sonido
- getSrcSound() = URL del sonido
- getTypeAlert() = Tipo de alerta
*/
class SoundTheme {

    get getNameSound() {
        throw new Error("El método getNameSound debe ser implementado en la subclase");
    }

    get getTypeAlert() {
        throw new Error("El método getTypeAlert debe ser implementado en la subclase");
    }

    get getSrcSound() {
        throw new Error("El método getSrcSound debe ser implementado en la subclase");
    }
}

/*
--- CLASES CONCRETAS (SUBCLASES) ---
*/

/* 
Clase Concreta - Bits (Hereda de SoundTheme)
    - Maneja los esquemas de color para los 2 sonidos de Bits
*/
class Bits extends SoundTheme {

    get getNameSound() {
        return {
            sonido: "Bits Theme - Xbox",
        };
    }

    get getTypeAlert() {
        return {
            sonido: "Bits",
        };
    }

    get getSrcSound() {
        return {
            sonido_src: "../assets/sound/xbox_sound/xbox_logro.mp3"
        };
    }

}


/* 
Clase Concreta - Follow (Hereda de SoundTheme)
    - Maneja los esquemas de color para los 2 sonidos de Follow
*/
class Follow extends SoundTheme {

    get getNameSound() {
        return {
            sonido: "Follow Theme - Xbox",
        };
    }

    get getTypeAlert() {
        return {
            sonido: "Follow",
        };
    }

    get getSrcSound() {
        return {
            sonido: "../assets/sound/xbox_sound/xbox_logro.mp3"
        };
    }

}


/* 
Clase Concreta - Suscriptores (Hereda de SoundTheme)
    - Maneja los esquemas de color para los 2 sonidos de Suscriptores
*/
class Suscriptores extends SoundTheme {

    get getNameSound() {
        return {
            sonido: "Suscriptores Theme - Xbox",
        };
    }

    get getTypeAlert() {
        return {
            sonido: "Suscriptores",
        };
    }

    get getSrcSound() {
        return {
            sonido: "../assets/sound/xbox_sound/xbox_logro.mp3"
        };
    }

}

export { Bits, Follow, Suscriptores };
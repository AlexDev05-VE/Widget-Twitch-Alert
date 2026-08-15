//Icon Bits

//*Es un modulo para cambiar los iconos de los elementos, por Bits donados al usuario*//

/* 
-- Clase Padre / Abstracta: Icon Establece las propiedades esenciales para todos los iconos.
- getNameIcon() = Nombre del icono
- getSrcUrl() = URL del icono
- getTypeAlert() = Tipo de alerta
*/
class Icon {

    // Getters para acceder a las propiedades
    get getNameIcon() {
        throw new Error("El metodo getNameIcon() debe ser implementado en la subclase")
    }

    get getSrcUrl() {
        throw new Error("El metodo getSrcUrl() debe ser implementado en la subclase")
    }

    get getTypeAlert() {
        throw new Error("El metodo getTypeAlert() debe ser implementado en la subclase")
    }
}

/* 
-- Clase Especializada: IconBits
    Clase base para todos los iconos correspondientes a la alerta de Bits.
*/
class IconBits extends Icon {

}

/*
--- CLASES CONCRETAS PARA ICON BITS ---
*/

// 1. Icono para el tema Obsidian
/* 
-- Clase Concreta: ObsidianBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class ObsidianBitsIcon extends IconBits {

    get getNameIcon() {
        //retorna un string del nombre del icono para identificar
        return "Obsidian Bits Icon";
    }

    get getSrcUrl() {
        //retorna un string de la URL del icono
        return "./assets/image/bits logo/bits_obsidian.png"
    }

    get getTypeAlert() {
        //retorna un string del tipo de alerta
        return "Bits";
    }
}

// 2. Icono para el tema Purple
/* 
-- Clase Concreta: PurpleBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class PurpleBitsIcon extends IconBits {
    get getNameIcon() {
        //retorna un string del nombre del icono para identificar   
        return "Purple Bits Icon";
    }

    get getSrcUrl() {
        //retorna un string de la URL del icono
        return "./assets/image/bits logo/bits_purpura.png";
    }

    get getTypeAlert() {
        //retorna un string del tipo de alerta
        return "Bits";
    }
}

// 3. Icono para el tema Esmeralda
/* 
-- Clase Concreta: EsmeraldaBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class EsmeraldaBitsIcon extends IconBits {

    get getNameIcon() {
        //retorna un string del nombre del icono para identificar
        return "Esmeralda Bits Icon";
    }

    get getSrcUrl() {
        //retorna un string de la URL del icono
        return "./assets/image/bits logo/bits_esmeralda.png";
    }

    get getTypeAlert() {
        //retorna un string del tipo de alerta
        return "Bits";
    }
}

// -- 4. Icono para el tema Diamante
/* 
-- Clase Concreta: DiamanteBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class DiamanteBitsIcon extends IconBits {

    get getNameIcon() {
        //retorna un string del nombre del icono para identificar
        return "Diamante Bits Icon";
    }

    get getSrcUrl() {
        //retorna un string de la URL del icono
        return "./assets/image/bits logo/bits_diamante.png";
    }

    get getTypeAlert() {
        //retorna un string del tipo de alerta
        return "Bits";
    }
}

// -- 4. Icono para el tema Rubí
/* 
-- Clase Concreta: RubyBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class RubyBitsIcon extends IconBits {

    get getNameIcon() {
        //retorna un string del nombre del icono para identificar
        return "Ruby Bits Icon";
    }

    get getSrcUrl() {
        //retorna un string de la URL del icono
        return "./assets/image/bits logo/bits_ruby.png";
    }

    get getTypeAlert() {
        //retorna un string del tipo de alerta
        return "Bits";
    }
}

// -- 5. Icono para el tema Amarillo
/* 
-- Clase Concreta: AmarilloBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class AmarilloBitsIcon extends IconBits {

    get getNameIcon() {
        //retorna un string del nombre del icono para identificar
        return "Amarillo Bits Icon";
    }

    get getSrcUrl() {
        //retorna un string de la URL del icono
        return "./assets/image/bits logo/bits_amarillo.png";
    }

    get getTypeAlert() {
        //retorna un string del tipo de alerta
        return "Bits";
    }
}
// Retorno para facilitar el uso de las clases 
export { ObsidianBitsIcon, PurpleBitsIcon, EsmeraldaBitsIcon, DiamanteBitsIcon, RubyBitsIcon, AmarilloBitsIcon };
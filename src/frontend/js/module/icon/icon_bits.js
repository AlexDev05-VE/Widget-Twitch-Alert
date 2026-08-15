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
    get getSrcUrl() {
        return "/src/frontend/assets/image/bits/bits_obsidian.png";
    }
}

// 2. Icono para el tema Purpura
/* 
-- Clase Concreta: PurpleBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class PurpleBitsIcon extends IconBits {
    get getSrcUrl() {
        return "/src/frontend/assets/image/bits/bits_purpura.png";
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
    get getSrcUrl() {
        return "/src/frontend/assets/image/bits/bits_esmeralda.png";
    }
}

// 4. Icono para el tema Diamante
/* 
-- Clase Concreta: DiamanteBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class DiamanteBitsIcon extends IconBits {
    get getSrcUrl() {
        return "/src/frontend/assets/image/bits/bits_diamante.png";
    }
}

// 5. Icono para el tema Rubí
/* 
-- Clase Concreta: RubiBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class RubiBitsIcon extends IconBits {
    get getSrcUrl() {
        return "/src/frontend/assets/image/bits/bits_ruby.png";
    }
}

// 6. Icono para el tema Amarillo
/* 
-- Clase Concreta: AmarilloBitsIcon
    -getNameIcon() = Nombre del icono
    -getSrcUrl() = URL del icono
    -getTypeAlert() = Tipo de alerta
*/
class AmarilloBitsIcon extends IconBits {
    get getSrcUrl() {
        return "/src/frontend/assets/image/bits/bits_amarillo.png";
    }
}
// Retorno para facilitar el uso de las clases 
export { ObsidianBitsIcon, PurpleBitsIcon, EsmeraldaBitsIcon, DiamanteBitsIcon, RubiBitsIcon, AmarilloBitsIcon };
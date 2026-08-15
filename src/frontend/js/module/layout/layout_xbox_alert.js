
//Importancion del maquetado base de las alertas
import { Layout } from "./layout.js";
//Importancion del sonido de bits
import {
    ObsidianBitsSound,
    PurpleBitsSound,
    EsmeraldaBitsSound,
    DiamanteBitsSound,
    RubiBitsSound,
    AmbarBitsSound
} from "../sound/xbox_sound_bits.js";

//Importancion del icono de bits
import {
    ObsidianBitsIcon,
    PurpleBitsIcon,
    EsmeraldaBitsIcon,
    DiamanteBitsIcon,
    RubiBitsIcon,
    AmarilloBitsIcon
} from "../icon/icon_bits.js";

//Importancion del color de bits
import {
    Obsidian,
    Purple,
    Esmeralda,
    Diamante,
    Rubi,
    Amarillo
} from "../color/color_bits.js";
import { BitsMessage } from "../message/message_xbox.js";




// Determinados la implementacion de diferentes instancias de XboxBitsAlerts, lo que vamos a implementar un patron de diseño (Abstract Method) para construir fabricas de determinadas familias

/*Clase que implementa el maquetado base de las alertas de bits*/
class XboxAlertBits extends Layout {

    /*Constructor encargado de que le pasen todas las instancias para construir la alerta*/
    constructor(soundClass, iconClass, colorClass, messageClass) {
        super(soundClass, iconClass, colorClass, messageClass);
    }
    /*Metodo encargado de cambiar el logo de la alerta*/
    getBitsAlert() {

        /*Imprimir todos las propiedades para depuracion*/
        console.log(this.soundClass.getSrcSound.sonido_src)
        console.log(this.iconClass.getSrcUrl)
        console.log(this.colorClass.getHex.logo)
        console.log(this.colorClass.getHex.message)
        console.log(this.messageClass.getUser)
        console.log(this.messageClass.getBitsAmount)


        // -- Cambiar el logo a BitsAlertObsidian - Obsidiana
        document.querySelector("#logo_bits").setAttribute("src", String(this.iconClass.getSrcUrl));
        // -- Cambiar el color del logo a Obsidian
        document.querySelector(".logo-container").style.background = String(this.colorClass.getHex.logo);
        // -- Cambiar el color del mensaje a Obsidian
        document.querySelector(".container_message").style.background = String(this.colorClass.getHex.message);

        // -- Cambiar el texto del mensaje
        document.querySelector("#header_message").textContent = String(this.messageClass.getUser);
        document.querySelector("#footer_message").textContent = String(this.messageClass.getBitsAmount);

    }
}


/**Creacion de la Fabrica Abstracta (FABRICA PARA REFACTORIZAR PROXIMAMENTE)
 * 
 * Se debe desacomplar la logica de message en XboxBitsAlertAbstractFactory, es ineficiente y esta encadenado a ser una dependencias. Para solventar ese problema debemos realizar peticiones a Twitch para la informacion de los menssage en un modulo diferente, ese modulo alimenta las funciones de getUser, GetBitsAmout y GetMessage. Es una forma mas eficiente y mas limpia de gestionar las alertas.
 */

/*La fabrica abstracta se encarga de crear las instancias de sonido, icono, color y mensaje
- createSound(): Se encarga de crear la instancia de sonido
- createIcon(): Se encarga de crear la instancia de icono
- createColor(): Se encarga de crear la instancia de color
- createMessage(name, message, quantidade): Se encarga de crear la instancia de mensaje con sus respectivos atributos
- buildAlert(name, message, quantidade): Se encarga de crear la instancia de alerta con sus respectivos atributos
*/
class XboxBitsAlertAbstractFactory {
    createSound() { throw new Error("Método createSound no implementado"); }
    createIcon() { throw new Error("Método createIcon no implementado"); }
    createColor() { throw new Error("Método createColor no implementado"); }
    createMessage(name, message, quantidade) { throw new Error("Método createMessage no implementado"); }

    // Este método ensambla tu Layout automáticamente
    buildAlert(name, message, quantidade) {
        return new XboxAlertBits(
            this.createSound(),
            this.createIcon(),
            this.createColor(),
            this.createMessage(name, message, quantidade)
        );
    }
}

/**Fabricas Concretas - ObsididanXboxBitsAlertFactory (FABRICA PARA REFACTORIZAR PROXIMAMENTE) */
class ObsidianXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new ObsidianBitsSound(); }
    createIcon() { return new ObsidianBitsIcon(); }
    createColor() { return new Obsidian(); }
    createMessage(name, message, quantidade) { return new BitsMessage(name, message, quantidade); }
}

/**Fabricas Concretas - PurpleXboxBitsAlertFactory (FABRICA PARA REFACTORIZAR PROXIMAMENTE) */
class PurpleXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new PurpleBitsSound(); }
    createIcon() { return new PurpleBitsIcon(); }
    createColor() { return new Purple(); }
    createMessage(name, message, quantidade) { return new BitsMessage(name, message, quantidade); }
}

/**Fabricas Concretas - EsmeraldaXboxBitsAlertFactory (FABRICA PARA REFACTORIZAR PROXIMAMENTE) */
class EsmeraldaXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new EsmeraldaBitsSound(); }
    createIcon() { return new EsmeraldaBitsIcon(); }
    createColor() { return new Esmeralda(); }
    createMessage(name, message, quantidade) { return new BitsMessage(name, message, quantidade); }
}

/**Fabricas Concretas - DiamanteXboxBitsAlertFactory (FABRICA PARA REFACTORIZAR PROXIMAMENTE)*/
class DiamanteXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new DiamanteBitsSound(); }
    createIcon() { return new DiamanteBitsIcon(); }
    createColor() { return new Diamante(); }
    createMessage(name, message, quantidade) { return new BitsMessage(name, message, quantidade); }
}

/**Fabricas Concretas - RubiXboxBitsAlertFactory (FABRICA PARA REFACTORIZAR PROXIMAMENTE)*/
class RubiXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new RubiBitsSound(); }
    createIcon() { return new RubiBitsIcon(); }
    createColor() { return new Rubi(); }
    createMessage(name, message, quantidade) { return new BitsMessage(name, message, quantidade); }
}

/**Fabricas Concretas - AmbarXboxBitsAlertFactory (FABRICA PARA REFACTORIZAR PROXIMAMENTE)*/
class AmbarXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new AmbarBitsSound(); }
    createIcon() { return new AmarilloBitsIcon(); }
    createColor() { return new Amarillo(); }
    createMessage(name, message, quantidade) { return new BitsMessage(name, message, quantidade); }
}


export {
    ObsidianXboxBitsAlertFactory,
    PurpleXboxBitsAlertFactory,
    EsmeraldaXboxBitsAlertFactory,
    DiamanteXboxBitsAlertFactory,
    RubiXboxBitsAlertFactory,
    AmbarXboxBitsAlertFactory
}
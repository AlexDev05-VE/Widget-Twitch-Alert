import { Layout } from "./layout.js";
import {
    ObsidianBitsSound,
    PurpleBitsSound,
    EsmeraldaBitsSound,
    DiamanteBitsSound,
    RubiBitsSound,
    AmbarBitsSound
} from "../sound/xbox_sound_bits.js";

import {
    ObsidianBitsIcon,
    PurpleBitsIcon,
    EsmeraldaBitsIcon,
    DiamanteBitsIcon,
    RubiBitsIcon,
    AmarilloBitsIcon
} from "../icon/icon_bits.js";

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


class XboxAlertBits extends Layout {

    constructor(soundClass, iconClass, colorClass, messageClass) {
        super(soundClass, iconClass, colorClass, messageClass);
    }
    // ...
    getBitsAlert() {

        /*Imprimir todos las propiedades*/
        console.log(this.soundClass.getSrcSound.sonido_src)
        console.log(this.iconClass.getSrcUrl)
        console.log(this.colorClass.getHex.logo)
        console.log(this.colorClass.getHex.message)



        // -- Cambiar el logo a BitsAlertObsidian - Obsidiana
        document.querySelector("#logo_bits").setAttribute("src", String(this.iconClass.getSrcUrl));
        // -- Cambiar el color del logo a Obsidian
        document.querySelector(".logo-container").style.background = String(this.colorClass.getHex.logo);
        // -- Cambiar el color del mensaje a Obsidian
        document.querySelector(".container_message").style.background = String(this.colorClass.getHex.message);

    }
}

/**Creacion de la Fabrica Abstracta */
class XboxBitsAlertAbstractFactory {
    createSound() { throw new Error("Método createSound no implementado"); }
    createIcon() { throw new Error("Método createIcon no implementado"); }
    createColor() { throw new Error("Método createColor no implementado"); }
    createMessage() { throw new Error("Método createMessage no implementado"); }

    // Este método ensambla tu Layout automáticamente
    buildAlert() {
        return new XboxAlertBits(
            this.createSound(),
            this.createIcon(),
            this.createColor(),
            this.createMessage()
        );
    }
}

/**Fabricas Concretas - ObsididanXboxBitsAlertFactory */

class ObsidianXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new ObsidianBitsSound(); }
    createIcon() { return new ObsidianBitsIcon(); }
    createColor() { return new Obsidian(); }
    createMessage() { return new BitsMessage(); }
}

/**Fabricas Concretas - PurpleXboxBitsAlertFactory */

class PurpleXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new PurpleBitsSound(); }
    createIcon() { return new PurpleBitsIcon(); }
    createColor() { return new Purple(); }
    createMessage() { return new BitsMessage(); }
}

/**Fabricas Concretas - EsmeraldaXboxBitsAlertFactory */

class EsmeraldaXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new EsmeraldaBitsSound(); }
    createIcon() { return new EsmeraldaBitsIcon(); }
    createColor() { return new Esmeralda(); }
    createMessage() { return new BitsMessage(); }
}

/**Fabricas Concretas - DiamanteXboxBitsAlertFactory */

class DiamanteXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new DiamanteBitsSound(); }
    createIcon() { return new DiamanteBitsIcon(); }
    createColor() { return new Diamante(); }
    createMessage() { return new BitsMessage(); }
}

/**Fabricas Concretas - RubiXboxBitsAlertFactory */

class RubiXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new RubiBitsSound(); }
    createIcon() { return new RubiBitsIcon(); }
    createColor() { return new Rubi(); }
    createMessage() { return new BitsMessage(); }
}

/**Fabricas Concretas - AmbarXboxBitsAlertFactory */

class AmbarXboxBitsAlertFactory extends XboxBitsAlertAbstractFactory {
    createSound() { return new AmbarBitsSound(); }
    createIcon() { return new AmarilloBitsIcon(); }
    createColor() { return new Amarillo(); }
    createMessage() { return new BitsMessage(); }
}


export {
    ObsidianXboxBitsAlertFactory,
    PurpleXboxBitsAlertFactory,
    EsmeraldaXboxBitsAlertFactory,
    DiamanteXboxBitsAlertFactory,
    RubiXboxBitsAlertFactory,
    AmbarXboxBitsAlertFactory
}
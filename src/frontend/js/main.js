/** Importamos lo que vamos a utilizar */

import {
    ObsidianXboxBitsAlertFactory,
    PurpleXboxBitsAlertFactory,
    EsmeraldaXboxBitsAlertFactory,
    DiamanteXboxBitsAlertFactory,
    RubiXboxBitsAlertFactory,
    AmbarXboxBitsAlertFactory
} from "./module/layout/layout_xbox_alert.js";

<<<<<<< HEAD

console.log("Hello")
const instance_obsidian_xbox_bits_alert_factory = new ObsidianXboxBitsAlertFactory()

const obsidian_xbox_bits_alert = instance_obsidian_xbox_bits_alert_factory.buildAlert()

obsidian_xbox_bits_alert.getBitsAlert()
=======
/**Creacion de instancia con fabricas concretas */

const alert = new ObsidianXboxBitsAlertFactory().buildAlert("Shyvadi", undefined, 1000)

/**Llamada a la funcion getBitsAlert*/
alert.getBitsAlert()
>>>>>>> 86d5b11 (Implementacion de lo siguiente:)

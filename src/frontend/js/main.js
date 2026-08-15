/** Importamos lo que vamos a utilizar */

import {
    ObsidianXboxBitsAlertFactory,
    PurpleXboxBitsAlertFactory,
    EsmeraldaXboxBitsAlertFactory,
    DiamanteXboxBitsAlertFactory,
    RubiXboxBitsAlertFactory,
    AmbarXboxBitsAlertFactory
} from "./module/layout/layout_xbox_alert.js";


console.log("Hello")
const instance_obsidian_xbox_bits_alert_factory = new ObsidianXboxBitsAlertFactory()

const obsidian_xbox_bits_alert = instance_obsidian_xbox_bits_alert_factory.buildAlert()

obsidian_xbox_bits_alert.getBitsAlert()
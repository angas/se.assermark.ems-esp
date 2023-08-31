// TODO: Should be internaltionalized
export const ErrorCodes = new Map([
  [
    "258",
    "Systemfel enhetselektronik/basstyrenhet. Larmet försvinner efter en omstart.",
  ],
  [
    "1001",
    "Ingen kommunikation mellan reglercentral och fjärrstyrning. Förmodligen glappkontakt till rumsgivaren.",
  ],
  [
    "1010",
    "Ingen kommunikation via BUS-förbindelsen EMS. Tillfällig störning eller avbrott i EMS-anslutning.",
  ],
  ["1038", "Ogiltigt värde tid/datum. Tid/datum har inte ställts in."],
  [
    "1051",
    "Ingen kommunikation med modul för extern rumsgivare krets 1. Modulen för extern rumsgivare har inte installerats. Larmet triggas om installatören ändå gör inställningen att styra en värmekrets med denna. Larmet är fördröjt med 4 minuter.",
  ],
  [
    "1052",
    "Ingen kommunikation med modul för extern rumsgivare krets 2. Modulen för extern rumsgivare har inte installerats. Larmet triggas om installatören ändå gör inställningen att styra en värmekrets med denna. Larmet är fördröjt med 4 minuter.",
  ],
  [
    "1053",
    "Ingen kommunikation med modul för extern rumsgivare krets 3. Modulen för extern rumsgivare har inte installerats. Larmet triggas om installatören ändå gör inställningen att styra en värmekrets med denna. Larmet är fördröjt med 4 minuter.",
  ],
  [
    "1054",
    "Ingen kommunikation med modul för extern rumsgivare krets 4. Modulen för extern rumsgivare har inte installerats. Larmet triggas om installatören ändå gör inställningen att styra en värmekrets med denna. Larmet är fördröjt med 4 minuter.",
  ],
  [
    "1081",
    "Två huvudreglercentraler i systemet.. Rumsgivaren för värmekrets 1 har felaktigt konfigurerats som reglercentral/reglerdon",
  ],
  [
    "1082",
    "Två huvudreglercentraler i systemet.. Rumsgivaren för värmekrets 2 har felaktigt konfigurerats som reglercentral/reglerdon",
  ],
  [
    "1083",
    "Två huvudreglercentraler i systemet.. Rumsgivaren för värmekrets 3 har felaktigt konfigurerats som reglercentral/reglerdon",
  ],
  [
    "1084",
    "Två huvudreglercentraler i systemet.. Rumsgivaren för värmekrets 4 har felaktigt konfigurerats som reglercentral/reglerdon",
  ],
  [
    "3061",
    "Ingen kommunikation med shuntmodul. En shuntmodul har tidigare installerats för värmekrets 1 och ny lyckas installatörsmodulen inte kommunicera med shuntmodulen över EMS-bussen.",
  ],
  [
    "3062",
    "Ingen kommunikation med shuntmodul. En shuntmodul har tidigare installerats för värmekrets 2 och ny lyckas installatörsmodulen inte kommunicera med shuntmodulen över EMS-bussen.",
  ],
  [
    "3063",
    "Ingen kommunikation med shuntmodul. En shuntmodul har tidigare installerats för värmekrets 3 och ny lyckas installatörsmodulen inte kommunicera med shuntmodulen över EMS-bussen.",
  ],
  [
    "3064",
    "Ingen kommunikation med shuntmodul. En shuntmodul har tidigare installerats för värmekrets 4 och ny lyckas installatörsmodulen inte kommunicera med shuntmodulen över EMS-bussen.",
  ],
  [
    "3071",
    "Ingen kommunikation med rumsenhet.. Dålig kontakt i EMS-kabel mellan rumstermostat och styrkort. Kan även vara störning p.g.a. att en starkströmskabel ligger för nära EMS-kabeln. Kontakta Er installatör",
  ],
  [
    "3072",
    "Ingen kommunikation med rumsenhet.. Dålig kontakt i EMS-kabel mellan rumstermostat och styrkort. Kan även vara störning p.g.a. att en starkströmskabel ligger för nära EMS-kabeln. Kontakta Er installatör",
  ],
  [
    "3073",
    "Ingen kommunikation med rumsenhet.. Dålig kontakt i EMS-kabel mellan rumstermostat och styrkort. Kan även vara störning p.g.a. att en starkströmskabel ligger för nära EMS-kabeln. Kontakta Er installatör",
  ],
  [
    "3074",
    "Ingen kommunikation med rumsenhet.. Dålig kontakt i EMS-kabel mellan rumstermostat och styrkort. Kan även vara störning p.g.a. att en starkströmskabel ligger för nära EMS-kabeln. Kontakta Er installatör",
  ],
  [
    "3081",
    "Konfigurationsfel: Fjärrstyrning används ej. Rumsgivaren har konfigurerats för att styra krets 1 som inte är definierad.",
  ],
  [
    "3082",
    "Konfigurationsfel: Fjärrstyrning används ej. Rumsgivaren har konfigurerats för att styra krets 2 som inte är definierad.",
  ],
  [
    "3083",
    "Konfigurationsfel: Fjärrstyrning används ej. Rumsgivaren har konfigurerats för att styra krets 3 som inte är definierad.",
  ],
  [
    "3084",
    "Konfigurationsfel: Fjärrstyrning används ej. Rumsgivaren har konfigurerats för att styra krets 4 som inte är definierad.",
  ],
  [
    "3091",
    "Defekt rumstemperaturgivare. Termistorn i rumsgivaren (RC100/CR10) för värmekrets 1 är defekt. EMS-kommunikation fungerar.",
  ],
  [
    "3092",
    "Defekt rumstemperaturgivare. Termistorn i rumsgivaren (RC100/CR10) för värmekrets 2 är defekt. EMS-kommunikation fungerar.",
  ],
  [
    "3093",
    "Defekt rumstemperaturgivare. Termistorn i rumsgivaren (RC100/CR10) för värmekrets 3 är defekt. EMS-kommunikation fungerar.",
  ],
  [
    "3094",
    "Defekt rumstemperaturgivare. Termistorn i rumsgivaren (RC100/CR10) för värmekrets 4 är defekt. EMS-kommunikation fungerar.",
  ],
  [
    "3111",
    "Konfigurationsfel: Felaktig rumsenhet. Larmet ges om en rumsgivare tidigare kvitterats in, men en annan rumsgivartyp med hygrometer nu är ansluten - eller tvärtom. Kontakta installatör.",
  ],
  [
    "3121",
    "Temperaturbegränsning utlöst. Larmet ges av shuntmodul MM100 för krets 1 om dess MC1-ingång är öppen. Det är möjligt att ansluta temperaturvakt som bryter ansluten över MC1 när temperaturen är för hög.",
  ],
  [
    "3122",
    "Temperaturbegränsning utlöst. Larmet ges av shuntmodul MM100 för krets 2 om dess MC1-ingång är öppen. Det är möjligt att ansluta temperaturvakt som bryter ansluten över MC1 när temperaturen är för hög.",
  ],
  [
    "3141",
    "Fuktgivare defekt. Sensor för relativ luftfuktighet är trasig i rumsgivaren. Kontakta installatör.",
  ],
  [
    "3142",
    "Fuktgivare defekt. Sensor för relativ luftfuktighet är trasig i rumsgivaren. Kontakta installatör.",
  ],
  [
    "3143",
    "Fuktgivare defekt. Sensor för relativ luftfuktighet är trasig i rumsgivaren. Kontakta installatör.",
  ],
  [
    "3144",
    "Fuktgivare defekt. Sensor för relativ luftfuktighet är trasig i rumsgivaren. Kontakta installatör.",
  ],
  [
    "3171",
    "Låg batterispänning i trådlös rumsgivare i värmekrets 1. Byt ut batteriet i den trådlösa rumsgivaren.",
  ],
  [
    "3181",
    "Trådlös rumsgivare för värmekrets 1 sänder ingen signal. Avståndet mellan rumsgivare och nyckel är för långt.",
  ],
  [
    "5201",
    "Varning Kabelbrott i utetemp.givare T1. Utegivare T1 har ej installerats. Avbrott på signalkabel mellan installatörsmodul och givaren. Kontakta installatör.",
  ],
  [
    "5202",
    "Varning utegivare T1 kortsluten.. Utegivare T1/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5203",
    "Larm utegivare T1 trasig. Utegivare T1/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5204",
    "Varning framledningsgivare T0 avbrott. Avbrott på signalkabel mellan installatörsmodul och givaren. Kontakta installatör.",
  ],
  [
    "5205",
    "Varning framledningsgivare T0 kortsluten. Framledningsgivare T0/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5206",
    "Larm framledningsgivare T0 trasig. Avbrott på signalkabel mellan installatörsmodul och givaren. Kontakta installatör.",
  ],
  [
    "5207",
    "Varning Z1 värmebärare ut givare TC1 avbrott. Värmebärare ut givare TC1/signalkabel avbrott. Kontakta installatör.",
  ],
  [
    "5208",
    "Varning Z1 värmebärare ut givare TC1 kortsluten. Värmebärare ut givare TC1/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5209",
    "Larm Z1 värmebärare ut givare TC1 trasig. Värmebärare ut givare TC1/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5213",
    "Varning Z1 värmebärare in givare TC0 avbrott. Värmebärare retur givare TC0/signalkabel avbrott. Kontakta installatör.",
  ],
  [
    "5214",
    "Varning Z1 värmebärare in givare TC0 kortsluten. Värmebärare in givare TC0/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5215",
    "Larm Z1 värmebärare in givare TC0 trasig. Värmebärare in givare TC0/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5234",
    "Varning Pooltemperatur givare TP1 avbrott. Pooltemperaturgivare TC1/signalkabel avbrott. Kontakta installatör.",
  ],
  [
    "5235",
    "Pooltemperaturgivare TC1 kortsluten. Pooltemperaturgivare TC1 kortsluten. Kontakta installatör.",
  ],
  [
    "5236",
    "Larm efter 3 fel inom 3 timmar, eller 15 minuter avbrott/kortslutning på poolgivare TC1.. Pooltemperaturgivare TC1 kortsluten. Kontakta installatör.",
  ],
  [
    "5237",
    "Varning varmvattentemp.givare TW1 kabelbrott. Varmvattengivare TW1/signalkabel avbrott. Kontakta installatör.",
  ],
  [
    "5238",
    "Varning varmvattentemp.givare TW1 kortslutning. Varmvattengivare TW1/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5239",
    "Larm Z1 varmvattengivare TW1 trasig. Varmvattengivare TW1/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5246",
    "Överhettningsskydd el. systemtryckvakt har löst ut. . Antingen är systemtrycket i värmeanläggningen under 0,5 bar, eller så har överhettningsskyddet löst ut. Se instruktionsfilmer knappen nedan.",
  ],
  [
    "5252",
    "Varning när värmebärardelta >13K i värmedrift, eller >7K i kyldrift.. Dålig cirkulation i värmebärarsystem/värmesystem. Stängda temostater på värmesystemet eller smuts i partikelfiltret på returledningen. Se instruktionsfilmer knappen nedan.",
  ],
  ["5265", "Varning Värmepumpskort Z1 frånkopplat. Kontakta Installatör."],
  ["5266", "Larm Z1 Kretskort ej anslutet. Kontakta Installatör."],
  [
    "5269",
    "Larm Z1 elkassette EE för hög temperatur. Dålig cirkulation i värmebärarsystem/värmesystem. Stängda temostater på värmesystemet eller smuts i partikelfiltret på returledningen. Se instruktionsfilmer knappen nedan.",
  ],
  [
    "5271",
    "Larm värmekrets 1 Hög framledn.temp.. Felställd larmgräns för max framledning. Lågt flöde över värmesystemet. Stängda temostater på värmesystemet eller smuts i partikelfiltret på returledningen. Se instruktionsfilmer knappen nedan.",
  ],
  [
    "5272",
    "Larm Externt tillskott EM fungerar ej. Antingen är systemtrycket i värmeanläggningen under 0,5 bar, eller så har överhettningsskyddet löst ut. Se instruktionsfilmer knappen nedan.",
  ],
  [
    "5273",
    "Larm Z1 fasövervakning. Utlöst säkring för värmepumpen. Kontrollera säkringar i elcentralen.",
  ],
  ["5275", "Larm Elanoden fungerar ej. Kontakta installatör."],
  [
    "5276",
    "Larm Värmepump Z1 lågt tryck köldbärare. Kontrollera tryck köldbärare. Kontakta installatör.",
  ],
  [
    "5284",
    "Varning Senaste term. desinfektion kunde ej genomföras. (Legionellaspetsning).. Överhettningsskyddet har löst ut. Vatten tappas kontinuerligt från varmvattenberedaren. Elpatronens effekt är lågt ställd i förhållande till varmvattenvolymen. Nytt försök görs kommande dygn.",
  ],
  [
    "5285",
    "Varning frysskyddet är aktivt. Varning om T0 (framledning), TC1 (värmebärare ut) eller TC0 (värmebärare retur) < 5°C i 10 minuter. Rensa systemfilter. Öppna termostater. Om detta inte hjälper kontakta installatör.",
  ],
  [
    "5294",
    "Info daggpunktsvakt har slutit.. Hög kondens vid kyldrift. Inget fel. Varningen återgår när luftfuktigheten minskar.",
  ],
  [
    "5295",
    "Larm kondensvakt har löst ut. Felkod 5294 har varit aktiv i 30 minuter. Larmet måste kvitteras manuellt. Kontakta installatör.",
  ],
  [
    "5298",
    "Varning Värmepump Z1 för högt tryck på JR1. Dålig cirkulation i värmebärarsystem/värmesystem. Rensa systemfilter. Öppna termostater. Om detta inte hjälper kontakta installatör.",
  ],
  [
    "5299",
    "Larm Värmepump Z1 för högt tryck på JR1. Dålig cirkulation i värmebärarsystem/värmesystem. Rensa systemfilter. Öppna termostater. Om detta inte hjälper kontakta installatör.",
  ],
  [
    "5302",
    "Varning Z1 hög temperatur på kompressordriver. Dålig värmeöverföring mot kylslinga. Kontakta installatör.",
  ],
  [
    "5303",
    "Larm Z1 hög temperatur på kompressordriver. Dålig värmeöverföring mot kylslinga. Kontakta installatör.",
  ],
  ["5310", "Varning Z1 För hög hetgastemperatur. Tillfälligt fel Avvakta."],
  ["5311", "Larm Z1 För hög hetgastemperatur. Kontakta installatör."],
  [
    "5314",
    "Varning värmepump Z1 hetgasgivare TR6 avbrott. Hetgasgivare TR6/signalkabel avbrott. Kontakta installatör.",
  ],
  [
    "5315",
    "Varning Z1 Kortslutning i hetgastemp.givare TR6. Hetgasgivare TR6/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5316",
    "Larm Z1 Fel i hetgastemp. givare TR6. Hetgasgivare TR6/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5320",
    "Varning värmepump Z1 kondensorgivare TC3 avbrott. Kondensorgivare TC3/signalkabel avbrott. Kontakta installatör.",
  ],
  [
    "5321",
    "Varning värmepump Z1 kondensorgivare TC3 kortsluten. Kondensorgivare TC3/signalkabel kortsluten. Kontakta installatör.",
  ],
  [
    "5322",
    "Larm värmepump Z1 kondensorgivare TC3 trasig. Kontakta installatör.",
  ],
  [
    "5330",
    "Varning värmepump Z1 kommunikationsfel till kompressordriver. Spänning saknas till I/O. Kontakta installatör.",
  ],
  [
    "5331",
    "Larm värmepump Z1 kommunikationsfel till kompressor drivern. Spänning saknas till I/O. Kontakta installatör.",
  ],
  [
    "5347",
    "Varning Z1 För låg spänning i strömförsörjning. Kontrollera säkringar. Vid upprepade varningar kontakta el-leverantör",
  ],
  [
    "5350",
    "Varning värmepump Z1 ascynkron drift på kompressorn. Tillfälligt fel, beror troligtvis på elavbrott. Avvakta.",
  ],
  [
    "5351",
    "Larm värmepump Z1 ascynkron drift på kompressorn. Kontakta installatör.",
  ],
  [
    "5354",
    "Varning värmepump Z1 överström kompressor. Tillfälligt fel, beror troligtvis på elavbrott. Avvakta.",
  ],
  ["5355", "Larm Z1 För hög utström i kompressorn. Kontakta installatör."],
  [
    "5362",
    "Info värmepump Z1 överspänning. För hög inkommande nätspänning. Kontrollera huvudsäkringar med hänsyn till dålig kontakt. Vid upprepade varningar kontakta el-leverantör",
  ],
  [
    "5366",
    "Larm värmepump  låg överhettning. . Flödesproblem på värmesystemet. Kontrollera så att alla termostater är öppna till värmesystemet. Lufta värmesystemet. Se instruktionsfilmer knappen nedan. Om inte detta hjälper kontakta er installatör.",
  ],
  [
    "5367",
    "Larm värmepump låg överhettning. . Flödesproblem på värmesystemet. Kontrollera så att alla termostater är öppna till värmesystemet. Lufta värmesystemet. Rengör systemfilter. Se instruktionsfilmer knappen här nedan. Om inte detta hjälper kontakta er installatör.",
  ],
  [
    "5370",
    "Larm överspänning.. Kompressorn stannar. Larmet behöver kvitteras för tillåtta nya startförsök. Glappande huvudsäkringar. Instabilt spänningsnät. Om felmeddelandet ges vid upprepade tillfällen, kontakta elleverantören och genomför en loggad mätning av spänning. Se till att mätintervallet är kortare än de 30 s som används i larmdefinitionen.",
  ],
  [
    "5374",
    "Varning värmepump Z1 frysskydd av kondensor. Dålig/utebliven cirkulation i värmesystem. Öppna termostater. Rengör systemfilter. Lufta värmesystemet, kontrollera tryck i värmesystemet.",
  ],
  [
    "5375",
    "Larm värmepump Z1 frysskydd av kondensor. Dålig/utebliven cirkulation i värmesystem. Öppna termostater. Rengör systemfilter. Lufta värmesystemet, kontrollera tryck i värmesystemet. Om inte detta hjälper, kontakta installatör.",
  ],
  [
    "5387",
    "Larm värmepump Z1 kompressordrivern är för varm. Kontakta installatör.",
  ],
  [
    "5394",
    "Varning värmepump Z1 Internt kompressordriverfel 1. Tillfälligt fel. Avvakta.",
  ],
  [
    "5395",
    "Larm värmepump Z1 Internt kompressordriverfel. Kontakta installatör.",
  ],
  [
    "5414",
    "Varning värmepump Z1 vätskeledning i värmeläge givare TR3 avbrott. Tillfälligt fel. Avvakta.",
  ],
  [
    "5415",
    "Varning värmepump Z1 vätskeledning i värmeläge givare TR3 kortsluten. Tillfälligt fel. Avvakta.",
  ],
  [
    "5416",
    "Larm värmepump Z1 vätskeledning i värmeläge givare TR3 trasig. Kontakta installatör.",
  ],
  [
    "5420",
    "Varning värmepump Z1 vätskeledning i kylläge givare TR4 avbrott. Tillfälligt fel. Avvakta.",
  ],
  [
    "5421",
    "Varning värmepump Z1 vätskeledning i kylläge givare TR4 kortsluten. Tillfälligt fel. Avvakta.",
  ],
  [
    "5422",
    "Larm värmepump Z1 vätskeledning i kylläge givare TR4 trasig. Kontakta installatör.",
  ],
  [
    "5426",
    "Varning värmepump Z1 suggasgivare TR5 avbrott. Tillfälligt fel. Avvakta.",
  ],
  [
    "5427",
    "Varning värmepump Z1 suggasgivare TR5 kortsluten. Tillfälligt fel. Avvakta.",
  ],
  ["5428", "Larm värmepump Z1 suggasgivare TR5 trasig. Kontakta installatör."],
  [
    "5432",
    "Varning värmepump Z1 tryckgivare lågtryck JR0 avbrott. Tillfälligt fel. Avvakta.",
  ],
  [
    "5434",
    "Larm värmepump Z1 tryckgivare lågtryck JR0 trasig. Kontakta installatör.",
  ],
  [
    "5438",
    "Larm värmepump tryckgivare högtryck JR1 trasig. Larm värmepump Z1 tryckgivare högtryck JR1 trasig. Kontakta er installatör.",
  ],
  [
    "5440",
    "Larm värmepump tryckgivare högtryck JR1 trasig. Larm värmepump Z1 tryckgivare högtryck JR1 trasig. Kontakta er installatör.",
  ],
  [
    "5448",
    "Köldmediebrist värmepump Z1. För lite köldmedie i värmepump. Kontakta installatör.",
  ],
  [
    "5452",
    "Internt fel på inverter till kompressor i värmepump Z1. Kontakta installatör.",
  ],
  [
    "5463",
    "Larm värmepump Z1 defrost. Öppna flera termostater på värmesystemet. Rensa systemfilter/filterball. Se instruktionsfilmer via knappen nedan.",
  ],
  [
    "5500",
    "Golvärme termostaten på extern ingången är utlöst. Återställ termostat, justera eventuellt värmekurva",
  ],
  [
    "5503",
    "Varning Problem med anslutningen till belastningsvakt. . Tillfälligt fel. Avvakta.",
  ],
  ["5504", "Larm Fel på förbindelsen med effektvakt. Kontakta installatör."],
  ["5506", "Kompressorn startar ej. Bryt och slå på spänning till värmepump."],
  [
    "5507",
    "Larm  MR1 högtryckslarm. . Flödesproblem på värmesystem. Värmebärarfilter kan vara igensatt. Kontrollera att termostater är öppna på värmesystemet samt lufta värmesystemet. Se instruktionsfilmer knappen nedan.",
  ],
  [
    "5508",
    "Larm  MR1 högtryckslarm. . Flödesproblem på värmesystem. Värmebärarfilter kan vara igensatt. Kontrollera att termostater är öppna på värmesystemet samt lufta värmesystemet. Se instruktionsfilmer knappen nedan.",
  ],
  [
    "5512",
    "Kondenseringstemperaturen utanför envelopen i värmepump. Tillfälligt fel. Avvakta.",
  ],
  [
    "5513",
    "För hög kondensering i värmepump. För låg förångningstemperatur i förhållande till kondenseringstemperatur. Kontakta installatör.",
  ],
  [
    "5514",
    "Larm låg förångning JR0 i värmepump Lågtryckslarm.. Kan vara ett flödesproblem. Kontrollera så att termostater är öppna på värmesystemet. Filter kan vara igensatt på värmebärarsidan. Lufta systemet. Se instruktionsfilmer knappen här nedan. Om detta inte hjälper, kontakta er installatör.",
  ],
  [
    "5515",
    "Larm låg förångning JR0 i värmepump Lågtryckslarm. . Kan vara ett flödesproblem. Kontrollera så att termostater är öppna på värmesystemet. Filter kan vara igensatt på värmebärarsidan. Lufta systemet. Se instruktionsfilmer knappen här nedan. Om detta inte hjälper, kontakta er installatör.",
  ],
  ["5522", "Fel kombination av värmepump och innedel. Kontakta installatör."],
  [
    "5523",
    "Varning värmepump Z1 PFC överström av kompressordrivern. Kontrollera att varje fas är ansluten. Tillfällig störning.",
  ],
  [
    "5524",
    "Larm värmepump Z1 PFC överström av kompressordrivern. Kontakta installatör.",
  ],
  [
    "5527",
    "Larm värmepump Z1 för mycket köldmedium i värmepumpen. Kontakta installatör.",
  ],
  [
    "5531",
    "Varning värmepump Z1 kompressorgivare TR1 avbrott. Tillfälligt fel. Avvakta.",
  ],
  [
    "5532",
    "Varning värmepump Z1 kompressorgivare TR1 kortslutning. Tillfälligt fel. Avvakta.",
  ],
  [
    "5533",
    "Larm värmepump Z1 kompressorgivare TR1 trasig. Kontakta installatör.",
  ],
  [
    "5541",
    "Larm Kommunikation med pool kortet misslyckades. Kontakta installatör.",
  ],
  [
    "5543",
    "Varning Z1 Överhettningstemperatur ligger över optimum. Tillfälligt fel. Avvakta.",
  ],
  [
    "5545",
    "Larm Värmepump Z1 båda givare TB0 och TB1 avbrott/kortslutning. Kontakta installatör.",
  ],
  [
    "5547",
    "Varning Z1 temperatur givare köldbärare in TB0 för låg. Varning om TB0 < -6°C (borrhål) eller 2°C (grundvatten) Tillfälligt fel. Avvakta",
  ],
  [
    "5549",
    "Larm Z1 temperatur givare köldbärare in TB0 för låg. Larm om temp är under ( -6°C borrhål) (2°C grund vatten). Kontakta installatör.",
  ],
  [
    "5551",
    "Varning Z1 temperatur givare köldbärare in TB1 för låg. Varning om temp är under ( -6°C borrhål) (2°C grund vatten). Tillfälligt fel. Avvakta.",
  ],
  [
    "5553",
    "Larm Z1 temperatur givare köldbärare in TB1 för låg. Larm om temp är under ( -6°C borrhål) (2°C grund vatten). Kontakta installatör.",
  ],
  [
    "5555",
    "Varning Z1 temperatur givare köldbärare in TB0 för varm. Tillfälligt fel. Avvakta.",
  ],
  [
    "5557",
    "Larm Z1 temperatur givare köldbärare in TB0 för varm. Kontakta Installatör.",
  ],
  [
    "5559",
    "Varning Z1 temperatur givare köldbärare in TB1 för varm. Tillfälligt fel. Avvakta.",
  ],
  [
    "5561",
    "Larm Z1 temperatur givare köldbärare in TB1 för varm. Kontakta Installatör.",
  ],
  [
    "5563",
    "Varning Z1 temperatur delta givare TB0- TB1 för hög. Smutsfilter igensatt. Luft i köldbärarsystem. Lufta systemet. Se instruktionsfilmer knappen här nedan. Om detta inte hjälper, kontakta er installatör.",
  ],
  [
    "5565",
    "Larm Z1 temperatur delta givare TB0- TB1 för hög. Smutsfilter igensatt. Luft i köldbärarsystem. Lufta systemet. Se instruktionsfilmer knappen här nedan. Om detta inte hjälper, kontakta er installatör.",
  ],
  [
    "5567",
    "Varning Z1 Köldbärarpump PB3 internt fel. Smutsfilter igensatt. Luft i köldbärarsystem. Lufta systemet. Se instruktionsfilmer knappen här nedan. Om detta inte hjälper, kontakta er installatör.",
  ],
  [
    "5569",
    "Larm Z1 Köldbärarpump PB3 internt fel. Smutsfilter igensatt. Luft i köldbärarsystem. Lufta systemet. Se instruktionsfilmer knappen här nedan. Om detta inte hjälper, kontakta er installatör.",
  ],
  [
    "5571",
    "Varning Z1 köldbärare in givare TB0 kortsluten. Tillfälligt fel. Avvakta.",
  ],
  [
    "5573",
    "Varning Z1 köldbärare in givare TB0 avbrott. Tillfälligt fel. Avvakta.",
  ],
  ["5575", "Larm Z1 köldbärare in givare TB0 trasig. Kontakta Installatör."],
  [
    "5577",
    "Varning Z1 köldbärare ut givare TB1 kortsluten. Tillfälligt fel. Avvakta.",
  ],
  [
    "5579",
    "Varning Z1 köldbärare ut givare TB1 avbrott. Tillfälligt fel. Avvakta.",
  ],
  ["5581", "Larm Z1 köldbärare ut givare TB1 trasig. Kontakta Installatör."],
  [
    "5585",
    "Larm Z1 Lågtrycksgivare indikerar problem i köldbärare. Kontakta Installatör.",
  ],
  ["5593", "Info ingen kommunikation med poolmodul. Tillfälligt fel Avvakta."],
  [
    "5594",
    "Larm Z1 luft i systemet. Kan vara ett flödesproblem. Kontrollera så att termostater är öppna på värmesystemet. Filter kan vara igensatt på värmebärarsidan. Lufta systemet. Se instruktionsfilmer knappen här nedan. Om detta inte hjälper, kontakta er installatör",
  ],
  [
    "5900",
    "Info: Fasbortfall till kompressor. Kontrollera säkringar i elcentralen. Om säkringar är hela, kontakta installatör.",
  ],
  [
    "5902",
    "Info: Överlast på kompressormotorn. Kan bero på låg spänning mellan fas och nolla. Kontakta installatör.",
  ],
  ["5903", "Info: Fel i kompressormotorn. Tillfälligt fel. Avvakta."],
  ["5904", "Larm - Fel i inverter. Kontakta Installatör."],
  [
    "5905",
    "Larm: Matningsspänning för inverteringsstyrning för låg. Matningsspänning understiger 180 VAC. Kontakta elleverantören om problemet består.",
  ],
  [
    "5906",
    "Info: Kortsiktig kraftig överlast på kompressormotorn. Tillfälligt fel. Avvakta.",
  ],
  [
    "5908",
    "Larm: Fel vid initiatliseringen av inverterstyrningen. Kontakta installatör.",
  ],
  [
    "5909",
    "Larm: Cirkulationspump med okända funktioner är ansluten till modbus. Kontakta installatör.",
  ],
  [
    "5917",
    "Larm: Ingen kommunikation med värmekretspumpen PC0. Kontrollera säkringar i elcentralen. Om säkringar är hela, kontakta installatör.",
  ],
  [
    "5918",
    "Larm: Volymsflöde för cirkulationspump PC0 för lågt. Kontrollera, avlufta och fyll värmesystemet. Se instruktionsfilmer knappen här nedan.",
  ],
  [
    "5919",
    "Larm: Cirkulationspump PC0 är blockerad. Kontrollera partikelfilter och vattenkvalitet. Kontakta installatör. Se instruktionsfilmer knappen här nedan.",
  ],
  [
    "5920",
    "Larm: Matningsspänning för cirkulationspump PC0 för låg. Matningsspänningen till PC0 är lägre än 150V. Kontrollera säkringar. Om spänningen är för låg, kontakta elleverantören för att begära en loggad mätning av spänningen.",
  ],
  [
    "5921",
    "Larm: Internt fel i cirkulationspumpen PC0. Bryt spänningsmatningen till PC0 och anslut den igen. Om detta inte hjälper, kontakta installatör.",
  ],
  [
    "5922",
    "Larm: Matningsspänning för cirk- ulationspump PC0 för hög. Kontrollera säkringar. Om spänningen är för hög, kontakta elleverantören för att begära en loggad mätning av spänningen.",
  ],
  [
    "5923",
    "Larm: Cirkulationspump PC0 kör torrt. Fyll värmekretsen. Lufta värmesuystemet. Kontrollera systemfilter. Se instruktionsfilmer knappen här nedan.",
  ],
  [
    "5937",
    "Info: Volymflöde från en ext. källa genom cirkulationspumpen PC0. Ytterligare cirkulationspump har monterats i kretsen, som ej styrs av värmepumpen.",
  ],
  [
    "5938",
    "Info: Temperatur i reglercentral för cirkulationspump PC0 är för hög. Omgivningstemperaturen i uppställningsrummet är för hög. Som förordat i installatörshandledningen ska rumstemperaturen inte överstiga 35°C.",
  ],
  [
    "5939",
    "Info: Matningsspänning cirkulationspump PC0 för låg. Kontrollera säkringar. Om spänningen är för låg, kontakta elleverantören för att begära en loggad mätning av spänningen.",
  ],
  [
    "5940",
    "Info: Luft i cirkulationspumpen PC0. Fyll värmekretsen. Lufta värmesuystemet. Kontrollera systemfilter. Se instruktionsfilmer knappen här nedan.",
  ],
  [
    "5946",
    "Info: Ingen signal från volymflödesgivare TM0 finns. Kontakta installatör.",
  ],
  [
    "5947",
    "Info: Kortslutning i volymflödesgivaren TM0. Kontakta installatör.",
  ],
  [
    "5948",
    "Larm: signal volymströmsens. TM0 utanför det tillåtna området. Kontakta installatör.",
  ],
  [
    "5980",
    "Larm: PWM - Signal ligger utanför det tillåtna området. Kontakta installatör.",
  ],
  [
    "5981",
    "Info: Felaktig löpriktning på kompressorn. Tillfälligt fel. Avvakta.",
  ],
  ["5983", "Larm: Felaktig löpriktning på kompressorn. Kontakta installatör."],
  [
    "5984",
    "Larm: Inget köldmedel i köldmediekretsen. Inget eller nästan inget köldmedie kvar i värmepumpen. Kontakta installatör.",
  ],
  [
    "5987",
    "Larm: Kortsiktigt kraftig överbelastning för kompressormotorn. Kontakta installatör.",
  ],
  ["5988", "Larm: Fel i inverteringsstyrningen MCE. Kontakta installatör."],
  [
    "5989",
    "Larm: Ingen fas mellan inverterings- styrning och kompressormotor. Kontrollera säkringar. Om inget fel på säkringar, kontakta installatör.",
  ],
  [
    "5990",
    "Larm: Överbelastning för kompressormotorn. Kontrollera säkringar. Kontakta elleverantören för en loggad mätning om problemet är återkommande.",
  ],
  [
    "5993",
    "Info: Ingen kommunikation mellan inverterstyrning och huvudstyrenh.. Kontakta installatör.",
  ],
  ["5994", "Info: Lågt tryck i köldbäraren. Kontakta installatör."],
  [
    "6216",
    "Info: Signal från övre varmvatten- temp.givar. TW2 utanför tillåt. områd.. Tillfälligt fel. Avvakta. Om problemet återkommer, kontakta installatör.",
  ],
  [
    "6217",
    "Info: Ingen signal finns från övre varmvattentemp.givare TW2. Tillfälligt fel. Avvakta. Om problemet återkommer, kontakta installatör.",
  ],
  [
    "6218",
    "Larm: Signal övre varmvatten- temp.givar. TW2 utanför tillåt. områd.. Kontakta installatör.",
  ],
  [
    "6219",
    "Info: Underhåll på värmepumpen krävs. Meddelandet visas när värmepumpen varit i drift i 3 respektive 5 år, och syftar till att påminna kunden om garantiservice. Felkod 6219 ges samtidigt som 6220. (Drifttidstimern finns i installatörskortet och återställs därför om kortet byts ut.)",
  ],
  [
    "6220",
    "Info: Utför underhållsservice på värmepumpen. Meddelandet visas när värmepumpen varit i drift i 3 respektive 5 år, för att påminna om garantiservice. Felkod 6219 ges samtidigt som 6220. (Drifttidstimern finns i installatörskortet och återställs därför om kortet byts ut.)",
  ],
]);

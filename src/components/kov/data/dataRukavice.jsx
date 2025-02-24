import { createStats, createImage, createEquipmentItem } from './funkce.js';

  export const rukaviceData = [
    createEquipmentItem(10,'Rukavice (SIL)', './items/23050.png', 'Hydra', {
      RADEK_0: createStats("Od úrovně:", 76, 76, 76, 76, 76, 76, 76, 76, 76, 76),
      RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_1: createStats("Síla:", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"),
      RADEK_2: createStats("Obrana v PvP eventech:", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "9%", "12%", "15%"),
      RADEK_3: createStats("Magický útok/útok zbraní:", "1%", "1%", "1%", "2%", "2%", "3%", "3%", "5%", "7%", "10%"),
      MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_6: createStats("Šance: ", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"),
      RADEK_7: createStats("cena: ", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk"),
      MEZERA_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_8: createStats("Potřebné itemy:", "-", "1x", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"),
      RADEK_9: createStats("", "", "10x", "10x", "10x", "10x", "10x", "10x", "10x", "10x", "10x"),
      RADEK_10: createStats("", "", "20x", "24x", "28x", "32x", "36x", "40x", "44x", "50x", "60x"),
      RADEK_11: createStats("", "", "10x", "", "", "", "", "", "", "", ""),
    }, {
      IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
      IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
      IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
      IMG_7: createImage("", "", "./items/Shuriken.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png"),
      IMG_8: createImage("", "", "./items/Zub Orka.png", "./items/Srdce Atlantídy.png", "./items/Kapka krve.png", "./items/Dračí šupiny.png", "./items/Ohnivý kámen.png", "./items/Ledový kámen.png", "./items/Oxid titaničitý.png", "./items/Šupiny Hydry.png", "./items/Ztracený list.png"),
      IMG_9: createImage("", "", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
      IMG_10: createImage("", "", "./items/Pavoučí noha.png", "", "", "", "", "", "", "", ""),
    }),

      createEquipmentItem(10,'Rukavice (VIT)', './items/23060.png', 'Hydra', {
        RADEK_0: createStats("Od úrovně:", 76, 76, 76, 76, 76, 76, 76, 76, 76, 76),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Vitalita:", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"),
        RADEK_2: createStats("Obrana v PvP eventech:", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "9%", "12%", "15%"),
        RADEK_3: createStats("Magický útok/útok zbraní:", "1%", "1%", "1%", "2%", "2%", "3%", "3%", "5%", "7%", "10%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_6: createStats("Šance: ", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"),
        RADEK_7: createStats("cena: ", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk"),
        MEZERA_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_8: createStats("Potřebné itemy:", "-", "1x", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"),
        RADEK_9: createStats("", "", "10x", "10x", "10x", "10x", "10x", "10x", "10x", "10x", "10x"),
        RADEK_10: createStats("", "", "20x", "24x", "28x", "32x", "36x", "40x", "44x", "50x", "60x"),
        RADEK_11: createStats("", "", "10x", "", "", "", "", "", "", "", ""),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_7: createImage("", "", "./items/Shuriken.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png"),
        IMG_8: createImage("", "", "./items/Zub Orka.png", "./items/Srdce Atlantídy.png", "./items/Kapka krve.png", "./items/Dračí šupiny.png", "./items/Ohnivý kámen.png", "./items/Ledový kámen.png", "./items/Oxid titaničitý.png", "./items/Šupiny Hydry.png", "./items/Ztracený list.png"),
        IMG_9: createImage("", "", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
        IMG_10: createImage("", "", "./items/Pavoučí noha.png", "", "", "", "", "", "", "", ""),
      }),

      createEquipmentItem(10,'Rukavice (POH)', './items/23070.png', 'Hydra', {
        RADEK_0: createStats("Od úrovně:", 76, 76, 76, 76, 76, 76, 76, 76, 76, 76),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Pohyblivost:", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"),
        RADEK_2: createStats("Obrana v PvP eventech:", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "9%", "12%", "15%"),
        RADEK_3: createStats("Magický útok/útok zbraní:", "1%", "1%", "1%", "2%", "2%", "3%", "3%", "5%", "7%", "10%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_6: createStats("Šance: ", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"),
        RADEK_7: createStats("cena: ", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk"),
        MEZERA_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_8: createStats("Potřebné itemy:", "-", "1x", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"),
        RADEK_9: createStats("", "", "10x", "10x", "10x", "10x", "10x", "10x", "10x", "10x", "10x"),
        RADEK_10: createStats("", "", "20x", "24x", "28x", "32x", "36x", "40x", "44x", "50x", "60x"),
        RADEK_11: createStats("", "", "10x", "", "", "", "", "", "", "", ""),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_7: createImage("", "", "./items/Shuriken.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png"),
        IMG_8: createImage("", "", "./items/Zub Orka.png", "./items/Srdce Atlantídy.png", "./items/Kapka krve.png", "./items/Dračí šupiny.png", "./items/Ohnivý kámen.png", "./items/Ledový kámen.png", "./items/Oxid titaničitý.png", "./items/Šupiny Hydry.png", "./items/Ztracený list.png"),
        IMG_9: createImage("", "", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
        IMG_10: createImage("", "", "./items/Pavoučí noha.png", "", "", "", "", "", "", "", ""),
      }),

      createEquipmentItem(10,'Rukavice (INT)', './items/23080.png', 'Hydra', {
        RADEK_0: createStats("Od úrovně:", 76, 76, 76, 76, 76, 76, 76, 76, 76, 76),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("Inteligence:", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"),
        RADEK_2: createStats("Obrana v PvP eventech:", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "9%", "12%", "15%"),
        RADEK_3: createStats("Magický útok/útok zbraní:", "1%", "1%", "1%", "2%", "2%", "3%", "3%", "5%", "7%", "10%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_6: createStats("Šance: ", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"),
        RADEK_7: createStats("cena: ", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk", "200kk"),
        MEZERA_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_8: createStats("Potřebné itemy:", "-", "1x", "+0", "+0", "+0", "+0", "+0", "+0", "+0", "+0"),
        RADEK_9: createStats("", "", "10x", "10x", "10x", "10x", "10x", "10x", "10x", "10x", "10x"),
        RADEK_10: createStats("", "", "20x", "24x", "28x", "32x", "36x", "40x", "44x", "50x", "60x"),
        RADEK_11: createStats("", "", "10x", "", "", "", "", "", "", "", ""),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_7: createImage("", "", "./items/Shuriken.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png"),
        IMG_8: createImage("", "", "./items/Zub Orka.png", "./items/Srdce Atlantídy.png", "./items/Kapka krve.png", "./items/Dračí šupiny.png", "./items/Ohnivý kámen.png", "./items/Ledový kámen.png", "./items/Oxid titaničitý.png", "./items/Šupiny Hydry.png", "./items/Ztracený list.png"),
        IMG_9: createImage("", "", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
        IMG_10: createImage("", "", "./items/Pavoučí noha.png", "", "", "", "", "", "", "", ""),
      }),
      
      createEquipmentItem(10,'Hadí rukavice', 'x', 'Karim - NPC v mapě Dva světy Nilu', {
        RADEK_0: createStats("Od úrovně:", 121, 121, 121, 121, 121, 121, 121, 121, 121, 121),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_1: createStats("VIT,INT,SIL,POH:", "+11", "x", "x", "x", "x", "x", "x", "x", "x", "+15"),
        RADEK_2: createStats("Obrana v PvP eventech:", "31%", "x", "x", "x", "x", "x", "x", "x", "x", "35%"),
        RADEK_3: createStats("Magický útok/útok zbraní(PvM):", "5%", "x", "x", "x", "x", "x", "x", "x", "x", "10%"),        
        RADEK_4: createStats("Šance na návrat z podsvětí:", "1%", "x", "x", "x", "x", "x", "x", "x", "x", "10%"),
        RADEK_5: createStats("Magický útok/útok zbraní:", "6%", "x", "x", "x", "x", "x", "x", "x", "x", "10%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_6: createStats("Šance: ", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"),
        RADEK_7: createStats("cena: ", "250kkk", "20kkk", "30kkk", "40kkk", "50kkk", "60kkk", "70kkk", "80kkk", "90kkk", "100kkk"),
        MEZERA_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_8: createStats("Potřebné itemy:", "1250x", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9"),
        RADEK_9: createStats("",                "10x", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9"),
        RADEK_10: createStats("",               "10x Stínový klenot", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9"),
        RADEK_11: createStats("",               "50x Hadí hlava", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9"),
        RADEK_12: createStats("",               "", "", "", "", "", "", "", "", "", ""),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XXX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_7: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_8: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_9: createImage("", "./items/Božské ovoce.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png", "./items/23050.png"),
        IMG_10: createImage("", "./items/Dračí kovadlina.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png", "./items/23060.png"),
        IMG_11: createImage("", "", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png", "./items/23070.png"),
        IMG_12: createImage("", "", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png", "./items/23080.png"),
        IMG_13: createImage("", "", "", "", "", "", "", "", "", "", ""),
      }),

  ];
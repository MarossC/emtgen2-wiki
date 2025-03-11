import { createStats, createImage, createEquipmentItem } from './funkce.js';

  export const botyData = [
    createEquipmentItem(10, 'Kožené holinky', './items/15080.png', 'Tmavý Arahan', {
        RADEK_0: createStats("Od úrovně:", 29, 29, 29, 29, 29, 29, 29, 29, 29, 29),
        RADEK_XX: createStats(),
        RADEK_1: createStats("Obrana", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3", "+3"),
        RADEK_2: createStats("Rychlost pohybu:", "+3%", "+4%", "+5%", "+6%", "+8%", "+10%", "12%", "+16%", "+18%", "+20%"),
        RADEK_3: createStats("Odolnost proti šípům:", "+2%", "+4%", "+6%", "+8%", "+10%", "+12%", "14%", "+16%", "+18%", "+20%"),
        MEZERA_X: createStats(),
        RADEK_4: createStats("Šance: ", "-", "100%", "100%", "100%", "100%", "90%", "80%", "70%", "55%", "40%"),
        RADEK_5: createStats("cena: ", "-", "6k", "12k", "25k", "50k", "100k", "200k", "300k", "450k", "750k"),
        MEZERA_Y: createStats(),
        RADEK_6: createStats("Potřebné itemy:", "", "", "", "", "", "", "", "1x", "2x", "3x"),
        RADEK_7: createStats("", "", "", "", "", "", "", "", "", "", "1x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_6: createImage("", "", "", "", "", "", "", "", "./items/Rybí kůstky.png", "./items/Rybí kůstky.png", "./items/Rybí kůstky.png"),
        IMG_7: createImage("", "", "", "", "", "", "", "", "", "", "./items/Shuriken.png"),
    }),
    
    createEquipmentItem(10,'Boty extáze', './items/15160.png', 'Pes útrapy', {
        RADEK_0: createStats("Od úrovně:", 47, 47, 47, 47, 47, 47, 47, 47, 47, 47),
        RADEK_XX: createStats(),
        RADEK_1: createStats("Obrana", "+5", "+5", "+5", "+5", "+5", "+5", "+5", "+5", "+5", "+5"),
        RADEK_2: createStats("Rychlost pohybu:", "+5%", "+6%", "+7%", "+8%", "+9%", "+12%", "15%", "+18%", "+20%", "+25%"),
        RADEK_3: createStats("Rychlost kouzla:", "+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "7%", "+8%", "+9%", "+10%"),
        MEZERA_X: createStats(),
        RADEK_4: createStats("Šance: ", "-", "100%", "100%", "100%", "90%", "80%", "60%", "50%", "40%", "30%"),
        RADEK_5: createStats("cena: ", "-", "500k", "1kk", "2kk", "3,5kk", "5kk", "7,5kk", "10kk", "12,5kk", "15kk"),
        MEZERA_Y: createStats(),
        RADEK_6: createStats("Potřebné itemy:", "-", "4x", "6x", "8x", "10x", "12x", "14x", "1x", "2x", "1x"),
        RADEK_7: createStats("", "", "", "", "", "", "", "", "3x", "6x", "8x"),
        RADEK_8: createStats("", "", "", "", "", "", "", "", "3x", "6x", "8x"),
        RADEK_9: createStats("", "", "", "", "", "", "", "", "3x", "6x", "8x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_6: createImage("", "", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Bílá perla.png", "./items/Bílá perla.png", "./items/Pavoučí noha.png"),
        IMG_7: createImage("", "", "", "", "", "", "", "", "./items/Prastaré texty.png", "./items/Prastaré texty.png", "./items/Prastaré texty.png"),
        IMG_8: createImage("", "", "", "", "", "", "", "", "./items/Krvavá maska.png", "./items/Krvavá maska.png", "./items/Krvavá maska.png"),
        IMG_9: createImage("", "", "", "", "", "", "", "", "./items/Ostří meče.png", "./items/Ostří meče.png", "./items/Ostří meče.png"),
      }),
    
      createEquipmentItem(10,'Fénické boty', './items/15200.png', 'Silný vrchní ork', {
        RADEK_0: createStats("Od úrovně:", 55, 55, 55, 55, 55, 55, 55, 55, 55, 55),
        RADEK_XX: createStats(),
        RADEK_1: createStats("Obrana", "+5", "+5", "+5", "+5", "+5", "+5", "+5", "+5", "+5", "+5"),
        RADEK_2: createStats("Rychlost pohybu:", "+5%", "+6%", "+7%", "+8%", "+9%", "+12%", "15%", "+18%", "+20%", "+25%"),
        RADEK_3: createStats("Šance odvrátit útok:", "+1%", "+2%", "+3%", "+4%", "+5%", "+6%", "7%", "+8%", "+9%", "+10%"),
        MEZERA_X: createStats(),
        RADEK_4: createStats("Šance: ", "-", "100%", "100%", "100%", "90%", "80%", "65%", "50%", "40%", "35%"),
        RADEK_5: createStats("cena: ", "-", "1,5kk", "3,5kk", "5,5kk", "7kk", "8,5kk", "10kk", "12,5kk", "15kk", "18kk"),
        MEZERA_Y: createStats(),
        RADEK_6: createStats("Potřebné itemy:", "-", "4x", "6x", "8x", "10x", "12x", "14x", "1x", "2x", "1x"),
        RADEK_7: createStats("", "", "", "", "", "", "", "", "3x", "6x", "8x"),
        RADEK_8: createStats("", "", "", "", "", "", "", "", "3x", "6x", "8x"),
        RADEK_9: createStats("", "", "", "", "", "", "", "", "3x", "6x", "8x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_6: createImage("", "", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Runa I.png", "./items/Bílá perla.png", "./items/Bílá perla.png", "./items/Pavoučí noha.png"),
        IMG_7: createImage("", "", "", "", "", "", "", "", "./items/Prastaré texty.png", "./items/Prastaré texty.png", "./items/Prastaré texty.png"),
        IMG_8: createImage("", "", "", "", "", "", "", "", "./items/Krvavá maska.png", "./items/Krvavá maska.png", "./items/Krvavá maska.png"),
        IMG_9: createImage("", "", "", "", "", "", "", "", "./items/Ostří meče.png", "./items/Ostří meče.png", "./items/Ostří meče.png"),
      }),
    
      createEquipmentItem(10,'Ostnaté boty', './items/15410.png', 'Beran-Setaou', {
        RADEK_0: createStats("Od úrovně:", 75, 75, 75, 75, 75, 75, 75, 75, 75, 75),
        RADEK_XX: createStats(),
        RADEK_1: createStats("Obrana", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10", "+10"),
        RADEK_2: createStats("Rychlost pohybu:", "+3%", "+4%", "+5%", "+6%", "+8%", "+10%", "12%", "+16%", "+18%", "+20%"),
        RADEK_3: createStats("Silný proti příšerám:", "1%", "1%", "2%", "2%", "3%", "3%", "4%", "5%", "7%", "10%"),
        MEZERA_X: createStats(),
        RADEK_4: createStats("Šance: ", "-", "100%", "90%", "80%", "70%", "60%", "40%", "30%", "25%", "20%"),
        RADEK_5: createStats("cena: ", "-", "10kk", "15kk", "20kk", "25kk", "30kk", "35kk", "40kk", "45kk", "50kk"),
        MEZERA_Y: createStats(),
        RADEK_6: createStats("Potřebné itemy:", "-", "10x", "12x", "14x", "16x", "18x", "20x", "30x", "30x", "1x"),
        RADEK_7: createStats("", "", "", "", "", "", "", "", "1x", "1x", "1x"),
        RADEK_8: createStats("", "", "", "", "", "", "", "", "1x", "2x", "4x"),
        RADEK_9: createStats("", "", "", "", "", "", "", "", "5x", "1x", "2x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_6: createImage("", "", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Runa II.png", "./items/Srdce Atlantídy.png"),
        IMG_7: createImage("", "", "", "", "", "", "", "", "./items/Dračí šupiny.png", "./items/Dračí šupiny.png", "./items/Dračí šupiny.png"),
        IMG_8: createImage("", "", "", "", "", "", "", "", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
        IMG_9: createImage("", "", "", "", "", "", "", "", "./items/Bílá perla.png", "./items/Žlutá perla.png", "./items/Žlutá perla.png"),
      }),
    
      createEquipmentItem(10,'Ohnivé boty', './items/15440.png', 'Překovem z Ostnatých bot', { // last changed 03/02/2025
        RADEK_0: createStats("Od úrovně:", 90, 90, 90, 90, 90, 90, 90, 90, 90, 90),
        RADEK_XX: createStats(),
        RADEK_1: createStats("Obrana", "+17", "+19", "+20", "+22", "+23", "+25", "+26", "+28", "+29", "+32"),
        RADEK_2: createStats("Rychlost pohybu:", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"),
        RADEK_3: createStats("Silný proti příšerám:", "11%", "11%", "11%", "11%", "12%", "12%", "12%", "13%", "16%", "20%"),
        RADEK_4: createStats("Šance odvrátit útok:", "1%", "1%", "1%", "1%", "2%", "2%", "2%", "3%", "4%", "5%"),
        RADEK_5: createStats("Odolnost proti poškození schopností:", "1%", "1%", "1%", "1%", "2%", "2%", "2%", "3%", "3%", "4%"),
        MEZERA_X: createStats(),
        RADEK_6: createStats("Šance: ", "100%", "100%", "80%", "65%", "50%", "40%", "30%", "25%", "20%", "15%"),
        RADEK_7: createStats("cena: ", "500kk", "2kk", "3kk", "4kk", "5kk", "6kk", "7kk", "8kk", "9kk", "10kk"),
        MEZERA_Y: createStats(),
        RADEK_8: createStats("Potřebné itemy:", "15x", "5x", "5x", "10x", "10x", "15x", "15x", "20x", "20x", "20x"),
        RADEK_9: createStats("", "15x", "", "", "", "", "", "", "2x", "4x", "7x"),
        RADEK_10: createStats("", "40x", "", "", "", "", "", "", "1x", "1x", "2x"),
        RADEK_11: createStats("", "5x", "", "", "", "", "", "", "4x", "5x", "7x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_7: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_8: createImage("", "./items/Ohnivý kámen.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png"),
        IMG_9: createImage("", "./items/Ledový kámen.png", "", "", "", "", "", "", "./items/Ohnivý kámen.png", "./items/Ohnivý kámen.png", "./items/Ohnivý kámen.png"),
        IMG_10: createImage("", "./items/Plán zbroje.png", "", "", "", "", "", "", "./items/Dračí šupiny.png", "./items/Dračí šupiny.png", "./items/Dračí šupiny.png"),
        IMG_11: createImage("", "./items/Dračí šupiny.png", "", "", "", "", "", "", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
      }),
    
      createEquipmentItem(10,'Boty oceánu', './items/15450.png', 'Překovem z ohnivých bot', { // last changed 03/02/2025
        RADEK_0: createStats("Od úrovně:", 105, 105, 105, 105, 105, 105, 105, 105, 105, 105),
        RADEK_XX: createStats(),
        RADEK_1: createStats("Obrana", "+17", "+19", "+20", "+22", "+23", "+25", "+26", "+28", "+29", "+32"),
        RADEK_2: createStats("Rychlost pohybu:", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%"),
        RADEK_3: createStats("Silný proti příšerám:", "21%", "21%", "22%", "22%", "23%", "23%", "24%", "25%", "27%", "30%"),
        RADEK_4: createStats("Šance odvrátit útok:", "6%", "6%", "6%", "6%", "7%", "7%", "7%", "8%", "9%", "10%"),
        RADEK_5: createStats("Odolnost proti poškození schopností:", "5%", "5%", "5%", "5%", "6%", "6%", "6%", "7%", "7%", "8%"),
        MEZERA_X: createStats(),
        RADEK_6: createStats("Šance: ", "100%", "1%", "1%", "1%", "1%", "30%", "25%", "20%", "15%", "10%"),
        RADEK_7: createStats("cena: ", "2kkk", "1,5kkk", "1,5kkk", "1,5kkk", "1,5kkk", "150kk", "150kk", "150kk", "150kk", "150kk"),
        MEZERA_Y: createStats(),
        RADEK_8: createStats("Potřebné itemy:", "+9", "100x", "100x", "100x", "100x", "20x", "20x", "20x", "20x", "20x"),
        RADEK_9: createStats("", "10x", "200x", "200x", "200x", "200x", "50x", "75x", "4x", "6x", "7x"),
        RADEK_10: createStats("", "10x", "100x", "100x", "100x", "100x", "50x", "75x", "4x", "6x", "8x"),
        RADEK_11: createStats("", "10x", "25x", "25x", "25x", "25x", "50x", "75x", "4x", "7x", "10x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_7: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_8: createImage("", "./items/15440.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png", "./items/Runa IV.png"),
        IMG_9: createImage("", "./items/Oxid titaničitý.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Runa III.png", "./items/Niť zloby.png", "./items/Niť zloby.png", "./items/Kámen kováře.png", "./items/Kámen kováře.png", "./items/Kámen kováře.png"),
        IMG_10: createImage("", "./items/Šupiny Hydry.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Niť soumraku.png", "./items/Niť soumraku.png", "./items/Šupiny Hydry.png", "./items/Šupiny Hydry.png", "./items/Šupiny Hydry.png"),
        IMG_11: createImage("", "./items/Ztracený list.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Niť žáru.png", "./items/Niť žáru.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
      }),
    
      createEquipmentItem(10,'Boty Zarytosti', './items/11977.png', 'Překovem z bot oceánu', { // last changed 03/02/2025
        RADEK_0: createStats("Od úrovně:", 115, 115, 115, 115, 115, 115, 115, 116, 118, 120),
        RADEK_XX: createStats(),
        RADEK_1: createStats("Obrana", "+17", "+19", "+20", "+22", "+23", "+25", "+26", "+28", "+29", "+32"),
        RADEK_2: createStats("Rychlost pohybu:", "+20%", "+20%", "+20%", "+20%", "+20%", "+20%", "20%", "+20%", "+20%", "+20%"),
        RADEK_3: createStats("Silný proti příšerám:", "31%", "32%", "33%", "34%", "35%", "36%", "38%", "41%", "45%", "50%"),
        RADEK_4: createStats("Šance odvrátit útok:", "10%", "10%", "10%", "11%", "11%", "11%", "12%", "13%", "14%", "15%"),
        RADEK_5: createStats("Odolnost proti poškození schopností:", "9%", "9%", "9%", "9%", "10%", "10%", "10%", "11%", "11%", "12%"),
        MEZERA_X: createStats(),
        RADEK_6: createStats("Šance: ", "33%", "1%", "1%", "1%", "1%", "25%", "20%", "15%", "10%", "5%"),
        RADEK_7: createStats("cena: ", "2kkk", "2kkk", "2kkk", "2kkk", "2kkk", "500kk", "500kk", "500kk", "500kk", "500kk"),
        MEZERA_Y: createStats(),
        RADEK_8: createStats("Potřebné předměty:", "25x", "400x", "400x", "400x", "400x", "70x", "60x", "60x", "60x", "60x"),
        RADEK_9: createStats("", "10x", "40x", "40x", "40x", "40x", "10x", "15x", "4x", "7x", "10x"),
        RADEK_10: createStats("", "3x", "300x", "300x", "300x", "300x", "40x", "40x", "50x", "70x", "90x"),
        RADEK_11: createStats("", "4x", "4x", "4x", "4x", "4x", "1x", "1x", "2x", "4x", "6x"),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_7: createImage("", "", "", "", "", "", "", "", "", "", ""),
        MEZERA_Y: createStats(),
        IMG_8: createImage("","./items/Kámen kováře.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png",),
        IMG_9: createImage("", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Kámen kováře.png", "./items/Kámen kováře.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
        IMG_10: createImage("", "./items/Skeletoní lebka.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png"),
        IMG_11: createImage("", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Světlo z jiného světa.png", "./items/Světlo z jiného světa.png", "./items/Světlo z jiného světa.png", "./items/Světlo z jiného světa.png"),
    }),

    createEquipmentItem(10,'Hadí boty', './items/hadi_gear/Hadí boty.png', 'Překov z Bot Zarytosti', { // last changed February 26th, 2025
      RADEK_0: createStats("Od úrovně:", 121, 121, 121, 121, 121, 121, 121, 121, 121, 121),
      RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_1: createStats("Obrana", "+17", "+19", "+20", "+22", "+23", "+25", "+26", "+28", "+29", "+32"),
      RADEK_2: createStats("Šance na návrat z podsvětí:", "+1%", "+1%", "+2%", "+2%", "+3%", "+3%", "+4%", "+5%", "+7%", "+10%"),
      RADEK_3: createStats("Silný proti příšerám:", "+52%", "+53%", "+54%", "+55%", "+56%", "+58%", "+60%", "+64%", "+69%", "+75%"),
      RADEK_4: createStats("Šance odvrátit útok:", "16%", "16%", "16%", "16%", "17%", "17%", "17%", "18%", "19%", "20%"),
      RADEK_5: createStats("Odolnost proti poškození schopností:", "13%", "13%", "13%", "13%", "14%", "14%", "14%", "15%", "15%", "16%"),
      RADEK_6: createStats("Silný proti lidem:", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%", "-25%"),
      MEZERA_X: createStats(),
      RADEK_10: createStats("Šance: ", "100%", "35%", "31%", "27%", "23%", "19%", "15%", "11%", "7%", "3%"),
      RADEK_11: createStats("cena: ", "250kkk", "12,5kkk", "15kkk", "17,5kkk", "20kkk", "22,5kkk", "25kkk", "27,5kkk", "30kkk", "32,5kkk"),
      MEZERA_Y: createStats(),
      RADEK_12: createStats("Potřebné předměty:", "2500x", "500x", "600x", "700x", "800x", "3x", "4x", "4x", "6x", "8x"),
      RADEK_13: createStats("",                    "20x", "5x", "5x", "5x", "5x", "6x", "7x", "8x", "9x", "10x"),
      RADEK_14: createStats("",                   "10x", "150x", "200x", "250x", "300x", "4x", "6x", "8x", "10x", "12x"),
      RADEK_15: createStats("",                   "50x", "20x", "25x", "30x", "45x", "60x", "75x", "100x", "125x", "150x"),
      RADEK_16: createStats("",                   "", "200x", "250x", "300x", "450x", "600x", "750x", "1000x", "1250x", "1500x"),
      RADEK_17: createStats("",                   "", "4x", "4x", "6x", "6x", "8x", "8x", "10x", "10x", "12x"),
      RADEK_18: createStats("",                   "", "", "", "", "", "", "", "", "", "1x"),
    }, {
      IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
      IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
      IMG_10: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_11: createImage("", "", "", "", "", "", "", "", "", "", ""),
      MEZERA_Y: createStats(),
      IMG_12: createImage("",  "./items/Božské ovoce.png",     "./items/Runa V.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png","./items/Stínový klenot.png","./items/Stínový klenot.png","./items/Stínový klenot.png","./items/Stínový klenot.png","./items/Stínový klenot.png",),
      IMG_13: createImage("",  "./items/Dračí kovadlina.png",  "./items/Dračí kovadlina.png", "./items/Dračí kovadlina.png", "./items/Dračí kovadlina.png", "./items/Dračí kovadlina.png", "./items/Dračí kovadlina.png", "./items/Dračí kovadlina.png", "./items/Dračí kovadlina.png", "./items/Dračí kovadlina.png", "./items/Dračí kovadlina.png"),
      IMG_14: createImage("", "./items/Stínový klenot.png",    "./items/Lebka piráta.png", "./items/Lebka piráta.png", "./items/Lebka piráta.png", "./items/Lebka piráta.png", "./items/Prsten bohů egypta.png", "./items/Prsten bohů egypta.png", "./items/Prsten bohů egypta.png", "./items/Prsten bohů egypta.png", "./items/Prsten bohů egypta.png"),
      IMG_15: createImage("", "./items/Hadí hlava.png",       "./items/Hadí hlava.png", "./items/Hadí hlava.png", "./items/Hadí hlava.png", "./items/Hadí hlava.png", "./items/Hadí hlava.png", "./items/Hadí hlava.png", "./items/Hadí hlava.png", "./items/Hadí hlava.png", "./items/Hadí hlava.png"),
      IMG_16: createImage("", "",       "./items/Runa VI.png", "./items/Runa VI.png", "./items/Runa VI.png", "./items/Runa VI.png", "./items/Runa VI.png", "./items/Runa VI.png", "./items/Runa VI.png", "./items/Runa VI.png", "./items/Runa VI.png"),
      IMG_17: createImage("", "",       "./items/Kapka jedu.png", "./items/Kapka jedu.png", "./items/Kapka jedu.png", "./items/Kapka jedu.png", "./items/Kapka jedu.png", "./items/Kapka jedu.png", "./items/Kapka jedu.png", "./items/Kapka jedu.png", "./items/Kapka jedu.png"),
      IMG_18: createImage("", "",       "", "", "", "", "", "", "", "", "./items/Energetické jádro Sfingy.png"),

    }),

    createEquipmentItem(10, "boty_iport", "./items/boty_iport.png", "", {
      RADEK_0: createStats("Od úrovně:", 120, 120, 120, 120, 120, 120, 120, 120, 120, 120),
      RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_1: createStats("Navýšení ZB výbavy", "5%", "5%", "10%", "10%", "15%", "20%", "25%", "30%", "40%", "50%"),
      RADEK_2: createStats("Odolnost proti poš. schopností", "13%", "13%", "13%", "13%", "14%", "14%", "14%", "15%", "15%", "16%"),
      RADEK_3: createStats("Silný proti lidem", "1%", "1%", "2%", "2%", "3%", "4%", "5%", "6%", "8%", "10%"),
      RADEK_4: createStats("Šance odvrátit útok", "21%", "21%", "21%", "21%", "22%", "22%", "22%", "23%", "24%", "25%"),
      MEZERA_X: createStats(),
      RADEK_6: createStats("Šance: ", "XXX%", "XXX%", "XXX%", "XXX%", "XXX%", "XXX%", "XXX%", "XXX%", "XXX%", "XXX%"),
      RADEK_7: createStats("cena: ", "XXXkkk", "XXXkkk", "XXXkkk", "XXXkkk", "XXXkkk", "XXXkk", "XXXkk", "XXXkk", "XXXkk", "XXXkk"),
      MEZERA_Y: createStats(),
      RADEK_8: createStats("Potřebné předměty:", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx"),
      RADEK_9: createStats("", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx"),
      RADEK_10: createStats("", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx"),
      RADEK_11: createStats("", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx", "XXXx"),
    }, {
      IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
      IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_3: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_4: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
      IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_7: createImage("", "", "", "", "", "", "", "", "", "", ""),
      MEZERA_Y: createStats(),
      IMG_8: createImage("","./items/Kámen kováře.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa IV.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png","./items/Runa V.png",),
      IMG_9: createImage("", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Kámen kováře.png", "./items/Kámen kováře.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png", "./items/Plán zbroje.png"),
      IMG_10: createImage("", "./items/Skeletoní lebka.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png", "./items/Božské ovoce.png"),
      IMG_11: createImage("", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Fénixův prapor.png", "./items/Světlo z jiného světa.png", "./items/Světlo z jiného světa.png", "./items/Světlo z jiného světa.png", "./items/Světlo z jiného světa.png"),
  }),

  ];
import { createStats, createImage, createEquipmentItem } from './funkce.js';

  export const prstenData = [
    createEquipmentItem(51, 'Prsten věčnosti', './items/Prsten49.png', 'Lze vylepšit v Jeskyni věčného boje (105Lv+)', {
        RADEK_0: createStats("Silný proti příšerám:", "1%", "1%", "2%", "2%", "3%", "3%", "4%", "4%", "5%", "5%", "6%", "7%", "8%", "9%", "10%", "11%", "12%", "13%", "14%", "15%", "16%", "17%", "18%", "19%", "20%", "21%", "22%", "23%", "24%", "25%", "26%", "27%", "28%", "29%", "30%", "31%", "32%", "33%", "34%", "35%", "36%", "37%", "38%", "39%", "40%", "41%", "42%", "43%", "44%", "45%", "50%"),
        RADEK_XX: createStats("Silný proti kamenům:", "-", "-", "-", "-", "-", "-", "-", "1%", "2%", "3%", "3%", "3%", "4%", "4%", "5%", "5%", "6%", "6%", "7%", "7%", "8%", "8%", "9%", "9%", "10%", "10%", "11%", "11%", "12%", "12%", "13%", "13%", "14%", "14%", "15%", "15%", "16%", "16%", "17%", "17%", "18%", "18%", "19%", "19%", "20%", "20%", "21%", "22%", "23%", "24%", "26%"),
        RADEK_1: createStats("Silný proti bossům:", "-", "-", "-", "-", "-", "-", "-", "1%", "2%", "3%", "3%", "3%", "4%", "4%", "5%", "5%", "6%", "6%", "7%", "7%", "8%", "8%", "9%", "9%", "10%", "10%", "11%", "11%", "12%", "12%", "13%", "13%", "14%", "14%", "15%", "15%", "16%", "16%", "17%", "17%", "18%", "18%", "19%", "19%", "20%", "20%", "21%", "22%", "23%", "24%", "26%"),
        MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
        RADEK_6: createStats("Potřebné zkušenosti:", "-", "200", "400", "600", "800", "1000", "1200", "1400", "1600", "1800", "2000", "2200", "2400", "2600", "2800", "3000", "3200", "3400", "3600", "3800", "4000", "4200", "4400", "4600", "4800", "5000", "5200", "5400", "5600", "5800", "6000", "6200", "6400", "6600", "6800", "7000", "7100", "7200", "7400", "7600", "7800", "8000", "8200", "8400", "8600", "8800", "10000", "12000", "14000", "16000", "18000"),
        MEZERA_XX: createStats("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
      }, {
        IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
        RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
        IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
        IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
      }),
      
    createEquipmentItem(31, 'Elementární prsten', './items/Elementární prsten.png', 'Překov z Prstenu Věčnosti', {
      RADEK_0: createStats("Silný proti příšerám:", "-", "80%", "81%", "82%", "83%", "84%", "85%", "86%", "87%", "88%", "89%", "90%", "91%", "92%", "93%", "94%", "95%", "96%", "97%", "98%", "99%", "100%", "101%", "102%", "103%", "104%", "105%", "106%", "107%", "108%", "109%"),
      RADEK_XX: createStats("Průraznost pirátům:", "-", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"),
      RADEK_1: createStats("Průraznost Hadům:", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"),
      RADEK_2: createStats("Průraznost Egypťanům:", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "10%"),
      MEZERA_X: createStats("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
      RADEK_6: createStats("Potřebné zkušenosti:", "-", "30000", "36000", "39000", "42000", "45000", "48000", "51000", "54000", "57000", "60000", "64000", "68000", "72000", "76000", "80000", "84000", "88000", "92000", "96000", "100000", "105000", "110000", "115000", "120000", "125000", "130000", "135000", "140000", "200000", "0"),
      MEZERA_XX: createStats("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
      RADEK_11: createStats("Potřebné předměty:", "",   "+50"),
      RADEK_12: createStats("", "",                     "20x"),
      RADEK_13: createStats("", "",                     "1000x"),
      RADEK_14: createStats("", "",                     "9999x"),
      RADEK_15: createStats("", "",                     "100x"),

    }, {
      IMG_0: createImage("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_XX: createStats("", "", "", "", "", "", "", "", "", "", ""),
      IMG_1: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_2: createImage("", "", "", "", "", "", "", "", "", "", ""),
      RADEK_X: createStats("", "", "", "", "", "", "", "", "", "", ""),
      IMG_5: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_6: createImage("", "", "", "", "", "", "", "", "", "", ""),
      IMG_11: createImage("", "","./items/Prsten věčnosti.png", "", "", "", "", "", "", "", "", ""),
      IMG_12: createImage("", "","./items/Dračí kovadlina.png", "", "", "", "", "", "", "", "", ""),
      IMG_13: createImage("", "","./items/Lebka piráta.png", "", "", "", "", "", "", "", "", ""),
      IMG_14: createImage("", "","./items/Ledová runa s aurou.png", "", "", "", "", "", "", "", "", ""),
      IMG_15: createImage("", "","./items/Začarovat prsten.png", "", "", "", "", "", "", "", "", ""),

    }),
      
  ];
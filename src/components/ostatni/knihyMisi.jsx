import React, { useState, useEffect } from 'react';
import '../mapy/mapy.css';
import MapComponent2 from './knihy_component2';
import '../kov/vybava';
import 'animate.css';
import { Container, Box } from '@mui/material';

const KnihyMisi = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const loot = [
    {
      nazev: "Truhla hrdinů (začátečník)",
      imgSrc: "",
      imageSrc: "https://img.m2icondb.com/50109.png",
      imgIcon: "./imgs/m1.png",
      pozadi: "./imgs/m1.png",
      dostupneOd: "20",
      cotoje:"Mapy",
      pochazi: [
        { imgSrc: 'https://img.m2icondb.com/50307.png', text: 'Kniha misí (lehká)' },
      ],
      metins: [
        { imgSrc: '', text: 'Údolí orků [Lv 1]' },
        { imgSrc: '', text: 'Poušť Yongbi [Lv 1]' },
        { imgSrc: '', text: 'Hora Sohan [Lv 1]' },
        { imgSrc: '', text: 'Chrám Hwang [Lv 40]' },
      ],
      dropItems: [
        { imgSrc: './items/Začarovat předmět.png', ks: '200' },
        { imgSrc: './items/Shuriken.png', ks: '' },
        { imgSrc: './items/Zub Orka.png', ks: '' },
        { imgSrc: './items/Pavoučí noha.png', ks: '' },
        { imgSrc: './items/Rybí kůstky.png', ks: '10' },
        { imgSrc: './items/Biologovy poznámky.png', ks: '4'},
        { imgSrc: './items/Prastaré texty.png', ks: '90' },
        { imgSrc: './items/Krvavá maska.png', ks: '90' },
        { imgSrc: './items/Ostří meče.png', ks: '90' },
        { imgSrc: './items/Zelený lektvar (V).png', ks: '15' },
        { imgSrc: './items/Proteinová tyčinka.png', ks: '' },
        //{ imgSrc: './items/Začarovat talisman.png', ks: '2' },
      ]
    },
    {
      nazev: "Truhla hrdinů (pokročilý)",
      imgSrc: "",
      imageSrc: "https://img.m2icondb.com/50113.png",
      imgIcon: "./imgs/m1.png",
      pozadi: "./imgs/m1.png",
      dostupneOd: "65",
      cotoje:"Mapy",
      pochazi: [
        { imgSrc: 'https://img.m2icondb.com/50308.png', text: 'Kniha misí (standardní)' },
      ],
      metins: [
        { imgSrc: '', text: 'Hora Sohan [Lv 1]' },
        { imgSrc: '', text: 'Ohnivá země [Lv 1]' },
        { imgSrc: '', text: 'Červený les [Lv 65]' },
      ],
      dropItems: [
        { imgSrc: './items/Začarovat předmět.png', ks: '400' },
        { imgSrc: './items/Srdce Atlantídy.png', ks: '2' },
        { imgSrc: './items/Kapka krve.png', ks: '4' },
        { imgSrc: './items/Bílá perla.png', ks: '20' },
        { imgSrc: './items/Biologovy poznámky.png', ks: '14'},
        { imgSrc: './items/Prastaré texty.png', ks: '120' },
        { imgSrc: './items/Krvavá maska.png', ks: '120' },
        { imgSrc: './items/Ostří meče.png', ks: '120' },
        { imgSrc: './items/Zelený lektvar (V).png', ks: '20' },
        { imgSrc: './items/Proteinová tyčinka.png', ks: '' },
        { imgSrc: './items/Dračí šupiny.png', ks: '4' },
        //{ imgSrc: './items/Začarovat talisman.png', ks: '4' },
      ]
    },
    {
      nazev: "Truhla hrdinů (náročný)",
      imgSrc: "",      
      imageSrc: "https://img.m2icondb.com/50111.png",
      imgIcon: "./imgs/m1.png",
      pozadi: "./imgs/m1.png",
      dostupneOd: "90",
      cotoje:"Mapy",
      pochazi: [
        { imgSrc: 'https://img.m2icondb.com/50309.png', text: 'Kniha misí (těžká)' },
      ],
      metins: [
        { imgSrc: '', text: 'Bouřné hory [Lv 90]' },
        { imgSrc: '', text: 'Nefritový záliv [Lv 90]' },
        { imgSrc: '', text: 'Záliv dračího ohně [Lv 90]' },
      ],
      dropItems: [
        { imgSrc: './items/Začarovat předmět.png', ks: '1000' },
        { imgSrc: './items/Ohnivý kámen.png', ks: '4' },
        { imgSrc: './items/Ledový kámen.png', ks: '4' },
        { imgSrc: './items/Biologovy poznámky.png', ks: '24'},
        { imgSrc: './items/Prastaré texty.png', ks: '180' },
        { imgSrc: './items/Krvavá maska.png', ks: '180' },
        { imgSrc: './items/Ostří meče.png', ks: '180' },
        { imgSrc: './items/Elixír vylepšování.png', ks: '' },
        { imgSrc: './items/Proteinová tyčinka.png', ks: '' },
        //{ imgSrc: './items/Začarovat talisman.png', ks: '8' },
      ]
    },
    {
      nazev: "Truhla hrdinů (expert)",
      imgSrc: "",
      imageSrc: "./items/Truhla hrdinů (expert).png",
      imgIcon: "./imgs/m1.png",
      pozadi: "./imgs/m1.png",
      dostupneOd: "105",
      cotoje:"Mapy",
      pochazi: [
        { imgSrc: 'https://img.m2icondb.com/50310.png', text: 'Kniha misí (expert)' },
      ],
      metins: [
        { imgSrc: '', text: 'Zakletý les [Lv 105]' },
        { imgSrc: '', text: 'Ostrov přeludů [Lv 115]' },
      ],
      dropItems: [
        { imgSrc: './items/Začarovat předmět.png', ks: '2000' },
        { imgSrc: './items/Oxid titaničitý.png', ks: '4' },
        { imgSrc: './items/Šupiny hydry.png', ks: '4' },
        { imgSrc: './items/Ztracený list.png', ks: '4' },
        { imgSrc: './items/Skeletoní lebka.png', ks: '2' },
        { imgSrc: './items/Fénixův prapor.png', ks: '2' },
        { imgSrc: './items/Světlo z jiného světa.png', ks: '2' },
        { imgSrc: './items/Biologovy poznámky.png', ks: '24'},
        { imgSrc: './items/Prastaré texty.png', ks: '240' },
        { imgSrc: './items/Krvavá maska.png', ks: '240' },
        { imgSrc: './items/Ostří meče.png', ks: '240' },
        { imgSrc: './items/Spec. Elixír vylepšování.png', ks: '' },
        { imgSrc: './items/Proteinová tyčinka.png', ks: '' },
        //{ imgSrc: './items/Začarovat talisman.png', ks: '16' },
        { imgSrc: './items/Dračí plamen.png', ks: '' },
        { imgSrc: './items/Starověký svitek.png', ks: '15' },
        { imgSrc: './items/Temná perla.png', ks: '10' },
        { imgSrc: './items/Pirátská mince.png', ks: '' },

      ]
    },
    {
      nazev: "Truhla hrdinů (Nekompromisní)",
      imgSrc: "",
      imageSrc: "./items/Truhla hrdinů (Nekompromisní).png",
      imgIcon: "./imgs/m1.png",
      pozadi: "./imgs/m1.png",
      dostupneOd: "121",
      cotoje:"Mapy",
      pochazi: [
        { imgSrc: 'https://img.m2icondb.com/50330.png', text: 'Kniha misí (Nekompromisní)' },
      ],
      metins: [
        { imgSrc: '', text: 'Dva Světy Nilu [Lv 121]' },
      ],
      dropItems: [
        { imgSrc: './items/Začarovat předmět.png', ks: '5000' },
        { imgSrc: './items/Kapka jedu.png', ks: '2' },
        { imgSrc: './items/Prsten bohů egypta.png', ks: '2' },
        { imgSrc: './items/Kodex Faraona.png', ks: '4' },
        { imgSrc: './items/Skeletoní lebka.png', ks: '4' },
        { imgSrc: './items/Fénixův prapor.png', ks: '4' },
        { imgSrc: './items/Světlo z jiného světa.png', ks: '4' },
        { imgSrc: './items/Biologovy poznámky.png', ks: '24'},
        { imgSrc: './items/Prastaré texty.png', ks: '300' },
        { imgSrc: './items/Krvavá maska.png', ks: '300' },
        { imgSrc: './items/Ostří meče.png', ks: '300' },
        { imgSrc: './items/Spec. elixír vylepšování.png', ks: '' },
        { imgSrc: './items/Proteinová tyčinka.png', ks: '' },
        //{ imgSrc: './items/Začarovat talisman.png', ks: '24' },
        { imgSrc: './items/Dračí plamen.png', ks: '' },
        { imgSrc: './items/Starověký svitek.png', ks: '15' },
        { imgSrc: './items/Temná perla.png', ks: '10' },
        { imgSrc: './items/Pirátská mince.png', ks: '' },
        { imgSrc: './items/Hadí hlava.png', ks: '10' },

      ]
    },
  ];

  const switchMap = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const detailElement = document.querySelector('.celek');
    if (detailElement) {
      detailElement.classList.remove('animate__animated');
      void detailElement.offsetWidth;
      detailElement.classList.add('animate__animated');
    }
  }, [activeIndex]);

  return (
    <Container className='maindung jenprototo'>
    <div>
      <Box className="box">
        {loot.map((item, index) => (
          <div key={index} className={`boxicek ${index === activeIndex ? 'selected' : ''}`} onClick={() => switchMap(index)}>
            <img src={item.imageSrc} alt={item.nazev} title={item.nazev} className="vybava-image" />
          </div>
        ))}
      </Box>

  <MapComponent2 {...loot[activeIndex]} />
    </div>
    </Container>
  );
};

export default KnihyMisi;
 
import { createSlice } from "@reduxjs/toolkit";


export const cardData = createSlice({
  name: "cardData",
  initialState: {
    애니멀노트: [
        {
          filterCode: 'animal',
          noteTitle: '1 Animal Note',
          description: '동물의 향에서 유래한 묵직한 향조로, 다른 향조와 밸런스를 맞추면 고급스러우면서도 관능적인 느낌을 자아냅니다.',
          img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115418.671628000/note_01.jpg',
          modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-01.png',
        }
    ],
    우디노트: [
        {
          filterCode: 'woody',
          noteTitle: '2 Woody Note',
          description: '나무나 목재에서 나는 담백한 향조로, 무게감 있게 향의 중심을 잡아주어 차분하고 고급스러운 향을 연출합니다.',
          img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115430.663902000/note_02.jpg',
          modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-02.png',
        }
    ],
    그린노트: [
        {
          filterCode: 'herbal',
          noteTitle: '3 Herbal & Green Note',
          description: '라벤더 등 허브 향이나 풀잎을 비볐을 때 나는 신선한 향조로, 프레시한 이미지를 표현하며 자연의 푸릇한 향을 느낄 수 있습니다.',
          img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115440.399780000/note_03.jpg',
          modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-03.png',
        }
    ],
    플로럴노트: [
        {
          filterCode: 'floral',
          noteTitle: '4 Floral Note',
          description: '꽃에서 나는 향긋한 향조로, 꽃에 따라 우아하고 클래식하거나 관능적인 향으로 연출되어 향을 표현할 때 가장 중요한 노트 중 하나입니다.',
          img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115450.391334000/note_04.jpg',
          modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-04.png',
        }
    ],
    모씨노트: [
        {
          filterCode: 'mossy',
          noteTitle: '5 Mossy Note',
          description: '우거진 숲속의 촉촉하게 젖은 이끼 향조로, 프레시한 그린이 아닌 다운된 그린을 연상시킵니다. 가볍게 표현되는 노트의 향을 차분하게 만들어주어 그윽한 분위기를 연출합니다.',
          img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115459.659484000/note_05.jpg',
          modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-05.png',
        }
    ],
    시트러스노트: [
        {
          filterCode: 'citrus',
          noteTitle: '6 Citrus Note',
          description: '감귤 계열의 상큼한 향조로, 향수의 첫인상을 표현하는 데 주로 사용되는 향입니다. 다운된 기분을 리프레시 시켜주며, 다크해질 수 있는 향을 기분 좋게 끌어올려 줍니다.',
          img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115508.267742000/note_06.jpg',
          modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-06.png',
        }
    ],
    프루티노트: [
        {
          filterCode: 'Fruity',
          noteTitle: '7 Fruity Note',
          description: '감귤 계열의 향을 제외한 모든 달콤한 과일 향조로, 통통 튀는 이미지를 표현하거나 향에 변주를 주기 위해 사용합니다.',
          img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115518.61346000/note_07.jpg',
          modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-07.png',
        }
    ],
    파우더리노트: [
        {
          filterCode: 'powdery',
          noteTitle: '8 Watery & Powdery Note',
          description: '물이나 바다, 파우더 가루의 부드러운 향조로, 사용되는 향료에 따라 투명하거나 묵직한 느낌을 표현합니다.',
          img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115528.995515000/note_08.jpg',
          modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-08.png',
        }
    ],
    스페셜노트: [
        {
          filterCode: 'special',
          noteTitle: '9 Special Note',
          description: '향에 포인트를 줄 수 있는 향조로, 꿀, 진저처럼 개성을 유지하면서도 조화를 이루어내는 향기나 향신료의 스파이시한 향기 등 유니크한 향을 연출합니다.',
          img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115537.903230000/note_09.jpg',
          modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-09.png',
        }
    ],
  }
})
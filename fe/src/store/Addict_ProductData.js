import { createSlice } from '@reduxjs/toolkit';

export let productData = createSlice({
  name: "product",
  initialState: {
    웜애프터눈: [
        {
          name: '[NEW] 웜 애프터눈',
          discount: '63,300원',
          price: '53,550원',
          volume: '50ml',
          liquid: true,
          note: '따스한 무화과 | 야생화 | 머스크',
          filterCode: 'herbal',
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/170827.242331000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%9B%9C%EC%95%A0%ED%94%84%ED%84%B0%EB%88%88%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/170830.372873000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%9B%9C%EC%95%A0%ED%94%84%ED%84%B0%EB%88%88%2002(hover).jpg',
        }
    ],
    보이드우드: [
        {
          name: '보이드 우드',
          discount: '63,300원',
          price: '53,550원',
          volume: '50ml',
          liquid: true,
          note: '촉촉한 잎사귀 | 자스민 | 스모키 우드',
          filterCode: 'herbal',
          bestCode: true,
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161734.115243000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%B3%B4%EC%9D%B4%EB%93%9C%EC%9A%B0%EB%93%9C%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161739.943047000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%B3%B4%EC%9D%B4%EB%93%9C%EC%9A%B0%EB%93%9C%2002(hover).jpg',
        }
    ],
    더퍼스트: [
        {
          name: '더 퍼스트',
          discount: '63,300원',
          price: '53,550원',
          volume: '50ml',
          liquid: true,
          note: '릴리 | 일랑 일랑 | 화이트 머스크',
          filterCode: 'floral',
          bestCode: true,
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161611.48149000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%8D%94%ED%8D%BC%EC%8A%A4%ED%8A%B8%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161613.123111000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%8D%94%ED%8D%BC%EC%8A%A4%ED%8A%B8%2002(hover).jpg',
        }
    ],
    잇더피치: [
        {
          name: '잇 더 피치',
          discount: '63,300원',
          price: '53,550원',
          volume: '50ml',
          liquid: true,
          note: '풋사과 | 복숭아 과즙 | 샌달우드',
          filterCode: 'fruity',
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161411.756730000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%9E%87%EB%8D%94%ED%94%BC%EC%B9%98%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161414.822744000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%9E%87%EB%8D%94%ED%94%BC%EC%B9%98%2002(hover).jpg',
        }
    ],
    블랑드블룸: [
        {
          name: '블랑 드 블룸',
          discount: '63,300원',
          price: '53,550원',
          volume: '50ml',
          liquid: true,
          note: '핑크 페퍼 | 화이트 로즈 | 아이리스',
          filterCode: 'special',
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161901.477834000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%B8%94%EB%9E%91%EB%93%9C%EB%B8%94%EB%A3%B8%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161903.937238000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%B8%94%EB%9E%91%EB%93%9C%EB%B8%94%EB%A3%B8%2002(hover).jpg',
        }
    ],
    필더베르가못: [
        {
          name: '필 더 베르가못',
          discount: '63,300원',
          price: '53,550원',
          volume: '50ml',
          liquid: true,
          note: '청량한 베르가못 | 미모사 | 시더우드',
          filterCode: 'citrus',
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/162611.417626000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%95%84%EB%8D%94%EB%B2%A0%EB%A5%B4%EA%B0%80%EB%AA%BB%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/162613.466902000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%95%84%EB%8D%94%EB%B2%A0%EB%A5%B4%EA%B0%80%EB%AA%BB%2002(hover).jpg',
        }
    ],
    네이키드와일드플라워: [
        {
          name: '[NEW] 네이키드 와일드 플라워 402',
          discount: '38,000원',
          price: '32,300원',
          volume: '30ml',
          solid: true,
          note: '부드러운 야생화',
          filterCode: 'floral',
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/171023.639984000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%99%80%EC%9D%BC%EB%93%9C%ED%94%8C%EB%9D%BC%EC%9B%8C%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/171025.705934000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%99%80%EC%9D%BC%EB%93%9C%ED%94%8C%EB%9D%BC%EC%9B%8C%2002(hover).jpg',
        }
    ],
    네이키드머스크: [
        {
          name: '네이키드 머스크 103',
          discount: '38,000원',
          price: '32,300원',
          volume: '30ml',
          solid: true,
          note: '포근한 머스크',
          filterCode: 'animal',
          bestCode: true,
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/153744.575291000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%A8%B8%EC%8A%A4%ED%81%AC%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/153748.773410000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%A8%B8%EC%8A%A4%ED%81%AC%2002(hover).jpg',
        }
    ],
    네이키드뮤게: [
        {
          name: '네이키드 뮤게 313',
          discount: '38,000원',
          price: '32,300원',
          volume: '30ml',
          solid: true,
          note: '싱그러운 뮤게',
          filterCode: 'herbal',
          bestCode: true,
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/155204.113075000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%AE%A4%EA%B2%8C%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/155206.758473000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%AE%A4%EA%B2%8C%2002(hover).jpg',
        }
    ],
    네이키드샌달우드: [
        {
          name: '네이키드 샌달우드 201',
          discount: '38,000원',
          price: '32,300원',
          volume: '30ml',
          solid: true,
          note: '젖은 샌달우드',
          filterCode: 'woody',
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/154925.127383000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%83%8C%EB%8B%AC%EC%9A%B0%EB%93%9C%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/154928.68772000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%83%8C%EB%8B%AC%EC%9A%B0%EB%93%9C%2002(hover).j.jpg',
        }
    ],
    네이키드튜베로즈: [
        {
          name: '네이키드 튜베로즈 420',
          discount: '38,000원',
          price: '32,300원',
          volume: '30ml',
          solid: true,
          note: '우아한 튜베로즈',
          filterCode: 'floral',
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/160231.96850000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%8A%9C%EB%B2%A0%EB%A1%9C%EC%A6%88%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/160233.198437000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%8A%9C%EB%B2%A0%EB%A1%9C%EC%A6%88%2002(hover).jpg',
        }
    ],
    네이키드오크모스: [
        {
          name: '네이키드 오크 모스 501',
          discount: '38,000원',
          price: '32,300원',
          volume: '30ml',
          solid: true,
          note: '진초록 이끼',
          filterCode: 'mossy',
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/160535.557869000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%98%A4%ED%81%AC%EB%AA%A8%EC%8A%A4%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/160537.997919000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%98%A4%ED%81%AC%EB%AA%A8%EC%8A%A4%2002(hover).jpg',
        }
    ],
    솔리드퍼퓸트라이얼키트: [
        {
          name: '솔리드 퍼퓸 트라이얼 키트',
          discount: null,
          price: '2000원',
          volume: '2ml*4',
          solid: true,
          note: '솔리드 퍼퓸의 4가지 향',
          filterCode: null,
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161128.965919000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%8A%B8%EB%9D%BC%EC%9D%B4%EC%96%BC%ED%82%A4%ED%8A%B8%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161132.837457000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%8A%B8%EB%9D%BC%EC%9D%B4%EC%96%BC%ED%82%A4%ED%8A%B8%2002(hover).jpg',
        }
    ],
    시그니처쇼핑백: [
        {
          name: '시그니처 쇼핑백',
          discount: null,
          price: '3000원',
          volume: null,
          gift: true,
          note: '　',
          filterCode: null,
          url: 'https://shopby-images.cdn-nhncommerce.com/20240731/170620.56877000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%87%BC%ED%95%91%EB%B0%B1%2001.png',
          hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/170623.424920000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%87%BC%ED%95%91%EB%B0%B1%2002(hover).jpg',
        }
    ],
    제품없음: [
        {
          name: '',
          filterCode: '',
          url: '../../public/img/browser/Addict/noStock.JPG',
        }
    ],
  }
})
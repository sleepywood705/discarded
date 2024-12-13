import "./Addict_Note.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AddictProduct } from "../Component/Addict_Product";


export function AddictNotePage() {

  const cardData = useSelector((state) => state.cardData);
  const productData = useSelector((state) => state.productData); // productData 추가

  const noteCards = Object.keys(cardData);
  
  const [openModalOpen, setOpenModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState({
    modalImg: '',
    noteTitle: '',
    description: '',
    filterCode: '',
  });

  const [filteredProducts, setFilteredProducts] = useState([]); // 필터된 제품들을 저장하기 위한 상태

  const openModal = (filterCode) => {
    // 해당 filterCode에 맞는 카드 데이터를 가져옴
    const selectedData = noteCards.flatMap(key => cardData[key]).find(note => note.filterCode === filterCode);
    if (selectedData) {
      setSelectedCardData({
        modalImg: selectedData.modalImg,
        noteTitle: selectedData.noteTitle,
        description: selectedData.description,
        filterCode: selectedData.filterCode,
      });

      // filterCode에 맞는 제품 데이터를 필터링
      const matchedProducts = Object.values(productData)
        .flat()
        .filter(product => product.filterCode === filterCode);
      setFilteredProducts(matchedProducts);
    }
    setOpenModal(true);
  };

  const closeModal = () => {setOpenModal(false);};

  return (
    <article id="AddictNotePage">
      <div className="wrap">
        <p>에이딕트 향수는 패키지에 주원료를 표기하여<br />직관적으로 향을 이해할 수 있습니다.</p>
        <img src="https://media.11corporation.com/cdn/addict/shopby/fragrance/list/20240717/fragrance-mo.jpg" alt="img"/>
      </div>
      <div>
        {noteCards.map((type) => (
          cardData[type].map(note => (
            <NoteCard key={note.noteTitle} cardData={note} onClick={() => openModal(note.filterCode)} />
          ))
        ))}
        {openModalOpen && <NoteModal closeModal={closeModal} cardData={selectedCardData} filteredProducts={filteredProducts} />}
      </div>
    </article>
  );
}

function NoteCard({ cardData, onClick }) {
  return (
    <div id="NoteCard" onClick={onClick}>
      <img src={cardData.img} alt="img" />
      <div>
        <p>{cardData.noteTitle}</p>
        <p>{cardData.description}</p>
      </div>
    </div>
  );
}

function NoteModal({ closeModal, cardData, filteredProducts }) {
  const fragranceData = useSelector((state) => state.fragranceData);

  // filterCode에 해당하는 fragrance 데이터만 추출
  const filteredFragrance = fragranceData[cardData.filterCode] || [];

  return (
    <div id="NoteModal">
      <button onClick={closeModal}></button>
      <section>
        <div
          className="left"
          style={{ background: `url(${cardData.modalImg}) center/cover no-repeat` }}
        >
          <h1>Note Number: {cardData.noteTitle}</h1>
          <p>{cardData.description}</p>
          <h1>Fragrance Number: </h1>
          <div className="wrap">
            {filteredFragrance.map((fragrance, index) => (
              <p key={index}>{fragrance}</p>
            ))}
          </div>
        </div>
        <div className="right">
          {filteredProducts.map((product, index) => (
            <AddictProduct key={index} productData={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
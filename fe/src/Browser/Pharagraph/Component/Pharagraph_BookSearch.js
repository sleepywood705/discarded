import "./Pharagraph_BookSearch.scss"
import axios from "axios";
import { API_KEY } from "../API/API_KEY";
import { useState } from "react";


export function PharagraphBookSearch({ search, setFormData }) {
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.query.value;
    const filter = form.filter.value;

    try {
      const response = await axios.get(`https://www.nl.go.kr/NL/search/openApi/search.do?key=${API_KEY}&kwd=${query}&srchTarget=${filter}`);
      
      // XML 파싱
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");
      
      const items = xmlDoc.getElementsByTagName("item");
      const parsedResults = Array.from(items).map(item => ({
        title: item.getElementsByTagName("title_info")[0].textContent,
        author: item.getElementsByTagName("author_info")[0].textContent,
        imageUrl: item.getElementsByTagName("image_url")[0].textContent,
        publisher: item.getElementsByTagName("pub_info")[0].textContent,
      }));
      
      console.log(parsedResults)
      setResults(parsedResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const hideSearch = (e) => {
    console.log("꺼짐ㅅㄱ");
    search.CLOSE();
  }

  const handleSelect = (title) => {
    setFormData(prev => ({...prev, book: title}));
    search.CLOSE();
  };

  return (
    <div id="PharagraphBookSearch">
      <ul className={results.length > 0 ? "result" : "noresult"}>
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item.title)}>
              {item.imageUrl && item.imageUrl !== "http://cover.nl.go.kr/" ? (
                <img src={item.imageUrl} alt={item.title} />
              ) : (
                <img src="https://via.placeholder.com/80x117" alt="임시 이미지" />
              )}
              <div>
                <p className="title">{index + 1}. {item.title}</p>
                <p className="infos">{item.author} | {item.publisher}</p>
              </div>
            </li>
          ))
        ) : (
          <li className="noresult">결과가 없습니다.</li>
        )}
      </ul>
      <form onSubmit={handleSearch}>
        <div className="wrap_input">
          <select name="filter">
            <option value="title">서명</option>
            <option value="author">작가명</option>
          </select>
          <input type="text" name="query" placeholder="서명 또는 작가명을 입력해 주세요." />
        </div>
        <div className="wrap_button">
          <button onClick={hideSearch}>취소</button>
          <button type="submit">검색</button>
        </div>
      </form>
    </div>
  );
}
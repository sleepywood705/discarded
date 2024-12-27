import "./Pharagraph_BookSearch.scss"
import axios from "axios";
import { useState, useEffect, useRef } from "react";


export function PharagraphMusicSearch({ MUSIC, setFormData }) {
  const inputRef = useRef(null);
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    const filter = e.target.filter.value;

    try {
      const response = await axios.get(`https://itunes.apple.com/search`, {
        params: {
          term: query,
          entity: 'musicTrack',
          limit: 10,
          ...(filter === 'artist' && { attribute: 'artistTerm' }),
          ...(filter === 'album' && { attribute: 'albumTerm' }),
        },
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  const handleSelect = (artist, title, album) => {
    setFormData(prev => ({...prev, music: `${artist} - ${title} - ${album}`}));
    MUSIC.CLOSE();
  };

  const hideSearch = (e) => {
    MUSIC.CLOSE();
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      MUSIC.CLOSE();
    }
  };
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="PharagraphMusicSearch">
      <ul className={results.length > 0 ? "result" : "noresult"}>
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item.artistName, item.trackName, item.collectionName)}>
              {item.artworkUrl100 ? (
                <img src={item.artworkUrl100} alt={item.collectionName} />
              ) : (
                <img src="https://via.placeholder.com/100x100" alt="임시 이미지" />
              )}
              <div>
                <p className="title">{index + 1}. {item.trackName}</p>
                <p className="infos">아티스트: {item.artistName} | 앨범: {item.collectionName}</p>
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
            <option value="song">곡명</option>
            <option value="artist">아티스트명</option>
            <option value="album">앨범명</option>
          </select>
          <input 
            type="text" 
            name="query" 
            placeholder="곡명, 아티스트명 또는 앨범명을 입력해 주세요."
            autoComplete="off"
            ref={inputRef}
          />
        </div>
        <div className="wrap_button">
          <button type="button" onClick={hideSearch}>취소</button>
          <button type="submit">검색</button>
        </div>
      </form>
    </div>
  );
}
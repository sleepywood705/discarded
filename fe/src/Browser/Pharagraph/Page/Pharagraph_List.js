import "./Pharagraph_List.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function PharagraphListPage() {
  const [posts, setPosts] = useState([]);
  const [menu, setMenu] = useState({});

  const showMenu = (cardUsername) => {
    const localUsername = localStorage.getItem("username");
    if (cardUsername === localUsername) {
      setMenu((prevMenu) => ({
        ...prevMenu,
        [cardUsername]: !prevMenu[cardUsername],
      }));
    } else {
      setMenu({});
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/Pharagraph/list");
      setPosts(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("게시물 불러오기 실패:", error);
    }
  };

  const deleteCard = async (id, cardUsername) => {
    const localUsername = localStorage.getItem("username");
    if (cardUsername === localUsername) {
      try {
        const response = await axios.post(
          "/Pharagraph/delete",
          { id, cardUsername, },
          { headers: { username: localUsername } }
        );
        console.log(response.data);
        fetchPosts();
      } catch (error) {
        console.error("게시물 삭제 실패:", error);
      }
    } else {
      console.error("삭제 권한이 없습니다.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div id="PharagraphListPage">
      <h1 className="Title">게시판</h1>
      <ul>
        {posts && posts.length > 0 ? (
          posts
            .slice()
            .reverse()
            .map((post, index) => (
              <li key={index} className="card">
                <div className="top">
                  <img src="https://via.placeholder.com/44x44" alt="프로필 이미지" />
                  <div>
                    <p className="nickname">
                      {post.username} | {post.MBTI}
                      <button className="dots" onClick={() => showMenu(post.username)} />
                    </p>
                    {menu[post.username] && (
                      <div className="menu">
                        <Link to={`/Portfolio/Pharagraph/editing?id=${post._id}&book=${post.book}&content=${post.content}&page=${post.page}&music=${post.music}&MBTI=${post.MBTI}`} >
                          수정하기
                        </Link>
                        <button onClick={() => deleteCard(post._id, post.username)} >
                          삭제하기
                        </button>
                      </div>
                    )}
                    <p className="music">{post.music}</p>
                  </div>
                </div>
                <div className="mid">
                  <p className="content">{post.content}</p>
                  <p className="book">{post.book}</p>
                  <p className="page">p.{post.page}</p>
                </div>
                <div className="bot">🤍</div>
              </li>
            ))
        ) : (
          <li className="noresult">게시물이 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

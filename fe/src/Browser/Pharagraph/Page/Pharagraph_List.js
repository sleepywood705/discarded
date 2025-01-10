import "./Pharagraph_List.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export function PharagraphListPage() {
  const loginUser = localStorage.getItem("username");
  const [posts, setPosts] = useState([]);
  const [menuId, setMenuId] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/Pharagraph/list");
      setPosts(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("게시물 불러오기 실패:", error);
    }
  };
  
  const showMenu = (id) => {setMenuId(id)};

  const deleteCard = async (id, cardUsername) => {
    try {
      const response = await axios.post(
        "/Pharagraph/delete",
        { id, cardUsername },
        { headers: { username: loginUser } }
      );
      alert(response.data.message);
      fetchPosts();
    } catch (error) {
      console.error("게시물 삭제 실패:", error);
      alert(error.response?.data?.message || "게시물 삭제 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {fetchPosts()}, []);

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
                  <img src="https://via.placeholder.com/44x44" alt="" />
                  <div>
                    {loginUser === post.username && menuId === post._id && (
                      <div className="menu">
                        <Link to={`/Portfolio/Pharagraph/editing?id=${post._id}&book=${post.book}&content=${encodeURIComponent(post.content)}&page=${post.page}&music=${post.music}&MBTI=${post.MBTI}`}>
                          수정하기
                        </Link>
                        <button onClick={() => deleteCard(post._id, post.username)} >
                          삭제하기
                        </button>
                      </div>
                    )}
                    <p className="nickname">
                      {post.nickname}
                      {loginUser === post.username && (
                        <button className="dots" onClick={() => showMenu(post._id)}><i class="bi bi-three-dots"></i></button>
                      )}
                    </p>
                    <p className="MBTI">{post.MBTI}</p>
                  </div>
                </div>
                <div className="mid">
                  <span>
                    <p className="book">{post.book}</p>
                    <p className="page">p.{post.page}</p>
                  </span>
                  <p className="content">{post.content}</p>
                </div>
                <div className="bot">
                  <p className="music">{post.music}</p>
                  <button type="button"><i class="bi bi-suit-heart" /></button>
                  <Link to={`/Portfolio/Pharagraph/reply?id=${post._id}&nickname=${post.nickname}&book=${post.book}&content=${encodeURIComponent(post.content)}&page=${post.page}&music=${post.music}&MBTI=${post.MBTI}`}><i class="bi bi-chat-square" /></Link>
                </div>
              </li>
            ))
        ) : (
          <li className="noresult">게시물이 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

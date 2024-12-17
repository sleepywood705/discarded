import "./Pharagraph_List.scss";
import axios from "axios";
import { useState, useEffect } from "react";


export function PharagraphListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios
          .get(
            "http://localhost:8080/Pharagraph/list",
            { withCredentials: true }
          );
          setPosts(response.data);
          console.log("클라이언트에서 받은 데이터:", response.data);
      } catch (error) {
        console.error("데이터를 불러오는 도중 오류가 발생했습니다.", error);
      }
    };

    fetchPosts();
  }, []);

  // console.log("렌더링 시 posts 상태:", posts);
  return (
    <div id="PharagraphListPage">
      <h1 className="Title">글목록</h1>
      <ul>
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <li key={index}>
              <div className="top">
                <div>
                  <img src="https://via.placeholder.com/40x40" alt="프로필 이미지" />
                  <span>
                    <p className="nickname">{post.username}</p>
                    <p className="mbti">{post.MBTI}</p>
                  </span>
                </div>
                <p className="music">{post.music}</p>
              </div>
              <div className="mid">
                <p className="content">{post.content}</p>
                <p className="book">{post.book}</p>
                <p className="page">p.{post.page}</p>
              </div>
              <div className="bot"></div>
            </li>
          ))
        ) : (
          <li>게시물이 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

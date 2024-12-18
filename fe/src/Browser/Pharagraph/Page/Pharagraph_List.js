import "./Pharagraph_List.scss";
import axios from "axios";
import { useState, useEffect } from "react";


export function PharagraphListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/Pharagraph/list');
        setPosts(response.data);
      } catch (error) {
        console.error('게시물 불러오기 실패:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div id="PharagraphListPage">
      <h1 className="Title">게시판</h1>
      <ul>
        {posts && posts.length > 0 ? (
          posts.slice().reverse().map((post, index) => (
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

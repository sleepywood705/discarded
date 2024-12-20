import "./Pharagraph_Signup.scss"
import axios from "axios";
import { useState } from "react";
import { useStateChange, useFormChange } from "../../../Hook/Hook";


export function PharagraphSignupPage() {
  const [formData, handleChange, setFormData] = useFormChange();
  const [passwordMatch, setPasswordMatch] = useState();
  const [usernameError, setUsernameError] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    handleChange(e);
    
    if (value.length > 16) {
      setUsernameError('아이디는 16자까지 입력할 수 있습니다.');
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (e) => {
    handleChange(e);
    if (formData.password && e.target.value) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div id="PharagraphSignupPage">
      <h1 className="Title">회원가입</h1>
      <form action="">
        <div>
          <label>아이디<span>*</span></label>
          <input 
            type="text"
            name="username"
            placeholder="아이디를 입력하세요." 
            value={formData.username}
            onChange={handleUsernameChange}
            autoComplete="off"
            required
            pattern="^[a-zA-Z0-9!@#$%^&*]{6,20}$"
          />
        </div>
        {usernameError &&
          <div>
            <label />
            <p style={{ color: 'red' }}>{usernameError}</p>
          </div>
        }
        <div>
          <label>비밀번호<span>*</span></label>
          <input 
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            value={formData.password1}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label />
          <p><span>영문</span>, <span>숫자</span>, <span>특수문자</span> 조합이어야 합니다.</p>
        </div>
        <div>
          <label>비밀번호 확인<span>*</span></label>
          <input 
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={formData.password2}
            onChange={handlePasswordChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label />
            <p style={{ color: passwordMatch ? 'green' : 'red' }}>
              {passwordMatch ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
            </p>
        </div>
        <div>
          <label>이메일<span>*</span></label>
          <input 
            type="text"
            name="email"
            placeholder="이메일을 입력하세요."
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
            required
            className="small"
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}
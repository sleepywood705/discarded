import "./Pharagraph_Signup.scss"
import axios from "axios";
import { useState } from "react";
import { useFormChange } from "../../../Hook/Hook";
import { useNavigate } from "react-router-dom";

export function PharagraphSignupPage() {
  const [formData, handleChange, setFormData] = useFormChange({
    username: '',
    password1: '',
    password2: '',
    email: ''
  });
  const [usernameError, setUsernameError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState();
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    handleChange(e);
    
    if (value.length > 20) {
      setUsernameError('아이디는 20자까지 입력할 수 있습니다.');
    } else {
      setUsernameError('');
    }

    const usernamePattern = /^[a-zA-Z0-9]{5,20}$/;
    if (!usernamePattern.test(value)) {
      setUsernameError('아이디는 5~20자의 영문, 숫자 조합이어야 합니다.');
    }
  };

  const handlePasswordChange1 = (e) => {
    const value = e.target.value;
    handleChange(e);
    setPasswordMatch(value === formData.password2);

    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,20}$/;
    const isValid = passwordPattern.test(value);
    setIsPasswordValid(isValid);
    
    setPasswordError(isValid ? '' : '비밀번호는 6~20자의 영문, 숫자, 특수문자 조합이어야 합니다.');
  };

  const handlePasswordChange2 = (e) => {
    const value = e.target.value;
    handleChange(e);
    setPasswordMatch(formData.password1 === value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    handleChange(e);
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') {
      setEmailError('');
    } else {
      setEmailError(emailPattern.test(value) ? '' : '유효한 이메일 주소가 아닙니다.');
    }
  };

  const handleCheckUsername = async () => {
    try {
      const response = await axios.get(`/Pharagraph/findID?username=${formData.username}`);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "아이디 중복 확인 중 오류가 발생했습니다.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/Pharagraph/signup', {
        username: formData.username,
        password: formData.password1,
        email: formData.email
      });
      alert(response.data.message);
      navigate('/Portfolio/pharagraph/login')
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert(error.response?.data?.message || "회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div id="PharagraphSignupPage">
      <h1 className="Title">회원가입</h1>
      <form onSubmit={handleSubmit}>
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
            pattern="^[a-zA-Z0-9]{6,20}$"
          />
          <button type="button" onClick={handleCheckUsername}>중복확인</button>
        </div>
        {usernameError && (
          <div>
            <label />
            <p style={{ color: 'red' }}>{usernameError}</p>
          </div>
        )}
        <div>
          <label>비밀번호<span>*</span></label>
          <input 
            type="password"
            name="password1"
            placeholder="비밀번호를 입력하세요."
            value={formData.password1}
            onChange={handlePasswordChange1}
            autoComplete="off"
            required
          />
        </div>
        {passwordError && (
          <div>
            <label />
            <p style={{ color: 'red' }}>{passwordError}</p>
          </div>
        )}
        <div>
          <label>비밀번호 확인<span>*</span></label>
          <input 
            type="password"
            name="password2"
            placeholder="비밀번호를 입력하세요."
            value={formData.password2}
            onChange={handlePasswordChange2}
            autoComplete="off"
            required
          />
        </div>
        {passwordMatch !== undefined && (
          <div>
            <label />
            <p style={{ color: passwordMatch ? 'green' : 'red' }}>
              {passwordMatch ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
            </p>
          </div>
        )}
        <div>
          <label>이메일(선택)</label>
          <input 
            type="text"
            name="email"
            placeholder="이메일을 입력하세요."
            value={formData.email}
            onChange={handleEmailChange}
            autoComplete="off"
          />
        </div>
        {emailError && (
          <div>
            <label />
            <p style={{ color: 'red' }}>{emailError}</p>
          </div>
        )}
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}
import "./Pharagraph_Signup.scss"
import axios from "axios";
import { useState } from "react";
import { useFormChange } from "../../../Hook/Hook";
import { useNavigate } from "react-router-dom";

const VALIDATION_PATTERNS = {
  username: /^[a-zA-Z0-9]{5,20}$/,
  password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,20}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

const ERROR_MESSAGES = {
  username: {
    length: '아이디는 20자까지 입력할 수 있습니다.',
    pattern: '아이디는 5~20자의 영문, 숫자 조합이어야 합니다.'
  },
  nickname: '닉네임은 8자까지 입력할 수 있습니다.',
  password: '비밀번호는 6~20자의 영문, 숫자, 특수문자 조합이어야 합니다.',
  mbti: 'MBTI를 모두 선택해주세요.'
};

const MBTI_OPTIONS = [
  [['E', 'I'], 0],
  [['S', 'N'], 1],
  [['T', 'F'], 2],
  [['J', 'P'], 3]
];

export function PharagraphSignupPage() {
  const [formData, handleChange, setFormData] = useFormChange({
    username: '',
    nickname: '',
    password1: '',
    password2: '',
    email: '',
    MBTI: ''
  });
  const [usernameError, setUsernameError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState();
  const [passwordValid, setIsPasswordValid] = useState()
  const [emailError, setEmailError] = useState('');
  const [selectedMBTI, setSelectedMBTI] = useState(["", "", "", ""]);
  const isSelected = (index, value) => selectedMBTI[index] === value;

  const navigate = useNavigate();

  const validateUsername = (value) => {
    if (value.length > 20) return ERROR_MESSAGES.username.length;
    if (!VALIDATION_PATTERNS.username.test(value)) return ERROR_MESSAGES.username.pattern;
    return '';
  };

  const validateNickname = (value) => {
    return value.length > 8 ? ERROR_MESSAGES.nickname : '';
  };

  const validatePassword = (value) => {
    return VALIDATION_PATTERNS.password.test(value) ? '' : ERROR_MESSAGES.password;
  };

  const validateEmail = (value) => {
    return value === '' || VALIDATION_PATTERNS.email.test(value) ? '' : '유효한 이메일 주소가 아닙니다.';
  };

  const handleDuplicationCheck = async (field) => {
    try {
      const response = await axios.get(`/Pharagraph/findUser?${field}=${formData[field]}`);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || `${field} 중복 확인 중 오류가 발생했습니다.`);
    }
  };

  const handleUsernameChange = (e) => {
    handleChange(e);
    setUsernameError(validateUsername(e.target.value));
  };

  const handleNicknameChange = (e) => {
    handleChange(e);
    setNicknameError(validateNickname(e.target.value));
  };

  const handlePasswordChange1 = (e) => {
    const value = e.target.value;
    handleChange(e);
    setPasswordMatch(value === formData.password2);
    setPasswordError(validatePassword(value));
    setIsPasswordValid(VALIDATION_PATTERNS.password.test(value));
  };

  const handlePasswordChange2 = (e) => {
    handleChange(e);
    setPasswordMatch(formData.password1 === e.target.value);
  };

  const handleEmailChange = (e) => {
    handleChange(e);
    setEmailError(validateEmail(e.target.value));
  };

  const selectMBTI = (index, value) => {
    const newArr = [...selectedMBTI];
    newArr[index] = value;
    setSelectedMBTI(newArr);
    setFormData(prev => ({ ...prev, MBTI: newArr.join('') }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (selectedMBTI.some(value => value === '')) {
      alert(ERROR_MESSAGES.mbti);
      return;
    }

    try {
      const signupData = {
        username: formData.username,
        password: formData.password1,
        nickname: formData.nickname,
        email: formData.email,
        MBTI: selectedMBTI.join('')
      };

      const response = await axios.post('/Pharagraph/signup', signupData);
      alert(response.data.message);
      navigate('/Portfolio/pharagraph/login');
    } catch (error) {
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
            pattern="^[a-zA-Z0-9]{5,20}$"
          />
          <button 
            type="button" 
            className="duplicationCheck" 
            onClick={() => handleDuplicationCheck('username')}
          >
            중복확인
          </button>
        </div>
        {usernameError && (
          <div>
            <label />
            <p style={{ color: '#f9f9f9' }}>{usernameError}</p>
          </div>
        )}
        <div>
          <label>닉네임<span>*</span></label>
          <input 
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해 주세요" 
            value={formData.nickname}
            onChange={handleNicknameChange}
            autoComplete="off"
            required
          />
          <button 
            type="button" 
            className="duplicationCheck" 
            onClick={() => handleDuplicationCheck('nickname')}
          >
            중복확인
          </button>
        </div>
        {nicknameError && (
          <div>
            <label />
            <p style={{ color: '#f9f9f9' }}>{nicknameError}</p>
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
            <p style={{ color: '#f9f9f9' }}>{passwordError}</p>
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
            <p style={{ color: passwordMatch ? 'yellowgreen' : '#f9f9f9' }}>
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
            <p style={{ color: '#f9f9f9' }}>{emailError}</p>
          </div>
        )}
        <div>
          <label>MBTI<span>*</span></label>
          <div className="wrap_MBTI">
            {MBTI_OPTIONS.map(([options, index]) => (
              <span key={index}>
                {options.map(option => (
                  <button
                    key={option}
                    type="button"
                    className={isSelected(index, option) ? 'clicked' : ''}
                    onClick={() => selectMBTI(index, option)}
                  >
                    {option}
                  </button>
                ))}
              </span>
            ))}
          </div>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}
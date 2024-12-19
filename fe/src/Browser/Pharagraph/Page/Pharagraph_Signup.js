import "./Pharagraph_Signup.scss"


export function PharagraphSignupPage() {

  return (
    <div id="PharagraphSignupPage">
      <h1 className="Title">회원가입</h1>
      <form action="">
        <div>
          <label htmlFor="">아이디<span>*</span></label>
          <input type="text" placeholder="아이디를 입력하세요." />
        </div>
        <div>
          <label htmlFor="">비밀번호<span>*</span></label>
          <input type="password" placeholder="비밀번호를 입력하세요."/>
        </div>
        <div>
          <label htmlFor="">비밀번호 확인<span>*</span></label>
          <input type="password" placeholder="비밀번호를 입력하세요."/>
        </div>
        <div>
          <label htmlFor="">이메일<span>*</span></label>
          <input type="email" placeholder="이메일을 입력하세요."/>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}
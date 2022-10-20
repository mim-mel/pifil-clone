import styled from 'styled-components';

const Nav = () => {
  return (
    <NavWrap>
      <NavBlock>
        <img src='image/logo.png' alt='플필로고' />
        <ul>
          <li>프로필투어</li>
          <li>오디션 공고</li>
          <li>배우 프로필</li>
          <li>엔터테인먼트</li>
          <li>영화인 DB</li>
          <li>커뮤니티</li>
          <li>고객지원</li>
          <li>로그인</li>
        </ul>
      </NavBlock>
    </NavWrap>
  );
};

const NavWrap = styled.div`
  width: 100%;
  height: 64px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  position: fixed;
  top: 0;
  background: white;
  z-index: 100;
`;

const NavBlock = styled.div`
  width: 940px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  img {
    width: 70px;
  }

  ul {
    display: flex;
    margin-left: auto;
    li {
      list-style: none;
      text-decoration: none;
      font-family: SUIT-Medium;
      font-weight: 500;
      font-size: 17px;
      margin-left: 30px;
      text-align: right;
    }
  }
`;

export default Nav;

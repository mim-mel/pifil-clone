import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterBackground>
      <FooterWrap>
        <FooterTitleBlock>
          <div>개인정보처리방침</div>
          <div>이용약관</div>
          <div>이메일무단수집거부</div>
          <div>INSTAGRAM</div>
        </FooterTitleBlock>
        <FooterInformationBlock>
          <div>©(주)플필 | 대표자 : 류민국</div>
          <div>사업자등록번호 : 430-87-02549</div>
          <div>통신판매업 신고번호 : 2022-서울강남-03908</div>
          <div>
            사업장 소재지 : 서울특별시 강남구 나루터로66 신사빌딩 2층 플필
          </div>
          <div>연락처 : 02-543-4796</div>
        </FooterInformationBlock>
      </FooterWrap>
    </FooterBackground>
  );
};

const FooterBackground = styled.div`
  width: 100%;
  height: 220px;
  background-color: #343434;
`;

const FooterWrap = styled.div`
  width: 1060px;
  height: 220px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 50px;
  box-sizing: border-box;

  @media screen and (max-width: 1400px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const FooterTitleBlock = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  width: 40%;
  font-family: SUIT-Medium;
  font-size: 12px;

  @media screen and (max-width: 1400px) {
    font-size: 1.1vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2vw;
    line-height: 21px;
    display: block;
    width: 30%;
  }
`;

const FooterInformationBlock = styled.div`
  display: block;
  width: 40%;
  text-align: right;
  font-family: SUIT-Medium;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 25px;

  @media screen and (max-width: 1400px) {
    font-size: 1.2vw;
    width: 60%;
    line-height: 21px;
  }
`;

export default Footer;

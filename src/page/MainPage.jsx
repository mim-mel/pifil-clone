import { useState } from 'react';
import {
  auditionMockData,
  actorMockData,
  communityMockdata,
} from '../mockdata';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <MainPageWrap>
      {/* banner section */}
      <BannerWrap>
        <Banner>
          <img src='image/banner3.png' alt='banner-img' />
        </Banner>
        <Banner>
          <img src='image/banner1.png' alt='banner-img' />
        </Banner>
        <Banner>
          <img src='image/banner2.png' alt='banner-img' />
        </Banner>
      </BannerWrap>
      <ButtonWrap>
        <button></button>
        <button></button>
        <button></button>
      </ButtonWrap>
      <NoticeWrap>
        <button>공지사항</button>
        <div>2022 플필X틱톡 웹드라마 오디션</div>
      </NoticeWrap>

      {/* audition section */}
      <AuditionWrap>
        <Title>최신 오디션 공고</Title>
        <Text>오디션 공고에 지원하여 배우의 꿈을 이뤄보세요.</Text>
        <SideButton top='10%'>오디션 공고 더보기 {'>'}</SideButton>
        <AuditionBlockWrap>
          {auditionMockData.map((data, i) => (
            <AuditionBlock key={i}>
              <img src={data.src} alt='poster-img' />
              <AuditionContentsBlock>
                <AuditionContentsTheme color={data.color}>
                  {data.theme}
                </AuditionContentsTheme>
                <div>{data.date}</div>
                <div>{data.title}</div>
                <div>{data.subTitle}</div>
                <div>{data.endDate}</div>
              </AuditionContentsBlock>
            </AuditionBlock>
          ))}
        </AuditionBlockWrap>
      </AuditionWrap>

      {/* actor section */}
      <ActorBackground>
        <ActorWrap>
          <Title>배우프로필</Title>
          <Text>9237명의 배우들이 작품을 기다리고 있어요.</Text>
          <SideButton top='14%'>더 많은 배우 보기 {'>'}</SideButton>
          <ActorImgWrap>
            {actorMockData.map((data, i) => (
              <ActorContentsBlock key={i}>
                <ActorImgBlock>
                  <img src={data.src} alt='actor-img' />
                </ActorImgBlock>
                <ActorName>{data.name}</ActorName>
                <ActorAge>{data.age}</ActorAge>
              </ActorContentsBlock>
            ))}
          </ActorImgWrap>
        </ActorWrap>
      </ActorBackground>

      {/* community section */}
      <CommunityWrap>
        <Title>커뮤니티</Title>
        <Text>배우들과 커뮤니티를 통해 정보를 공유해보세요.</Text>
        <SideButton top='23%'>커뮤니티 가기 {'>'}</SideButton>
        <CommunityBlockWrap>
          {communityMockdata.map((data, i) => (
            <CommunityBlock key={i}>
              <div>{data.title}</div>
              <div>{data.writer}</div>
              <div>{data.date}</div>
            </CommunityBlock>
          ))}
        </CommunityBlockWrap>
      </CommunityWrap>

      {/* customer section */}
      <CustomerWrap>
        <Title>고객지원</Title>
        <Text>배우들을 위해 다양한 채널이 준비되어 있어요</Text>
        <CustomerBlockWrap>
          <CustomerBlock
            color='white'
            background='radial-gradient(circle farthest-corner at 32% 106%,#ffe17d 0%,#ffcd69 10%,#fa9137 28%,#eb4141 42%,transparent 82%) , linear-gradient(135deg,#234bd7 12%,#c33cbe 58%);'
            weight='400'
          >
            <div>인스타그램</div>
            <img src='image/insta.png' alt='insta-icon' />
            <div>
              플필 인스타그램을 통해 실시간으로 오디션 공고 피드를 받아보세요
            </div>
            <button>인스타그램 바로가기 {'>'}</button>
          </CustomerBlock>

          <CustomerBlock color='black' background='#f9e000' weight='600'>
            <div>카카오톡</div>
            <img src='image/kakao.png' alt='kakao-icon' />
            <div>
              플필과 카카오플러스 친구를 하시고 다양한 공지사항을 받아보세요
            </div>
            <button>카카오톡 바로가기 {'>'}</button>
          </CustomerBlock>

          <CustomerBlock color='white' background='#1ec800' weight='400'>
            <div>블로그</div>
            <img src='image/naver.png' alt='naver-blog-icon' />
            <div>
              플필 블로그를 이웃추가하시고 오디션 정보를 빠르게 구독해보세요
            </div>
            <button>블로그 바로가기 {'>'}</button>
          </CustomerBlock>
        </CustomerBlockWrap>

        {/* management section */}
        <ManagementWrap>
          <ManagementImgBlock>
            <img src='image/pages-creen.jpg' alt='plfil-page' />
          </ManagementImgBlock>
          <ManagrmentContentsBlock>
            <div>Actor Management</div>
            <div>
              오디션 공고를 '플필로 지원받기' 했을때 사용 가능한, 캐스팅
              담당자를 위한 지원자 관리 테스트 페이지 입니다. 가상의 지원자들로
              구성된 페이지에서 플필의 편리함을 미리 체험해 보세요.
            </div>
            <button>샘플 지원자 관리 페이지로 가기</button>
          </ManagrmentContentsBlock>
        </ManagementWrap>
      </CustomerWrap>

      <AdviserWrap>
        <Title>제휴 업체</Title>
        <Text>플필과 협력중인 업체들입니다.</Text>
        <AdviserImgWrap>
          <AdviserImg src='image/partner1.jpg' alt='partner-logo' />
          <AdviserImg src='image/partner2.jpg' alt='partner-logo' />
          <AdviserImg src='image/partner3.jpg' alt='partner-logo' />
          <AdviserImg src='image/partner4.jpg' alt='partner-logo' />
        </AdviserImgWrap>

        <AdviserImgWrap>
          <AdviserImg src='image/partner5.jpg' alt='partner-logo' />
          <AdviserImg src='image/partner6.jpg' alt='partner-logo' />
          <AdviserImg src='image/partner7.jpg' alt='partner-logo' />
          <AdviserImg src='image/partner8.jpg' alt='partner-logo' />
          <AdviserImg src='image/partner9.jpg' alt='partner-logo' />
          <AdviserImg src='image/partner10.jpg' alt='partner-logo' />
          <AdviserImg src='image/partner11.jpg' alt='partner-logo' />
        </AdviserImgWrap>
      </AdviserWrap>
    </MainPageWrap>
  );
};

const MainPageWrap = styled.div`
  width: 100%;
  margin: 100px auto 70px auto;
`;
const BannerWrap = styled.div`
  width: 1060px;
  overflow-x: hidden;
  display: flex;
  margin: 0 auto;
`;

const Banner = styled.div`
  width: 1060px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const ButtonWrap = styled.div`
  width: 50px;
  height: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;

const NoticeWrap = styled.div`
  width: 1060px;
  height: 46px;
  background-color: rgb(255, 83, 83);
  display: flex;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
  margin: 0 auto;
  button {
    height: 27px;
    width: 82px;
    background: white;
    border-radius: 3px;
    border: none;
    font-family: SUIT-Medium;
    font-size: 12px;
    color: rgb(255, 83, 83);
    font-weight: 600;
    margin-right: 10px;
  }

  div {
    font-family: SUIT-Medium;
    font-size: 14px;
    color: #ffffff;
    font-weight: 600;
  }
`;

const AuditionWrap = styled.div`
  position: relative;
  width: 1060px;
  margin: 50px auto 50px auto;
`;

const Title = styled.div`
  font-size: 42px;
  font-family: SUIT-Medium;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 20px;
  font-family: SUIT-Medium;
  font-weight: 400;
  color: #666666;
  margin-bottom: 30px;
`;

const SideButton = styled.button`
  position: absolute;
  top: ${props => props.top};
  left: 100%;
  width: 203px;
  height: 52px;
  font-size: 18px;
  font-family: SUIT-Medium;
  font-weight: 600;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  transform: translate(-100%, -10%);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 3px;
`;

const AuditionBlockWrap = styled.div`
  justify-content: space-between;
  width: 100%;
  display: grid;
  grid-template-columns: 49% 49%;
`;

const AuditionBlock = styled.div`
  height: 220px;
  border: 1px solid #d2d2d2;
  margin-bottom: 15px;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 190px;
    height: 190px;
    margin-left: 20px;
    border-radius: 15px;
  }
`;

const AuditionContentsBlock = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: 20px;

  div:nth-child(2) {
    display: inline-block;
    color: rgb(255, 7, 142);
    padding: 2px 10px;
    border: 1px solid rgb(255, 7, 142);
    font-family: SUIT-Medium;
    border-radius: 5px;
    margin-left: 10px;
  }

  div:nth-child(3) {
    font-family: SUIT-Medium;
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
  }

  div:nth-child(4) {
    font-size: 16px;
    font-family: SUIT-Medium;
    margin-top: 10px;
  }

  div:nth-child(5) {
    font-size: 14px;
    font-family: SUIT-Medium;
    margin-top: 5px;
    color: #666666;
  }
`;

const AuditionContentsTheme = styled.div`
  background-color: ${props => props.color};
  display: inline-block;
  padding: 5px 10px;
  font-family: SUIT-Medium;
  font-size: 17px;
  border-radius: 5px;
`;

const ActorBackground = styled.div`
  width: 100%;
  height: 800px;
  background: #f0f0f0;
`;

const ActorWrap = styled.div`
  width: 1060px;
  height: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 50px 0;
  position: relative;
`;

const ActorImgWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 19% 19% 19% 19% 19%;
  justify-content: space-between;
`;

const ActorContentsBlock = styled.div`
  width: 200px;
  height: 300px;
`;

const ActorImgBlock = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 60px;
  background-color: gray;
  overflow: hidden;
  margin-bottom: 8px;

  img {
    width: 200px;
    height: auto;
    position: relative;
    top: -15%;
  }
`;

const ActorName = styled.div`
  text-align: center;
  font-size: 19px;
  font-family: SUIT-Medium;
  font-weight: 400;
  margin-bottom: 5px;
`;

const ActorAge = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: SUIT-Medium;
  font-weight: 400;
  color: #666666;
`;

const CommunityWrap = styled.div`
  width: 1060px;
  margin: 50px auto;
  position: relative;
`;

const CommunityBlockWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
`;

const CommunityBlock = styled.div`
  width: 100%;
  height: 108px;
  border: 1px solid #d2d2d2;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;

  div:nth-child(1) {
    font-size: 19px;
    font-family: SUIT-Medium;
    font-weight: 600;
    color: black;
    margin-bottom: 15px;
    cursor: pointer;
  }

  div:nth-child(2) {
    font-size: 15px;
    font-family: SUIT-Medium;
    color: #666666;
    display: inline-block;
    width: 50%;
  }

  div:nth-child(3) {
    font-size: 15px;
    font-family: SUIT-Medium;
    color: #666666;
    display: inline-block;
    width: 50%;
    text-align: right;
  }
`;

const CustomerWrap = styled.div`
  width: 1060px;
  margin: 100px auto;
  position: relative;
`;

const CustomerBlockWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
`;

const CustomerBlock = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #d2d2d2;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;

  div:nth-child(1) {
    display: inline-block;
    font-size: 24px;
    font-family: SUIT-Medium;
    font-weight: 600;
  }

  img {
    display: inline-block;
    position: relative;
    top: 3%;
    width: 33px;
    height: 33px;
    margin-left: 10px;
  }

  div:nth-child(3) {
    margin-top: 20px;
    font-size: 17px;
    font-family: SUIT-Medium;
    font-weight: 500;
    line-height: 25px;
  }

  button {
    width: 80%;
    height: 60px;
    color: ${props => props.color};
    background: ${props => props.background};
    border: none;
    font-size: 18px;
    font-family: SUIT-Medium;
    font-weight: ${props => props.weight};
    border-radius: 10px;
    margin-top: 20px;
    letter-spacing: 1px;
  }
`;

const ManagementWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  margin-top: 50px;
`;

const ManagementImgBlock = styled.div`
  overflow: hidden;
  height: 220px;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #f1f1f1;

  img {
    width: 105%;
    height: auto;
  }
`;

const ManagrmentContentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div:nth-child(1) {
    font-size: 25px;
    font-family: SUIT-Medium;
    font-weight: 600;
    color: #000000;
    margin-bottom: 30px;
  }

  div:nth-child(2) {
    font-size: 16px;
    font-family: SUIT-Medium;
    font-weight: 400;
    color: #666666;
    margin-bottom: 30px;
    line-height: 25px;
  }

  button {
    width: 300px;
    height: 52px;
    font-size: 18px;
    font-family: SUIT-Medium;
    font-weight: 600;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 3px;
  }
`;

const AdviserWrap = styled.div`
  width: 1060px;
  margin: 50px auto;
`;

const AdviserImgWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const AdviserImg = styled.img`
  display: inline-block;
  height: 40px;
  padding: 10px;
`;

const AdviserImgWrap2 = styled.div``;
export default MainPage;

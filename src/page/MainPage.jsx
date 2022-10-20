import { useState } from 'react';
import styled from 'styled-components';

const auditionMockData = [
  {
    theme: '웹드라마',
    date: 'D-11',
    title: '[배우 모집]플필X틱톡 2022웹드라마 오디션',
    subTitle: '플필X틱톡',
    endDate: '2022-10-31 마감',
    src: 'image/poster3.jpg',
    color: 'rgb(246, 244, 182)',
  },
  {
    theme: '웹드라마',
    date: 'D-2',
    title:
      '미래에셋 버추얼 웹드라마 [우리의 미래(가제)] 에서 여주인공을 찾습니다 (내용 확인 필수)',
    subTitle: '미래에셋',
    endDate: '2022-10-22 마감',
    src: 'image/poster4.jpg',
    color: 'rgb(246, 244, 182)',
  },
  {
    theme: '기타',
    date: 'D-26',
    title: '국.내.최.초. 윤봉길 의사 오디션 *대전mbc방영',
    subTitle: '대전MBC',
    endDate: '2022-11-15 마감',
    src: 'image/poster1.jpg',
    color: 'rgb(231, 241, 246)',
  },
  {
    theme: 'TV드라마',
    date: 'D-1',
    title: 'OTT 드라마 고등학교 테니스 부원 모집 (내용 확인 필수)',
    subTitle: '필름케이',
    endDate: '2022-10-21 마감',
    src: 'image/poster2.jpg',
    color: 'rgb(187, 248, 186)',
  },
];

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
        <AuditionTitle>최신 오디션 공고</AuditionTitle>
        <AuditionText>
          오디션 공고에 지원하여 배우의 꿈을 이뤄보세요.
        </AuditionText>
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
    </MainPageWrap>
  );
};

const MainPageWrap = styled.div`
  width: 1060px;
  margin: 100px auto;
`;
const BannerWrap = styled.div`
  width: 1060px;
  overflow-x: hidden;
  display: flex;
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
    color: #000000;
    font-weight: 600;
  }
`;

const AuditionWrap = styled.div`
  width: 1060px;
  margin: 50px auto 50px auto;
`;

const AuditionTitle = styled.div`
  font-size: 42px;
  font-family: SUIT-Medium;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
`;

const AuditionText = styled.div`
  font-size: 20px;
  font-family: SUIT-Medium;
  font-weight: 400;
  color: #666666;
  margin-bottom: 30px;
`;

const AuditionBlockWrap = styled.div`
  justify-content: space-between;
  width: 100%;
  display: grid;
  grid-template-columns: 49% 49%;
`;

const AuditionBlock = styled.div`
  height: 220px;
  border: 1px solid #c4c4c4;
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
`;

const AuditionContentsTheme = styled.div`
  background-color: ${props => props.color};
  display: inline-block;
  padding: 5px 10px;
  font-family: SUIT-Medium;
  font-size: 17px;
  border-radius: 5px;
`;

export default MainPage;

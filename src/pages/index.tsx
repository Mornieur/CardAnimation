import { NextPage } from 'next';
import Head from 'next/head';
import * as S from '../styles/styles';
import styled from 'styled-components';
import { CardEmotion } from '../components/CardEmotion';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  const Layout = styled.div`
    width: 100%;
    overflow-x: hidden;
    //position: relative;
  `;
  return (
    <>
      <Layout>
        <Head>
          <title>CardAnimation | ConsultPage</title>
          <meta name="description" content="Generated by created next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <S.Container>
          {/* <Header /> */}
          <CardEmotion />
        </S.Container>
      </Layout>
    </>
  );
};

export default Home;

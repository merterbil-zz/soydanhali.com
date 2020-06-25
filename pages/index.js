import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { Products } from 'lib/constants/app.constants'

const Title = styled.h1`
    font-size: 4rem;
    line-height: 4rem;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    z-index: 1;
    @media (max-width: 576px) {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
`
const SubTitle = styled.h3`
    font-size: 1.25rem;
    line-height: 1.25rem;
    z-index: 2;
    color: ${({ theme }) => theme.colors.buttonPrimary};
`
const Text = styled.p`
    font-size: .9rem;
    margin-bottom: 1rem;
    z-index: 2;
`
const Section = styled.section`
    position: relative;
    padding: 3rem;
    display: grid;
    @media (max-width: 576px) {
        padding: 1.5rem;
    }
`
const Background = styled.div`
    position: relative;
    height: 40vh;
    z-index: 0;
    overflow: hidden;
    margin: -3rem -3rem -6rem -3rem;
    &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
    @media (max-width: 576px) {
        height: auto;
        margin: -1.5rem;
    }
`
const Gradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.colors.bgSecondary});
    z-index: 1;
`
const Product = styled.div`
    padding: .25rem 0;
`

const Index = () => <>
    <NextSeo titleTemplate="%s | 0541 369 6005 | Eskişehir halı yıkama hizmetleri"
        title="Soydan Halı Yıkama"
        description="Eskişehir Soydan Halı Yıkama her evde bulunan halı, stor perde, yorgan, battaniye gibi ürünlere yıkama ve derinlemesine temizleme hizmeti sunmaktadır."
        canonical="https://soydanhali.com"
        additionalMetaTags={[{
            name: 'keywords',
            content: 'soydan, halı yıkama, eskişehir, stor perde, battaniye, fiyatlar, yorgan, overlok'
        }]} />
    <Section>
        <Background>
            <img src="4.jpg" alt="Soydan halı yıkama" />
            <Gradient />
        </Background>
        <Title>Soydan Halı Yıkama</Title>
        <Text>Eskişehir Soydan Halı Yıkama, her evde bulunan halı, stor perde, yorgan, battaniye gibi ürünlerin derinlemesine temizlenmesini, overlok hizmetiyle ise yıpranmış ürünlerin kesilip temizlenerek yeniden kullanılabilir hale gelmesi sağlanmaktadır.</Text>
        <SubTitle>Fiyatlarımız</SubTitle>
        {Products.map(item => <Product key={item.name}>
            <b>{item.name}</b> : {item.price}
        </Product>)}
    </Section>
</>

export default Index
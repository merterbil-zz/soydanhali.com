import { NextSeo } from 'next-seo'
import styled from 'styled-components'

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
const Section = styled.section`
    position: relative;
    display: grid;
    padding: 3rem;
    @media (max-width: 576px) {
        padding: 1.5rem;
    }
`
const Text = styled.p`
    font-size: .9rem;
    margin-bottom: 1rem;
    z-index: 3;
`
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 1rem));
    grid-gap: 2rem;
    z-index: 1;
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
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

const Iletisim = () => <>
    <NextSeo titleTemplate="%s | 0541 369 6005 | Eskişehir halı yıkama hizmetleri"
        title="İletişim"
        description="Soydan halı yıkama iletişim bilgilerine bu sayfadan ulaşabilirsiniz."
        canonical="https://soydanhali.com/hakkimizda" />
    <Section>
        <Background>
            <img src="3.jpg" alt="Soydan halı yıkama" />
            <Gradient />
        </Background>
        <Title>İletişim</Title>
        <Row>
            <div>
                <SubTitle>Adres bilgilerimiz</SubTitle>
                <Text>Eskişehir Organize Sanayi Bölgesi</Text>
            </div>
            <div>
                <SubTitle>İletişim bilgilerimiz</SubTitle>
                <Text>0541 369 60 05</Text>
            </div>
        </Row>
    </Section>
</>

export default Iletisim
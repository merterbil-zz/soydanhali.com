import { NextSeo } from 'next-seo'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 4rem;
    line-height: 4rem;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    @media (max-width: 576px) {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
`
const Text = styled.p`
    font-size: .9rem;
    margin-bottom: 3rem;
`
const Section = styled.section`
    margin-top: auto;
    margin-bottom: auto;
    padding: 3rem;
    @media (max-width: 576px) {
        padding: 1.5rem;
    }
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
        <Title>Soydan Halı Yıkama</Title>
        <Text>Eskişehir Soydan Halı Yıkama, her evde bulunan halı, stor perde, yorgan, battaniye gibi ürünlerin derinlemesine temizlenmesini, overlok hizmetiyle ise yıpranmış ürünlerin kesilip temizlenerek yeniden kullanılabilir hale gelmesi sağlanmaktadır.</Text>
    </Section>
</>

export default Index
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
const Text = styled.p`
    font-size: .9rem;
    margin-bottom: 1rem;
    z-index: 2;
`
const Section = styled.section`
    position: relative;
    display: grid;
    padding: 3rem;
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

const Hakkimizda = () => <>
    <NextSeo titleTemplate="%s | 0541 369 6005 | Eskişehir halı yıkama hizmetleri"
        title="Hakkımızda"
        description="Soydan halı yıkama ile ilgili detaylı bilgiye bu sayfadan ulaşabilirsiniz."
        canonical="https://soydanhali.com/hakkimizda" />
    <Section>
        <Background>
            <img src="2.jpg" alt="Soydan halı yıkama" />
            <Gradient />
        </Background>
        <Title>Hakkımızda</Title>
        <Text>Eskişehir Soydan Halı Yıkama, her evde bulunan halı, stor perde, yorgan, battaniye gibi ürünlerin derinlemesine temizlenmesini, overlok hizmetiyle ise yıpranmış ürünlerin kesilip temizlenerek yeniden kullanılabilir hale gelmesi sağlanmaktadır.</Text>
        <Text>Shaggy halı, yün halı gibi en sık tercih edilen, kullanımı kolay ancak temizlenmesi hem zaman hem de profesyonel makineler isteyen ürünler, Soydan Halı Yıkama ile kolayca temizlenmektedir. Önceden belirlenen gün ve saatte evlerinizden alınan ürünler, adresinizden çıktıktan sonra ekibimizin deneyimli ellerine emanettir.</Text>
        <Text>Tesisimize gelen her ürün öncelikle cinsine göre ayrılır, daha sonra üzerindeki yıpranmış, lekeli veya daha önceden zarar görmüş noktalar belirlenerek müşterilerimize önceden bilgi verilir. Tüm bu ayırma işlemlerinin ardından halı için en uygun yöntem seçilerek yıkama başlar. Güvenli bir yıkama ve kurutma sürecinin ardından Soydan Halı Yıkamaya emanet ettiğiniz halı, yogan,battaniye, stor perde yine önceden belirtilen tarihte teslim edilir.</Text>
        <Text>Eskişehir halı yıkama firması olarak ilk başta güven ve müşteri memnuniyeti kazanma hedefimiz sayesinde bugün başarıyla sizlere hizmet vermekteyiz. Sizler de kaliteli hizmetimizden faydalanmak için iletişim bilgilerimizden bizler ulaşabilirsiniz.</Text>
    </Section>
</>

export default Hakkimizda
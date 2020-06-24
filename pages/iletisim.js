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
const Section = styled.section`
    margin-top: auto;
    margin-bottom: auto;
    padding: 3rem;
    @media (max-width: 576px) {
        padding: 1.5rem;
    }
`

const Iletisim = () => <>
    <NextSeo titleTemplate="%s | 0541 369 6005 | Eskişehir halı yıkama hizmetleri"
        title="İletişim"
        description="Soydan halı yıkama iletişim bilgilerine bu sayfadan ulaşabilirsiniz."
        canonical="https://soydanhali.com/hakkimizda" />
    <Section>
        <Title>İletişim</Title>
    </Section>
</>

export default Iletisim
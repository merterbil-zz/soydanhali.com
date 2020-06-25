import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import Font from 'lib/utils/font'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Halvetica', 'Arial', sans-serif;
        background-color: ${({ theme }) => theme.colors.bgSecondary};
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: 16px!important;
    }
    .montserrat,
    .montserrat body {
        font-family: Montserrat, sans-serif;
    }
    *,
    :after,
    :before {
        box-sizing: border-box;
        text-size-adjust: 100%;
        outline: none;
    }
    img,
    svg {
        pointer-events: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`
const App = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
    grid-auto-rows: 100vh;
`
const SideBar = styled.div`
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    display: grid;
    grid-template-rows: 4rem calc(100vh - 12rem) 8rem;
`
const NavLink = styled.a`
    display: grid;
    text-align: center;
    opacity: .5;
    transition: all .25s;
    &:hover,
    &:hover > svg,
    &.active,
    &.active > svg {
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.bgSecondary};
        fill: ${({ theme }) => theme.colors.buttonPrimary};
    }
`
const Icon = styled.svg`
    margin: auto;
    width: 1.75rem;
    height: 1.75rem;
    fill: ${({ theme }) => theme.colors.textPrimary};
    &.social {
        width: 2rem;
        height: 2rem;
    }
`
const SiteNav = styled.nav`
    display: grid;
    grid-template-columns: 4rem;
    grid-auto-rows: 4rem;
    margin-top: auto;
    margin-bottom: auto;
`
const SocialNav = styled.nav`
    display: grid;
    grid-template-columns: 4rem;
    grid-auto-rows: 4rem;
`
const Page = styled.main`
    position: relative;
    overflow: auto;
`
const Avatar = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
    object-position: center center;
    margin: 1rem;
`

const Layout = ({ children }) => {
    const router = useRouter()

    useEffect(() => Font(), [])

    return <>
        <GlobalStyle />
        <App>
            <SideBar>
                <Avatar src="favicon-32x32.png" alt="Soydan Halı Yıkama" title="Soydan Halı Yıkama" width={32} />
                <SiteNav>
                    <Link href="/" passHref>
                        <NavLink className={router.pathname === '/' ? 'active' : null} title="Anasayfa" aria-label="Anasayfa">
                            <Icon viewBox="0 0 24 24">
                                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                    <Link href="/hakkimizda" passHref>
                        <NavLink className={router.pathname === '/hakkimizda' ? 'active' : null} title="Hakkımızda" aria-label="Hakkımızda">
                            <Icon viewBox="0 0 24 24">
                                <path d="M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                    <Link href="/iletisim" passHref>
                        <NavLink className={router.pathname === '/iletisim' ? 'active' : null} title="İletişim" aria-label="İletişim">
                            <Icon viewBox="0 0 24 24">
                                <path d="M22,3H2A2,2 0 0,0 0,5V19A2,2 0 0,0 2,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M22,19H2V5H22V19M19,18L21,16L19.5,14H17.85C17.63,13.37 17.5,12.7 17.5,12C17.5,11.3 17.63,10.63 17.85,10H19.5L21,8L19,6C17.7,7 16.73,8.38 16.28,10C16.1,10.64 16,11.31 16,12C16,12.69 16.1,13.36 16.28,14C16.73,15.61 17.7,17 19,18M9,12A3,3 0 0,0 12,9A3,3 0 0,0 9,6A3,3 0 0,0 6,9A3,3 0 0,0 9,12M9,8A1,1 0 0,1 10,9A1,1 0 0,1 9,10A1,1 0 0,1 8,9A1,1 0 0,1 9,8M15,16.59C15,14.09 11.03,13 9,13C6.97,13 3,14.09 3,16.59V18H15V16.59M5.5,16C6.22,15.5 7.7,15 9,15C10.3,15 11.77,15.5 12.5,16H5.5Z" />
                            </Icon>
                        </NavLink>
                    </Link>
                </SiteNav>
                <SocialNav>
                    <NavLink href="https://www.facebook.com/Soydan-Hal%C4%B1-Y%C4%B1kama-103324601249973" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook Soydan Halı Yıkama">
                        <Icon viewBox="0 0 24 24" className="social">
                            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                        </Icon>
                    </NavLink>
                    <NavLink href="https://api.whatsapp.com/send?phone=905413696005&text=Merhaba,%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim?" target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp Soydan Halı Yıkama">
                        <Icon viewBox="0 0 24 24" className="social">
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                        </Icon>
                    </NavLink>
                </SocialNav>
            </SideBar>
            <Page>{children}</Page>
        </App>
    </>
}

export default Layout
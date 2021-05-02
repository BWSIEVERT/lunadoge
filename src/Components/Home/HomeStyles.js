import styled from 'styled-components'

// Images
import DogeImage from './doge.png'
import LunaDogeHero from './lunadogehero.jpg'

// Screen Sizes

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
}

// Media Queries for devices

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
}

export const MainContent = styled.section`
width: 100%;
height: 70vh;
background-image: linear-gradient(rgba(29, 38, 113, 0.8), rgba(0, 0, 0, 0.2)), url(${LunaDogeHero});
background-repeat: no-repeat;
background-size: cover;
box-shadow:0px 2px 2px #333;
@media ${device.mobileL} {
    height: 90vh;
    box-shadow: none;
}
@media ${device.tablet} {
    height: 70vh;
}
`;

export const Navigation = styled.div`
width: 100%;
height: 4vh;
display: inline-flex;
`;

export const NavigationTitleContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
@media ${device.tablet} {
    width: 0;
}
@media ${device.laptop} {
    width: 0;
}
@media ${device.laptopL} {
    width: 50%;
}
`;

export const NavigationIconsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
@media ${device.mobileL} {
    width: 20%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    right: 0;
    justify-content: flex-start;
}
@media ${device.tablet} {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    position: initial;
    right: initial;
    justify-content: center;
}
@media ${device.laptop} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media ${device.laptopL} {
    width: 50%;
}
`;

export const NavigationLinks = styled.a`
text-decoration: none;
font-size: 14px;
color: #fff;
padding: 11px;
transition: 0.5s;
&:hover {
    color: #00FFFF;
    transition: color 0.5s;
}
@media ${device.mobileL} {
    display: none;
}
@media ${device.tablet} {
    display: none;
}
@media ${device.laptop} {
    display: none;
}
@media ${device.laptopL} {
    display: initial;
}
`;

export const HeroContentContainer = styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
@media ${device.mobileL} {
    height: 50%;
}
@media ${device.tablet} {
    height: 80%;
}
`;

export const HeroContent = styled.div`
width: 50%;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media ${device.mobileL} {
    height: 10%;
}
@media ${device.tablet} {
    height: 50%;
}
`;

export const HeroTitle = styled.h1`
margin: 0;
padding: 0;
color: #fff;
font-size: 40px;
font-family: orbitron, sans-serif;
`;

export const HeroSubTitle = styled.p`
margin: 0;
padding: 0;
color: 	#F5F5F5;
text-size: 26px;
font-family: orbitron, sans-serif;
`;

export const DataContainer = styled.div`
width: 100%;
height: 13.5%;
display: flex;
justify-content: space-evenly;
align-items: center;
@media ${device.mobileL} {
    flex-direction: column;
    height: 44%;
    justify-content: space-evenly;
}
@media ${device.tablet} {
    flex-direction: row;
    height: 13.5%;
    justify-content: space-evenly;
}
`;

export const LiveChartButton = styled.button`
padding: 10px 20px;
margin-left: 9%;
cursor: pointer;
font-weight: 600;
border: none;
border-radius: 4px;
background-color: #35B7FF;
font-family: open sans;
font-size: 14px;
transition: 0.6s;
color: 	#1e1e1e;
&:hover {
    opacity: 0.8;
    transition: opacity 0.6s;
}
@media ${device.mobileL} {
    margin-left: 0;
}
@media ${device.tablet} {
    margin-left: 9%;
}
`;

export const DataSubContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
@media ${device.mobileL} {
    padding: 4%;
}
@media ${device.tablet} {
    padding: 0;
}
`;

export const DataValues = styled.p`
margin: 0;
padding: 0;
font-size: 16px;
font-weight: 600;
color: #fff;
font-family: open sans;
`;

export const DataDescription = styled.p`
margin: 0;
padding: 0;
color: 	#F5F5F5;
font-size: 12.8px;
`;

export const FeatureContainer = styled.section`
width: 100%;
height: 70vh;
background-color: #111111;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 6%;
@media ${device.mobileL} {
    width: auto;
    height: auto;
    flex-direction: column;
    margin-bottom: 12%;
    margin-top: 12%;
    justify-content: center;
}
@media ${device.tablet} {
    width: 100%;
    height: auto;
    flex-direction: column;
    margin-bottom: 12%;
    margin-top: 12%;
}
@media ${device.laptop} {
    height: auto;
    flex-direction: column;
    margin-bottom: 8%;
    margin-top: 8%;
}
@media ${device.laptopL} {
    width: 80%
    height: 70vh;
    flex-direction: row;
    margin-bottom: 0;
}
`;

export const FeatureContentContainer = styled.div`
width: 20%;
height: 75%;
display: flex;
justify-content: top;
align-items: center;
flex-direction: column;
background-color: #3A3A3A;
padding: 1.5rem;
border-radius: 8px;
@media ${device.mobileL} {
    justify-content: center;
    width: auto;
    height: auto;
    border-radius: 0px;
    border-bottom: 1px solid black;
}
@media ${device.tablet} {
    justify-content: center;
    width: 50%;
    height: auto;
    border-radius: 0px;
    border-bottom: initial;
}
@media ${device.laptop} {
    justify-content: center;
    width: 50%;
    height: auto;
    border-radius: 0px;
}
@media ${device.laptopL} {
    justify-content: center;
    width: 20%;
    height: 75%;
    border-radius: 8px;
}
`;

export const FeatureContentTitle = styled.h2`
padding: 0;
margin: 0;
font-size: 20px;
text-align: center;
color: #fff;
font-family: open sans;
`;

export const FeatureContentDescription = styled.p`
text-align: center;
font-size: 16px;
word-wrap: break-word;
color: #A6A7A7;
`;

export const RoadMapContainer = styled.section`
width: 100%;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const RoadMapImageContainer = styled.div`
width: 35%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
@media ${device.mobileL} {
    display: none;
}
@media ${device.tablet} {
    display: initial;
}
`;

export const RoadMapContentContainer = styled.div`
width: 35%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media ${device.mobileL} {
    width: 100%;
}
@media ${device.tablet} {
    width: 80%;
    }
@media ${device.laptop} {
width: 50%;
}
`;

export const RoadMapImage = styled.img.attrs({
    src: `${DogeImage}`
})`
margin-left: 8%;
`;

export const RoadMapContentTitle = styled.h3`
font-size: 26px;
font-family: orbitron, sans-serif;
padding: 0;
margin: 0;
margin-right: 40%;
margin-bottom: 2%;
color: #35B7FF;
`;

export const RoadMapContentDescription = styled.p`
padding: 0;
margin: 0;
margin-top: 1%;
margin-right: 5%
text-align: left;
font-size: 18px;
color: rgb(167,168,168);
@media ${device.mobileL} {
    font-size: 12px;
}
@media ${device.tablet} {
    font-size: 18px;
}
`;

export const RoadMapContentDescriptionContainer = styled.div`
margin-left: 15%;
width: 60%;
`;

export const FooterContainer = styled.section`
width: 100%;
height: 25vh;
display: flex;
justify-content: center;
`;

export const FooterContentContainer = styled.div`
width: 35%;
height: 100%;
display: flex;
justify-content: flex-start;
flex-direction: column;
@media ${device.mobileL} {
    width: 75%;
}
@media ${device.tablet} {
    width: 75%;
}
@media ${device.laptop} {
    width: 35%;
}
`;

export const FooterIconsContainer = styled.div`
width: 35%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
@media ${device.mobileL} {
    height: 10%;
    width: 50%;
    margin-top: 37%;
    margin-right: 30%;
    position: absolute;
}
@media ${device.tablet} {
    height: 10%;
    width: 30%;
    margin-top: 16%;
    margin-right: 49%;
    position: absolute;
}
@media ${device.laptop} {
    height: 100%;
    width: 35%;
    margin-top: 0;
    margin-right: 0;
    position: initial;
}
`;

export const FooterContentTitle = styled.h1`
margin-bottom: 0;
font-size: 26px;
color: #fff;
`;

export const FooterContentDescription = styled.p`
padding: 0;
margin: 0;
font-size: 16px;
color: #A6A7A7;
`;
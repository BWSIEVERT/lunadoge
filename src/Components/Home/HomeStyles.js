import styled from 'styled-components'

// Images
import DogeImage from './doge.png'

export const MainContent = styled.section`
width: 100%;
height: 70vh;
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
`;

export const NavigationIconsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
`;

export const NavigationLinks = styled.a`
text-decoration: none;
font-size: 14px;
color: black;
padding: 14px;
transition: 0.5s;
&:hover {
    color: #7332;
    transition: color 0.5s;
}
`;

export const HeroContentContainer = styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
`;

export const HeroContent = styled.div`
width: 50%;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const HeroTitle = styled.h1`
margin: 0;
padding: 0;
font-size: 40px;
font-family: orbitron, sans-serif;
`;

export const HeroSubTitle = styled.p`
margin: 0;
padding: 0;
text-size: 26px;
font-family: orbitron, sans-serif;
`;

export const DataContainer = styled.div`
width: 100%;
height: 13.5%;
display: flex;
justify-content: space-evenly;
align-items: center;
`;

export const LiveChartButton = styled.button`
margin-left: 9%;
`;

export const DataSubContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

export const DataValues = styled.p`
margin: 0;
padding: 0;
font-size: 16px;
font-weight: 600;
`;

export const DataDescription = styled.p`
margin: 0;
padding: 0;
font-size: 12.8px;
`;

export const FeatureContainer = styled.section`
width: 100%;
height: 70vh;

display: flex;
justify-content: space-evenly;
align-items: center;
`;

export const FeatureContentContainer = styled.div`
width: 20%;
height: 75%;
display: flex;
justify-content: top;
align-items: center;
flex-direction: column;
`;

export const FeatureContentTitle = styled.h2`
padding: 0;
margin: 0;
font-size: 20px;
text-align: center;
`;

export const FeatureContentDescription = styled.p`
text-align: center;
font-size: 16px;
word-wrap: break-word;
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
`;

export const RoadMapContentContainer = styled.div`
width: 35%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
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
`;

export const RoadMapContentDescription = styled.p`
padding: 0;
margin: 0;
margin-top: 1%;
margin-right: 5%
text-align: left;
font-size: 18px;
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
width: 20%;
height: 100%;
display: flex;
justify-content: flex-start;
flex-direction: column;
`;

export const FooterIconsContainer = styled.div`
width: 35%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
`;

export const FooterContentTitle = styled.h1`
margin-bottom: 0;
font-size: 26px;
`;

export const FooterContentDescription = styled.p`
padding: 0;
margin: 0;
font-size: 16px;
`;
import React, { useState } from "react";

// Stylesheet
import './Home.css'

// Styled-Components Stylesheet
import {
  MainContent,
  Navigation,
  NavigationTitleContainer,
  NavigationIconsContainer,
  NavigationLinks,
  HeroContentContainer,
  HeroContent,
  HeroTitle,
  HeroSubTitle,
  DataContainer,
  LiveChartButton,
  DataSubContainer,
  DataValues,
  DataDescription,
  FeatureContainer,
  FeatureContentContainer,
  FeatureContentTitle,
  FeatureContentDescription,
  RoadMapContainer,
  RoadMapImageContainer,
  RoadMapContentContainer,
  RoadMapImage,
  RoadMapContentTitle,
  RoadMapContentDescriptionContainer,
  RoadMapContentDescription,
  FooterContainer,
  FooterContentContainer,
  FooterIconsContainer,
  FooterContentTitle,
  FooterContentDescription
} from "./HomeStyles";

// Icons
import {
  FaGithub,
  FaMedium,
  FaTelegram,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaHandHoldingUsd,
  FaCheck,
  FaChevronRight,
} from "react-icons/fa";
import { CgCommunity, CgLock } from "react-icons/cg";

// Components
import Burger from './Burger'
import Menu from './Menu'

const Home = () => {

    const [ open, setOpen ] = useState(false);

  return (
    <>
      <MainContent>
        <Navigation>
          <NavigationTitleContainer>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            <NavigationLinks style={{ marginLeft: "40%" }} href="/">
              Home
            </NavigationLinks>
            <NavigationLinks href="/">About</NavigationLinks>
            <NavigationLinks href="/">White Paper</NavigationLinks>
            <NavigationLinks href="/">How to Buy</NavigationLinks>
            <NavigationLinks href="/">Our Team</NavigationLinks>
          </NavigationTitleContainer>
          <NavigationIconsContainer>
            <FaGithub
                id='reactIcon'
              style={{
                width: "22px",
                height: "22px",
                padding: "14px",
                cursor: "pointer",
              }}
            />
            <FaMedium
            id='reactIcon'
              style={{
                width: "22px",
                height: "22px",
                padding: "14px",
                cursor: "pointer",
              }}
            />
            <FaTelegram
            id='reactIcon'
              style={{
                width: "22px",
                height: "22px",
                padding: "14px",
                cursor: "pointer",
              }}
            />
            <FaTwitterSquare
            id='reactIcon'
              style={{
                width: "22px",
                height: "22px",
                padding: "14px",
                cursor: "pointer",
              }}
            />
            <FaYoutubeSquare
            id='reactIcon'
              style={{
                width: "22px",
                height: "22px",
                padding: "14px",
                cursor: "pointer",
                // marginRight: "40%",
              }}
            />
          </NavigationIconsContainer>
        </Navigation>
        <HeroContentContainer>
          <HeroContent>
            <HeroTitle>LunaDoge</HeroTitle>
            <HeroSubTitle>An ethical Memecoin</HeroSubTitle>
          </HeroContent>
        </HeroContentContainer>
        <DataContainer>
          <LiveChartButton>Live Chart</LiveChartButton>
          <DataSubContainer>
            <DataValues>$0.000000002349</DataValues>
            <DataDescription>Value</DataDescription>
          </DataSubContainer>
          <DataSubContainer>
            <DataValues>1,000+</DataValues>
            <DataDescription>Holders</DataDescription>
          </DataSubContainer>
          <DataSubContainer>
            <DataValues>$?</DataValues>
            <DataDescription>Liquidity</DataDescription>
          </DataSubContainer>
          <DataSubContainer>
            <DataValues>$2,357,311</DataValues>
            <DataDescription>Market Cap</DataDescription>
          </DataSubContainer>
        </DataContainer>
      </MainContent>
      <FeatureContainer>
        <FeatureContentContainer>
          <CgCommunity
            style={{
              width: "100px",
              height: "100px",
              padding: "0",
              marginBottom: "10%",
              color: '35B7FF'
            }}
          />
          <FeatureContentTitle>100% Community Driven</FeatureContentTitle>
          <FeatureContentDescription>
            LunaDoge is fully transparent and used a fair launch to distribute
            the tokens. All team tokens and LP tokens have been locked.
          </FeatureContentDescription>
          <FeatureContentDescription>
            Holders earn passive rewards through static reflection as they watch
            their balance of $LOGE grow exponentially.
          </FeatureContentDescription>
          <FeatureContentDescription>
            Every trade contributes towards automatically generating liquidity
            locked inside the PancakeSwap LP.
          </FeatureContentDescription>
        </FeatureContentContainer>
        <FeatureContentContainer>
          <CgLock
            style={{
              width: "100px",
              height: "100px",
              padding: "0",
              marginBottom: "10%",
              color: '35B7FF'
            }}
          />
          <FeatureContentTitle>Liquidity Locked</FeatureContentTitle>
          <FeatureContentDescription>
            Team tokens (24% of the total supply) have been locked using third
            party provider DXSale. Since we have implemented the anti-whale
            mechanism where the maximum transaction size is limited to 0.5% of
            the total supply, we conducted several separate transactions to make
            this possible.
          </FeatureContentDescription>
        </FeatureContentContainer>
        <FeatureContentContainer>
          <FaHandHoldingUsd
            style={{
              width: "100px",
              height: "100px",
              padding: "0",
              marginBottom: "10%",
              color: '35B7FF'
            }}
          />
          <FeatureContentTitle>Hold and Earn</FeatureContentTitle>
          <FeatureContentDescription>
            Every transaction incurs a 10% fee with 5% distributed to holders -
            $LOGE will automatically get added to your wallet so there's nothing
            you have to do but simply HOLD and be REWARDED. The other 5% is
            permanently added to a liquidity creating a steady rising price
            floor.
          </FeatureContentDescription>
          <FeatureContentDescription>
            An additional anti-whale measure has also been implemented which
            rejects transactions greater than 0.5% to prevent manipulation.
          </FeatureContentDescription>
        </FeatureContentContainer>
      </FeatureContainer>
      <RoadMapContainer>
        <RoadMapImageContainer>
          <RoadMapImage />
        </RoadMapImageContainer>
        <RoadMapContentContainer>
          <RoadMapContentTitle>Q2 - 2021</RoadMapContentTitle>
          <RoadMapContentDescriptionContainer>
            <RoadMapContentDescription>
              <FaCheck
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#2dce89' }}
              />
              Token launch
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaCheck
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#2dce89' }}
              />
              Website
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaCheck
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#2dce89' }}
              />
              Github project start
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Marketing campaign
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Giveaways and community contests
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Coingecko listing
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Coinmarketcap listing
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Charity event
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              External audit
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Website improvements
            </RoadMapContentDescription>
          </RoadMapContentDescriptionContainer>
          <RoadMapContentTitle style={{marginTop: '2%'}}>Q3 - 2021</RoadMapContentTitle>
          <RoadMapContentDescriptionContainer>
            <RoadMapContentDescription>
            <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              LunaDoge Mars Program
            </RoadMapContentDescription>
            <RoadMapContentDescription>
            <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Cross-chain integration
            </RoadMapContentDescription>
            <RoadMapContentDescription>
            <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Token farming
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Partnership rollout
            </RoadMapContentDescription>
            <RoadMapContentDescription>
              <FaChevronRight
                style={{ marginRight: "3%", width: "15px", height: "15px", color: '#FB6340' }}
              />
              Community growth
            </RoadMapContentDescription>
          </RoadMapContentDescriptionContainer>
        </RoadMapContentContainer>
      </RoadMapContainer>
      <FooterContainer>
          <FooterContentContainer>
              <FooterContentTitle>
                  LunaDoge
              </FooterContentTitle>
              <FooterContentDescription>
                  LunaDoge is a fork of MoonRat and Safemoon. Both projects have been audited by CertiK, assuring users that there is no backdoor in the code for the team to scam its investors.
              </FooterContentDescription>
              <FooterContentDescription style={{marginTop: '10%'}}>
              © 2021 LunaDoge | All Right Reserved.
              </FooterContentDescription>
          </FooterContentContainer>
          <FooterIconsContainer>
          <FaGithub
          id='reactIcon'
              style={{
                width: "30px",
                height: "30px",
                padding: "14px",
                cursor: "pointer",
              }}
            />
            <FaMedium
            id='reactIcon'
              style={{
                width: "30px",
                height: "30px",
                padding: "14px",
                cursor: "pointer",
              }}
            />
            <FaTelegram
            id='reactIcon'
              style={{
                width: "30px",
                height: "30px",
                padding: "14px",
                cursor: "pointer",
              }}
            />
            <FaTwitterSquare
            id='reactIcon'
              style={{
                width: "30px",
                height: "30px",
                padding: "14px",
                cursor: "pointer",
              }}
            />
            <FaYoutubeSquare
            id='reactIcon'
              style={{
                width: "30px",
                height: "30px",
                padding: "14px",
                cursor: "pointer",
              }}
            />
          </FooterIconsContainer>
      </FooterContainer>
    </>
  );
};

export default Home;

import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';
import { COLORS, QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </MiniStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'market'
    'sports';
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas: 'market sports';
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  grid-area: market;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray['300']};
    padding-right: 1rem;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;

const SportsSection = styled.section`
  grid-area: sports;

  @media ${QUERIES.laptopAndUp} {
    margin-left: 1rem;
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    overflow-x: scroll;
  }
`;

const MiniStoryWrapper = styled.div`
  flex: 1 0 220px;
`;

export default SpecialtyStoryGrid;

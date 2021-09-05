import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story) => (
            <BorderedStory key={story.id}>
              <SecondaryStory {...story} />
            </BorderedStory>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story) => (
            <BorderedStory tabletBorder={false} key={story.id}>
              <OpinionStory {...story} />
            </BorderedStory>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const BorderedStory = styled.div`
  padding: 16px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${COLORS.gray['300']};
  }

  ${(props) =>
    props.tabletBorder === false &&
    `@media ${QUERIES.tabletOnly} {
      &:not(:last-of-type) {
        border-bottom: none;
      }
    }`}
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  ${OpinionSection} & {
    @media ${QUERIES.tabletOnly} {
      flex-direction: revert;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;

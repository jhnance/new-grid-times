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
  &:not(:last-of-type) {
    border-bottom: 1px solid ${COLORS.gray['300']};
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  ${(props) =>
    props.tabletBorder === false &&
    `@media ${QUERIES.tabletOnly} {
      &:not(:last-of-type) {
        border-bottom: none;
        padding-bottom: none;
        margin-bottom: none;
      }
    }`}
`;

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  margin-bottom: 48px;

  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
    gap: 48px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';

    grid-template-columns: 4fr 3fr 2fr;
    gap: ${18 / 16}rem;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid ${COLORS.gray['300']};
    padding-right: 1rem;
    margin-right: 1rem;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray['300']};
    padding-right: 1rem;
  }
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
      gap: 2rem;

      & ${BorderedStory} {
        flex: 1;
      }
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 1rem;
    border-top: 1px solid ${COLORS.gray['300']};
  }
`;

export default MainStoryGrid;

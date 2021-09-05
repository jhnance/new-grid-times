import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <BorderedStory>
      <a href={`/story/${id}`}>
        <Wrapper>
          <Avatar alt="" src={avatar} />
          <div>
            <AuthorName>{author}</AuthorName>
            <ArticleTitle>{title}</ArticleTitle>
          </div>
        </Wrapper>
      </a>
    </BorderedStory>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: 'opinion-headline opinion-author-avatar';

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
  }
`;

const BorderedStory = styled.div`
  padding: 16px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${COLORS.gray['300']};
  }

  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      border-bottom: none;
    }
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: opinion-author-avatar;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;

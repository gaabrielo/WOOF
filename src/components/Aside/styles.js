import styled from 'styled-components';

export const Container = styled.aside`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  align-items: center;
  justify-content: space-between;

  background: var(--yellow);

  > img {
    width: 5rem;
  }

  > span {
    max-width: 18.75rem;

    font-size: 0.8rem;
    font-weight: 400;
    text-align: center;

    a {
      font-weight: 700;
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;

  h1 {
    font-size: 3rem;
    line-height: 140%;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 140%;
    margin-top: 1rem;
  }
`;

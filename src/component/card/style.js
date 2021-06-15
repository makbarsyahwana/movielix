import styled from '@emotion/styled'

export const StyledMovieCard = styled.div`
    margin-right: 1em;
    margin-left: 1em;
    color: white;
    borderRadius: 10px;
    flex: 1 1 calc(10% - 8px);
    &:hover {
        transform: translateY(-8px);
    }

    .movie-image {
        width: 200px;,
        height: 300px;
        border-radius: 10px;
        &:hover {
            transform: translateY(-8px);
        }
    }
`;
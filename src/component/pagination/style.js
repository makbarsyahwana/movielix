import styled from '@emotion/styled'

export const StyledPagination = styled.ul`
    padding-left: 0;
    margin: 20px 0;

    li {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 0;
        padding: 0.75rem 0.75rem;
        float: left:
        color: black;
        background-color: #f5f6f7 ;
        border-color: #ced4da ;
        border-radius: 4px;
        border: 5px;
        min-width: 3rem;
        &:hover {
            background: #aeb1b5;
        }
    }

    li.active {
        color: white;
        background-color: #4d4f52 ;
    }

    
`;
import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 10rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        background: var(--blue-light);
        color: var(--background);
        border: none;
        border-radius: 0.3rem;
        padding: 0.75rem 2rem;

        transition: filter .2s;

        &:hover{
            filter: brightness(.9);
        }
    }
`
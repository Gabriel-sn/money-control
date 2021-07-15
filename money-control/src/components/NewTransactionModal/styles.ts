import styled from "styled-components";
import { darken, transparentize} from "polished";

export const Container = styled.form`
    h2{
        color: var(--titulos);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        border: solid #d7d7d7;
        background: #e7e9ee;

        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: .25rem;
        
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--textos)
        }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        background: var(--green);
        color: #fff;
        font-size: 1rem;
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border: none;
        margin-top: 1rem;
        border-radius: .25rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionType = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
`

interface TransactionTypeButtonProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E62E4D'
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
    height: 4rem;
        border: 2px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props) => props.isActive ?
            transparentize(.9, colors[props.activeColor]) : 'transparent'};

        display: flex;
        justify-content: center;
        align-items: center;
        transition: border-color .2s;

        &:hover{
            border-color: ${darken(.1, '#d7d7d7')};
        }

        img{
            width: 20px;
            height: 20px;
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--titulos)
        }
`
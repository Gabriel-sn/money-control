import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--textos);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--textos);

            &:first-child{
                color: var(--titulos)
            }

            &.deposit{
                color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }
        }

        td:first-child { border-top-left-radius: .25rem; }
        td:last-child { border-top-right-radius: .25rem; }
        td:first-child { border-bottom-left-radius: .25rem; }
        td:last-child { border-bottom-right-radius: .25rem; }
    }
`
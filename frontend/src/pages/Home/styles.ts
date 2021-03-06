import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    table{
        background: var(--shape);
        width: 100%;
        border-spacing: 0 0.5rem;
        border-radius: 0.25rem;


        th{
            color: var(--background);            
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        tbody{
            box-shadow: 0 -0.2rem 0.7rem rgba(0,0,0, 0.1);
            tr{
                box-shadow: 0.1rem 0.1rem 0.3rem rgba(0,0,0, 0.1);
            }
        }
        td{
            padding: 1rem 2rem;
            border: 0;
            color: var(--text-title);

            &.deposit{
                color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }
        }

        animation: up 200ms ease-out;

        @keyframes up{
        from{
            opacity: 0;
            transform: translateY(15px);
        }
        to{
            opacity: 1;
        }
    }

    }

    button{
        width: 30%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--blue-light);
        color: #FFF;
        border-radius: 1.5rem;
        border: none;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        
        transition: filter 0.2s ease-in-out;

        &:hover{
            filter: brightness(0.9)
        }
    }
`
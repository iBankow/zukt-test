import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 2.5rem 4rem;
`

export const FormContainer = styled.div`
    width: 100%;
    height: 600px;
    background-color: var(--shape);
    border-radius: 0.5rem;
    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0,0,0, 0.4);
    text-align: center;

    a{
        margin-top: 5rem;
        text-decoration: none;
        color: white;
        font-size: 0.9rem;

        transition: filter 0.2 ease-in-out;

        &:hover {
            filter: brightness(0.8);
        }
    } 
`
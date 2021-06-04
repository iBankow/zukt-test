import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    div.container{
        max-width: 1000px;
        margin: 0 auto;
        padding: 2.5rem 4rem;
    }

    :root{
        --blue-light: #6933FF;
        
        --text-title: #F0F2F5;
        --text-body: #969CB3;
        
        --background: #e0bb30;
        --shape: #412a62;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }        
        @media(max-width: 720px){
            font-size: 87.5%;
        }

    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    form {
        padding-top: 4rem;        
        padding-bottom: 4rem;        
        img {
            padding-bottom: 2rem;
            width: 45%;
        }
        h2{
            color: var(--text-title);
            font-size: 3rem;
            padding-bottom: 1rem;
        }

        input{
            width: 80%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;
    
            border: 1px solid #d7d7d7;
            background: #e7e9ee;
    
            font-weight: 400;
            font-size: 1rem;
    
            &::placeholder{
                color: var(--text-body);
            }
    
            & + input {
                margin-top: 1rem;
        }
    }
    button[type=submit]{
        width: 50%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--background);
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
}
`

export default GlobalStyle;
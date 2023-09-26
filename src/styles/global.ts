import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background:#f8f2f3;
        --red: #e52e4d;
        --blue:#5429CC;
        --green:#35CC95;
        --blue-light:#6938FF;

        --text-title:#363F5F;
        --text-body:#969CB3;

        --background:#F0F2F5;
        --shape:#FFFFFF;
    }
   
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;

    }
    html{
        @media (max-width:1080px) {
            font-size:93.75%
        }
        @media (max-width: 720px) {
            font-size:87.5%;
        }
    }
    body{
        background:var(--background);
    }
    body, input,textarea, button{
        font-family: 'Roboto', sans-serif;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity:0.7;
        cursor:not-allowed
    }

`
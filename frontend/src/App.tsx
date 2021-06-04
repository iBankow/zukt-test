import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </>
  );
}
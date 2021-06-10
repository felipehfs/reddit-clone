import Routes from './Routes';
import UITheme from './styles/themes/UITheme';
import CssReset from './styles/CssReset'

function App() {
  return (
    <>
    <CssReset />
    <UITheme>
      <Routes />
    </UITheme>
    </>
  );
}

export default App;

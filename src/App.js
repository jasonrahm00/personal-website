import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import ScrollToTop from './components/base/nav/scrollToTop';
import About from './components/pages/about';
import Experience from './components/pages/experience';
import MainFooter from './components/base/mainFooter';
import MainNav from './components/base/nav/mainNav';
import Skills from './components/pages/skills';
import Education from './components/pages/education';
import Theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <MainNav />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" render={() => <About />}/>
          <Route exact path="/experience" render={() => <Experience />}/>
          <Route exact path="/skills" render={() => <Skills />}/>
          <Route exact path="/education" render={() => <Education />}/>
        </Switch>
        <MainFooter />
      </Router>    
    </ThemeProvider>
  );
}

export default App;

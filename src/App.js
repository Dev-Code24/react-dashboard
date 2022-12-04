import { ColorModeContext, useMode } from './theme.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Form from './scenes/form';
import Calendar from './scenes/calendar';
import FAQ from './scenes/faq';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';
import Geography from './scenes/geography';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="Dashboard-App/" element={<Dashboard />}></Route>
              <Route path="Dashboard-App/team" element={<Team />}></Route>
              <Route path="Dashboard-App/contacts" element={<Contacts />}></Route>
              <Route path="Dashboard-App/invoices" element={<Invoices />}></Route>
              <Route path="Dashboard-App/form" element={<Form />}></Route>
              <Route path="Dashboard-App/calendar" element={<Calendar />}></Route>
              <Route path="Dashboard-App/faq" element={<FAQ />}></Route>
              <Route path="Dashboard-App/bar" element={<Bar/>}></Route>
              <Route path="Dashboard-App/pie" element={<Pie />}></Route>
              <Route path="Dashboard-App/line" element={<Line />}></Route>
              <Route path="Dashboard-App/geography" element={<Geography />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

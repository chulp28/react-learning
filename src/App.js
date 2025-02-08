import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import MainLayout from './layouts/MainLayout';
import Courses from './components/pages/Courses';
import Course from './components/pages/Course';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug/:id" element={<Course />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

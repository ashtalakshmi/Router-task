
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menubar from './components/MenuBar';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import Contact from './components/Contact';
import './components/style.css';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import ArticleForm from './articleform/ArticleForm';
import YupArticle from './articleform/YupArticle';
import SignUp from './articleform/SignUp';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/details' element={<Details/>}>
          <Route path='/details/content1' element={<Content1/>}/>
          <Route path='/details/content2' element={<Content2/>}/>
          <Route path='/details/content3' element={<Content3/>}/>
        </Route>
        <Route path='/articleform' element={<ArticleForm/>}/>
        <Route path='/yuparticle' element={<YupArticle/>}/>
        <Route path='/signup' element={<SignUp/>}/>

        <Route path='*' element={<h1>No page found</h1>}/>
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

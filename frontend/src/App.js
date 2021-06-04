
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Top from './components/Top'
import Home from './components/Home'
import Projects from './containers/Projects'
import BlogPosts from './containers/BlogPosts'
import Login from './components/Login'
function App() {

  return (
    <div className="h-screen flex flex-col font-body">
      <Router>
        <Top></Top>
        <Route exact path="/" component={Home}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/blog" component={BlogPosts}></Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;

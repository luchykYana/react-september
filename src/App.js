import './App.css'
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';


export default function App() {
  return (
      <div>
        <div className={'up'}>
          <Users/>
          <Posts/>
        </div>
        <div className={'down'}>
          <Comments/>
        </div>
      </div>
  );
}

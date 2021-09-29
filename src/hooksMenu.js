import {Link, Route, useRouteMatch, Switch} from 'react-router-dom' 
import ShowRandomName from './components/stateEffect';
import ShowName from './hooks/useRandomName';
import ComponentWithContext from './components/useContext';
import Counter from './components/useReduser';
import MemoComponent from './components/useMemoCallback';


const HooksMenu = () => {
    let {url } = useRouteMatch();
  
    return(
      <div>
      <div className='App'>
        <li>
          <Link to={`${url}/userHook`}>userHook</Link>
        </li>
        <li>
          <Link to={`${url}/state-effect`}>useState-useEffect</Link>
        </li>
        <li>
          <Link to={`${url}/useContext`}>useContext</Link>
        </li>
        <li>
          <Link to={`${url}/useReducer`}>useReduce</Link>
        </li>
        <li>
          <Link to={`${url}/useMemoCallback`}>useMemo-useCallback</Link>
        </li>
      </div>
      <Switch>
          <Route path={`${url}/userHook`} component={ShowName}/>
          <Route path={`${url}/state-effect`} component={ShowRandomName}/>
          <Route path={`${url}/useContext`} component={ComponentWithContext}/>
          <Route path={`${url}/useReducer`}><Counter initialCount={0}/></Route>
          <Route path={`${url}/useMemoCallback`} component={MemoComponent}/>
        </Switch>
      </div>
    )
  }

  export default HooksMenu
import React from 'react';
import { Switch } from 'react-router-dom';
import SongList from '../component/songList';
import SingerList from '../component/singerList';
import SignIn from '../component/signIn/signIn';
import TaskList from '../component/taskList';
import Route from './route'

const Routes = () => {
    return (
        <Switch>
            <Route path="/tasks" component={TaskList} isPrivate />
            <Route path="/songs" component={SongList} />
            <Route path="/singers" component={SingerList}  />
            <Route component={SignIn} />
        </Switch>
    );
};


export default Routes;
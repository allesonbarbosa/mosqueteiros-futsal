import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import TeamCast from './containers/TeamCast';
import ScheduleMarch2020 from './containers/ScheduleMarch2020'
import ScheduleSeptember2021 from './containers/ScheduleSeptember2021';
import ScheduleOctober2021 from './containers/ScheduleOctober2021';
import ScheduleNovember2021 from './containers/ScheduleNovember2021';
import ScheduleDecember2021 from './containers/ScheduleDecember2021';


function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/elenco" component={TeamCast}/>
                <Route exact path="/agenda-jogos/março/2020" component={ScheduleMarch2020}/>
                <Route exact path="/agenda-jogos/setembro/2021" component={ScheduleSeptember2021}/>
                <Route exact path="/agenda-jogos/outubro/2021" component={ScheduleOctober2021}/>
                <Route exact path="/agenda-jogos/novembro/2021" component={ScheduleNovember2021}/>
                <Route exact path="/agenda-jogos/dezembro/2021" component={ScheduleDecember2021}/>
            </Switch>
        </Router>
    )
}

export default Routes;
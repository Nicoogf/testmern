import React from 'react';
import { BrowserRouter as Router , Switch ,  Route } from "react-router-dom" ; 

function AppRouter() {
  return (
   
  
        <Router>
            <Switch>
                
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/account" component={AccountPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/project/:projectId" component={ProjectPage}/>
                <Route exact path="/admin/user" component={UserPages} />
                <Route exact path='*' component={NotFoundPage} />

            </Switch>
        </Router>
  )
}

export default AppRouter
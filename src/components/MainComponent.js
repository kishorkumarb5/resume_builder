import React, { Component } from 'react';
import ResumePrintView from './Template_1/ResumePrintViewComponent'
import ResumeEditor from './Resume_Editor/ResumeEditorComponent'
import { RESUME_DATA } from '../data/resume_data';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
<<<<<<< HEAD
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { fetchResume, saveResume, updateResume } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    resume: state.resume
  }
}

const mapDispatchToProps = dispatch => ({
  fetchResume: (resumeID) => { dispatch(fetchResume(resumeID))},
  updateResume: (resume) => dispatch(updateResume(resume)),
  saveResume: (resume) => dispatch(saveResume(resume))
});
=======
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8

class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      hideHeader: false
    }
  }

  componentDidMount() {
    this.setState({
      hideHeader: (this.props.location.pathname.includes("ScreenShotView")) 
    })
  }

  render() {
    return (
      <div>

<<<<<<< HEAD
        <div className="container-fluid d-print-none" hidden={this.state.hideHeader}>
          <Header fetchResume={this.props.fetchResume}/>
        </div>
        
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                <Route exact path='/editor' component={() => <ResumeEditor resume={this.props.resume} saveResume={this.props.saveResume} updateResume={this.props.updateResume} />} />
                <Route exact path='/Preview' component={() => <div className="book"><div className="page"><ResumePrintView resume={this.props.resume} /></div></div>  }/>
                <Route exact path='/ScreenShotView' component={() => <><div hidden={this.state.hideHeader}>Refresh the page to hide header</div><ResumePrintView resume={this.props.resume} /></>} />
                <Redirect to="/editor" />
                {/* <ResumePrintView resume={RESUME_DATA} /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
=======
        <div className="containerfluid d-print-none">
          {/* <Header />
          <Route exact path='/editor' component={() => <ResumeEditor resume={this.props.resume} />} /> */}
        </div>
        <div>
          <ResumePrintView resume={RESUME_DATA} />
        </div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

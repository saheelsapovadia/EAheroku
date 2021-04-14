import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from '../Home/Home';
import Novel from '../Novel/Novel';
import Chapter from '../Chapter/Chapter';
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';
import { connect } from 'react-redux';
//import ProtectedRoute from '../../utils/ProtectedRoute';
import * as actions from '../../Store/actions/index';
import AddNovel from '../Admin/AddNovel';
import AllNovels from '../Admin/AllNovels';
import NovelPage from '../Admin/Novel/NovelPage';
import ChapterPage from '../Admin/ChapterPage';
import AddChapter from '../Admin/AddChapter';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../utils/ScrollToTop';
import NotFound from '../NotFound/NotFound';
import Aboutus from '../AboutUs/Aboutus';
import ContactUs from '../ContactUs/ContactUs';
import CommentPolicy from '../DisqusComment/CommentPolicy';
import EditNovel from '../Admin/EditNovel';
import EditChapter from '../Admin/EditChapter';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Library from '../Library/Library';

export const history = createBrowserHistory();
history.listen((location) => {
  console.log('location pathname: ', location.pathname);
  ReactGA.pageview(location.pathname + location.search);
});

class Layout extends Component {
  componentDidMount() {
    if (localStorage.getItem('userToken') !== null) {
      console.log('auto logging...', localStorage.getItem('userToken'));
      this.props.userLogin(localStorage.getItem('userToken'));
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged(this.props.location);
    }
  }

  onRouteChanged(location) {
    console.log('ROUTE CHANGED');
    console.log('location pathname: ', location.pathname);
    ReactGA.pageview(location.pathname + location.search);
  }

  render() {
    console.log('Layout Component');
    // if (localStorage.getItem('userToken') !== null) {
    //   this.props.userLogin(localStorage.getItem('userToken'));
    // }

    return (
      <Aux>
        <Navbar></Navbar>

        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/comment-policy" exact component={CommentPolicy}></Route>
          <Route path="/aboutus" exact component={Aboutus}></Route>
          <Route path="/library" exact component={Library}></Route>
          <Route path="/contactus" exact component={ContactUs}></Route>
          <Route path="/novels/:id" exact component={Novel}></Route>
          <Route
            path="/novels/:id/:chapterId"
            exact
            component={Chapter}
          ></Route>
          {/* <ProtectedRoute path='/profile' component={Profile} /> */}
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/login" exact component={Auth}></Route>
          <Route path="/admin/postnovel" exact component={AddNovel}></Route>
          <Route path="/admin/novels" exact component={AllNovels}></Route>
          <Route path="/admin/novels/:id" exact component={NovelPage}></Route>
          <Route
            path="/admin/novels/edit/:id"
            exact
            component={EditNovel}
          ></Route>
          <Route
            path="/admin/novels/:id/:chapterId"
            exact
            component={ChapterPage}
          ></Route>

          <Route
            path="/admin/novels/editchapter/:id/:chapterId"
            exact
            component={EditChapter}
          ></Route>
          <Route
            path="/admin/addchapter/:novelId"
            exact
            component={AddChapter}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>

        <Footer />
      </Aux>
    );
  }
}

// class ProtectedRoute extends Component {
//   render() {
//     const { component: Component, ...props } = this.props;

//     return (
//       <Route
//         {...props}
//         render={(props) =>
//           this.props.isSignedIn ? (
//             <Component {...props} />
//           ) : (
//             <Redirect to='/login' />
//           )
//         }
//       />
//     );
//   }
// }

// class AllRoutes extends Component {
//   render() {
//     return (
//       <Switch>
//         <Route path='/login' component={Login} />
//         <ProtectedRoute path='/welcome' component={Welcome} />
//       </Switch>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.user.isSignedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (token) => dispatch(actions.userLogin(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));

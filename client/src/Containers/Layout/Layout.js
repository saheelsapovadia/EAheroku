import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import AddChapter from '../Admin/AddChapter';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../utils/ScrollToTop';
class Layout extends Component {
  componentDidMount() {
    if (localStorage.getItem('userToken') !== null) {
      console.log('auto logging...');
      this.props.userLogin(localStorage.getItem('userToken'));
    }
  }
  render() {
    //console.log('Layout Component');
    // if (localStorage.getItem('userToken') !== null) {
    //   this.props.userLogin(localStorage.getItem('userToken'));
    // }
    return (
      <Aux>
        <ScrollToTop />
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/novels/:id' exact component={Novel}></Route>
          <Route path='/novels/:id/:no' exact component={Chapter}></Route>
          {/* <ProtectedRoute path='/profile' component={Profile} /> */}
          <Route path='/profile' exact component={Profile}></Route>
          <Route path='/login' exact component={Auth}></Route>
          <Route path='/postnovel' exact component={AddNovel}></Route>
          <Route path='/allnovels' exact component={AllNovels}></Route>
          <Route path='/adminnovels/:id' exact component={NovelPage}></Route>
          <Route
            path='/addchapter/:novelId'
            exact
            component={AddChapter}
          ></Route>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

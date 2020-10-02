import React from 'react';
import './App.scss';
import { connect } from "react-redux";
import Store from './components/Store/Store';
import Show from './components/Show/Show';
import Nav from './components/Nav/Nav';

const App = (props) => {

  return (
    <div className="app">
      <Nav />
      <div className="Stores">
        <Store />
      </div>
      {props.show ?
        <div>
          {
            props.clothes.map((item) => (
              <Show key={item.id}
                id={item.id}
                result={item.total}
                price={item.price}
                image={item.img}
                name={item.name}
                quantity={item.quantity} />
            ))
          }
        </div>
        :
        ''
      }
    </div>
  );

}

const mapStateToProps = state => {
  return {
    clothes: state.clothes,
    show: state.show,
  };
};

export default connect(mapStateToProps)(App);

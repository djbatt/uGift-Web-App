import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { businesses: state.businesses };
};

const ConnectedList = ({businesses}) => (
  <ul className="list-group list-group-flush">
    {businesses.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;

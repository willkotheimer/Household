import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import householdData from '../../helpers/data/houseHoldUsers';
import choreData from '../../helpers/data/choresData';
import Week from '../../helpers/data/weekNum';

export default class AssignmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      useSelection: [],
      assignments: [],
      selected: [],
      used: [],
      week: Week.thisWeek(),
    };
  }

  componentDidMount() {
    choreData.getChoresByHousehold(this.props.householdId).then((options) => {
      const myarr = [];
      options.forEach((op) => {
        myarr.push({ value: op.id, label: op.name });
      });
      myarr.filter((item) => !this.state.used.includes(item.value));
      this.setState({ useSelection: myarr });
    });
  }

  changeHandler = (value, e) => {
    console.warn(value, e.id);
    /* const myAssignment = {
      userId: allthethings.name.id,
      week: this.state.week,
      isCompleted: false,
      rating: 0,
      choreId: e[0].value,
    };
    const prevAssignments = this.state.assignments; */
    const difference = this.state.selected.filter((x) => !value.includes(x)); // calculates diff
    console.log('Removed: ', difference); // prints array of removed
    this.setState({ selected: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
  };

  render() {
    const { useSelection, week } = this.state;
    const MyComponent = ({ person }) => (
      <Select name={person}
              className="mt-4 col-md-6 col-offset-4"
              components={makeAnimated()}
              options={useSelection}
              onChange={(e, things) => this.changeHandler(e, things)}
              value={this.state.selected}
              isMulti />
    );

    return (
          <>
          <div className='assignment-form'>
          <h1>Chores for Week {week} </h1>
          <Form style= {{ width: '75%' }} onSubmit={(e) => this.handleSubmit(e)}>
            {this.props.userHousehold[0]
            && this.props.userHousehold[0].map((person, index) => (
                <>
                <div>{person.firstname}</div>
                <MyComponent person={person} key={index} />
                </>
            ))}
          </Form>
          </div>
          </>
    );
  }
}

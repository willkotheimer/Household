import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  Form, Button,
} from 'reactstrap';
import householdData from '../../helpers/data/houseHoldUsers';
import choreData from '../../helpers/data/choresData';
import assignment from '../../helpers/data/assignmentData';
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

  changeHandler = (value) => {
    console.warn(value);
    this.setState({ selected: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.selected.map((item) => {
      const myAssignment = {
        userId: this.props.person.id,
        week: this.state.week,
        isCompleted: false,
        rating: 0,
        choreId: item.value,
      };
      // assignment.createAssignment(myAssignment);
      console.warn(myAssignment);
    });
  };

  render() {
    const { useSelection, week } = this.state;
    const SelectChore = ({ person }) => (
      <Select name={person}
              className="assignForm"
              components={makeAnimated()}
              options={useSelection}
              onChange={(e) => this.changeHandler(e)}
              value={this.state.selected}
              key={person}
              isMulti />
    );

    return (
          <>
          <div className='assignment-form'>
          <h1>{ this.props.person.firstname } Chores <br/>for Week {week} user={this.props.person.userId} </h1>
          <Form style= {{ width: '75%' }} onSubmit={(e) => this.handleSubmit(e)}>
                <SelectChore person={this.props.person} key={`AssignForm-${this.props.index}`} />
                <br/>
                <Button className='mt-3'>Submit</Button>
          </Form>
          </div>
          </>
    );
  }
}

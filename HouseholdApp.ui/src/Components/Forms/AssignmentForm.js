import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  Form, Button,
} from 'reactstrap';
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
      chores: [],
      unassigned: [],
      selected: [],
      used: [],
      week: Week.thisWeek(),
    };
  }

  componentDidMount() {
    assignment.getAssignmentsByHouseholdFromUserId(this.props.person.id).then((resp) => {
      this.setState({ assignments: resp });
      console.warn(resp);
    });
    choreData.getUnassignedChoresByWeekAndHouseHold(Week.thisWeek(), this.props.householdId).then((options) => {
      const myarr = [];
      options.forEach((op) => {
        myarr.push({ value: op.id, label: op.name });
      });
      this.setState({ chores: options, useSelection: myarr, unassigned: options });
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
      console.warn(myAssignment);
      assignment.createAssignment(myAssignment).then(() => {
        this.setState({ success: true });
      });
      this.props.toggle();
    });
  };

  render() {
    const { useSelection, week, unassigned } = this.state;
    const SelectChore = ({ person }) => (
      <Select name={person}
              className="assignForm"
              components={makeAnimated()}
              options={useSelection}
              onChange={(e) => this.changeHandler(e)}
              value={this.state.selected}
              key={person.name}
              isMulti />
    );

    const myHouseHold = () => {
      const myarr = [];
      this.props.userHousehold.forEach((member) => {
        myarr.push(member.id);
      });
      return myarr;
    };

    const FilterAllMine = () => {
      const arr = this.state.assignments;
      const filteredByThisWeek = arr.filter((a) => a.week == Week.thisWeek());
      const myassign = filteredByThisWeek.filter((a) => a.userId == this.props.person.id);
      return myassign.map((c, i) => (<span key={`AllMine-${c.name}-${i}`} className="assignedtome">{c.chorename}</span>));
    };

    const NonAssignedChores = () => unassigned.map((c, i) => (<span key={`Nonassigned${i}--${c.name}`} className="assignedtonoone">{c.name}</span>));

    return (
          <>
          <div className='assignment-form'>
          <h1>{ this.props.person.firstname } Chores <br/>for Week {week} </h1>
          <Form style= {{ width: '75%' }} onSubmit={(e) => this.handleSubmit(e)}>
                <SelectChore person={this.props.person} key={`AssignChore-${this.props.person}-${this.props.uid}`} />
                <br/>
                <Button className='mt-3'>Submit</Button>
          </Form>
                <div className="assigntitle">Assigned to me: </div>
                <div className="myAssignedContainer">{ this.state.assignments && <FilterAllMine /> }</div>
                <div className="assigntitle">Not assigned yet: </div>
                <div className="unassignedContainer">{ unassigned && (<NonAssignedChores />) }</div>
          </div>
          </>
    );
  }
}

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
    });
    choreData.getChoresByHousehold(this.props.householdId).then((options) => {
      const myarr = [];
      options.forEach((op) => {
        myarr.push({ value: op.id, label: op.name });
      });
      this.setState({ chores: options });
      myarr.filter((item) => !this.state.used.includes(item.value));
      this.setState({ useSelection: myarr });
    });
    const unassign = this.state.chores.filter((chore) => chore.id !== assignment.choreId);
    console.warn(unassign);
    this.setState({ unassigned: unassign });
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

    const myHouseHold = () => {
      const myarr = [];
      this.props.userHousehold.forEach((member) => {
        myarr.push(member.id);
      });
      return myarr;
    };

    const FilterNonAssigned = () => {
      const arr2 = this.state.chores;
      const arr = this.state.assignments;
      const household = myHouseHold();
      const filteredByThisWeek = arr.filter((a) => a.week == Week.thisWeek());
      // should probably do a left join table to get unassigned chores
      const notassigned = arr2.filter((c) => filteredByThisWeek.includes(c.id));
      console.warn(notassigned);
      // const res = this.state.chores.filter((chore) => arr2.choreId !== chore.id);
      /* res.map((c) => (
        <>
        <span className="unassigned">{c.name}</span>
        </>
      )); */
    };

    const FilterAllMine = () => {
      const arr = this.state.assignments;
      const filteredByThisWeek = arr.filter((a) => a.week == Week.thisWeek());
      const myassign = filteredByThisWeek.filter((a) => a.firstname == this.props.person.firstname);
      myHouseHold();
      return myassign.map((c) => (
        <>
        <span className="assignedtome">{c.chorename}</span>
        </>
      ));
    };

    return (
          <>
          <div className='assignment-form'>
          <h1>{ this.props.person.firstname } Chores <br/>for Week {week} </h1>
          <Form style= {{ width: '75%' }} onSubmit={(e) => this.handleSubmit(e)}>
                <SelectChore person={this.props.person} key={`AssignChore-${this.props.person}-${this.props.uid}`} />
                <br/>
                <Button className='mt-3'>Submit</Button>
                <div className="myAssignedContainer">{ this.state.assignments && <FilterAllMine /> }</div>
                <div className="unassignedContainer">{ FilterNonAssigned() /* this.state.assignments && <FilterNonAssigned /> */ }</div>
          </Form>
          </div>
          </>
    );
  }
}

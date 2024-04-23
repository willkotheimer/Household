/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import choreData from '../../helpers/data/choresData';
import categoryData from '../../helpers/data/categoryData';
import householdData from '../../helpers/data/houseHoldUsers';

export default class ChoresForm extends React.Component {
    state = {
      name: this.props.choreInfo?.name || '',
      description: this.props.choreInfo?.description || '',
      houseHoldId: this.props.choreInfo?.houseHoldId || '',
      choreId: this.props.choreInfo?.id || '',
      category: this.props.choreInfo?.category || '',
      allCategories: [],
    }

    async componentDidMount() {
      await categoryData.getAllCategories().then((allCategories) => {
        this.setState({ allCategories });
      });
      console.warn(this.props.uid);
      await householdData.getHousehold(this.props.uid).then((resp) => {
        this.setState({ houseHoldId: resp.householdId });
      });
    }

    compare = (a, b) => {
      const nameA = a.categoryName.toUpperCase();
      const nameB = b.categoryName.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.choreId === '') {
        const choreObject = {
          Name: this.state.name,
          Description: this.state.description,
          HouseHoldId: this.state.houseHoldId,
          Category: parseInt(this.state.category, 10),
        };
        choreData.addChore(choreObject).then(() => {
          this.setState({ success: true });
          setTimeout(() => {
            // going to update here
          }, 3000);
        });
      } else {
        const choreObject = {
          Name: this.state.name,
          Description: this.state.description,
          Id: this.state.choreId,
          HouseHoldId: this.state.houseHoldId,
          Category: parseInt(this.state.category, 10),
        };
        choreData.updateChore(choreObject).then(() => {
          this.setState({ success: true });
          this.props.onUpdate();
        });
      }
      this.props.toggle();
    }

    render() {
      return (
            <>
            <div className='chore-form'>
            <Form style= {{ width: '75%' }} onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input placeholder='Enter a Chore Name'
                           value={this.state.name}
                           type='text'
                           name='name'
                           onChange={this.handleChange}
                           className='form-control form-control-lg m-2 inputText'
                           required/>
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input placeholder='Enter a Chore Description'
                           value={this.state.description}
                           type='textarea'
                           name='description'
                           onChange={this.handleChange}
                           className='form-control form-control-lg m-2 inputText'
                           required/>
                </FormGroup>
                <FormGroup>
                <Label>Category</Label>
                 <select name='category' onChange={this.handleChange} >
                    {this.state.allCategories.sort(this.compare)
                      .map((category) => (<option key={category.id} value={category.id} selected={this.state.category === category.id}>{category.categoryName}</option>))}
                  </select>
                </FormGroup>
                <br/>
                <Button className='mt-3'>Submit</Button>
            </Form>
            </div>
            </>
      );
    }
}

import React from 'react';
import { Dropdown, PrimaryButton, Spinner, SpinnerSize } from 'office-ui-fabric-react';
import './App.css';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUsersDetails, updatedDepartment, updatedEmplID, resetData } from './actions';

class App extends React.Component {

  onChangeDepartment = (event, item) => {
    this.props.updatedDepartment(item);
  }

  onChangeEngineering = (event, item) => {
    this.props.updatedEmplID(item);
  }

  render() {
    const { selectedDeparementItem,
      selectedEngineeringItem,
      dropDownOptions,
      usersData,
      resetData,
      fetchUsersDetails,
      isLoading } = this.props;

    const objDepartmentTranform = Object.keys(dropDownOptions).map((item) => { return { key: item, text: item.toUpperCase() } });
    const objEngineeringTranform = selectedDeparementItem && dropDownOptions[selectedDeparementItem.key].map((item, index) => { return { key: item, text: item } })

    return (
      <div className="App">
        <div class="ms-Grid" dir="ltr">
          <div class="ms-Grid-row">
            <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg12">
              <div className="outer-wrapper">
                <div class="ms-Grid-row">
                  <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg4">
                    <Dropdown
                      label="Department"
                      selectedKey={selectedDeparementItem ? selectedDeparementItem.key : undefined}
                      onChange={this.onChangeDepartment}
                      placeholder="Select an option"
                      options={objDepartmentTranform && objDepartmentTranform}
                    />
                  </div>
                  <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg4">
                    <Dropdown
                      label="Employee ID"
                      selectedKey={selectedEngineeringItem ? selectedEngineeringItem.key : undefined}
                      onChange={this.onChangeEngineering}
                      placeholder="Select an option"
                      options={objEngineeringTranform && objEngineeringTranform}
                    />
                  </div>
                  <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg4">
                    <div className="button-wrapper">
                      <PrimaryButton
                        data-automation-id="test"
                        text="Get Details"
                        onClick={fetchUsersDetails}
                        allowDisabledFocus={true}
                      />
                      <PrimaryButton
                        data-automation-id="test"
                        text="Clear"
                        onClick={resetData}
                        allowDisabledFocus={true}
                      />
                    </div>
                  </div>
                </div>
                <div class="ms-Grid-row">
                  <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg12">
                    {isLoading &&
                      <Spinner size={SpinnerSize.large} />
                    }
                    {usersData.avatar && !isLoading &&
                      <div className="avatar-wrapper">

                        <img alt="avatar" src={usersData.avatar} />

                        <div class="ms-Grid-row">
                          <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg6">ID: {usersData.id}</div>
                          <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg6">Name: {usersData.first_name}</div>
                        </div>
                      </div>
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUsersDetails,
    updatedDepartment,
    updatedEmplID,
    resetData
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

import * as React from 'react';
import * as Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default class ModuleSelect extends React.Component<{}, {selectedOption:null}> {
  constructor(props:any){
    super(props);
    this.state={
        selectedOption: null
    }
  }
  
  public handleChange = (selectedOption:any) => {
    this.setState({ selectedOption });
    window.console.log(`Option selected:`, selectedOption);
  }
  public render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
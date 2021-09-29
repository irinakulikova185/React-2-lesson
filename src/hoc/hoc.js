import React, { Component } from 'react';
import NamesBlock from './namesBlock';

const WithData = (WrappedComponent) => {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {data: [],
                      loading: true,
                      count: '' 
                     }
      }
      onChangeValue(event) {
        this.setState({count: event.target.value, loading: true})
      }
      componentDidMount() {
        fetch(`https://randomuser.me/api/?results=${this.state.count}`)
        .then(res => res.json())
        .then(res => res.results)
        .then(res => this.setState({data: res, loading: false}))
      }
      componentDidUpdate(prevProps, prevState) {
          if(this.state.count !==  prevState.count) {
            fetch(`https://randomuser.me/api/?results=${this.state.count}`)
            .then(res => res.json())
            .then(res => res.results)
            .then(res => this.setState({data: res, loading: false}))
          }
      }
      render() {
        return (
          <div className='component'>
            <label>Введите необходимое число рандомных имен 
              <input 
                type="text"
                value={this.state.count}
                onChange={(e) => this.onChangeValue(e)}/>
            </label>
            <WrappedComponent {...this.state}/>
          </div>
        ) 
      }
    }
}

const RandomNamesList = WithData(NamesBlock);
export default RandomNamesList;
import React, {Component} from 'react';
import axios from 'axios';

const AppointmentContext = React.createContext();
export const AppointmentConsumer = AppointmentContext.Consumer;

export default class AppointmentProvider extends Component {

  addAppoint = (appointment) => {
    axios.post('/api/appointments', appointment)
      .catch( err => {
        console.log(err)
      })
  }

  removeAppoint = (id) => {
    axios.delete(`/api/appointments/${id}`)
      .catch (err => {
        console.log(err)
      })
  }

  editAppoint = (id, appointment) => {
    axios.put(`/api/appointments/${id}`, appointment)
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    return(
      <AppointmentContext.Provider value={{
        addAppoint: this.addAppoint,
        removeAppoint: this.removeAppoint,
        editAppoint: this.editAppoint,
      }}>
        { this.props.children }
      </AppointmentContext.Provider>
    )
  }
}

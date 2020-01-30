import React, {Component} from 'react';
import axios from 'axios';

const AppointmentContext = React.createContext();
export const AppointmentConsumer = AppointmentContext.Consumer;

export default class AppointmentProvider extends Component {

  state = { appointments: [] }

  componentDidMount() {
    axios.get('/api/appointments')
      .then( res => {
        this.setState({ appointments: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addAppoint = (appointment) => {
    axios.post('/api/appointments', appointment)
      .then( res => {
        const { appointments } = this.state
        this.setState({ appointments: [...appointments, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  removeAppoint = (id) => {
    axios.delete(`/api/appointments/${id}`)
      .then(res => {
        const {appointments} = this.state
        this.setState({ appointments: appointments.filter( a => a.id !==id ) })
      })
      .catch (err => {
        console.log(err)
      })
  }

  editAppoint = (id, appointment) => {
    axios.put(`/api/appointments/${id}`, appointment)
      .then( res => {
        const appointments = this.state.appointments.map( a => {
          if (a.id === id)
          {return res.data}
          return a
        })
        this.setState({ appointments })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    return(
      <AppointmentContext.Provider value={{
        ...this.state,
        addAppoint: this.addAppoint,
        removeAppoint: this.removeAppoint,
        editAppoint: this.editAppoint,
      }}>
        { this.props.children }
      </AppointmentContext.Provider>
    )
  }
}

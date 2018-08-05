import { Component } from 'react'
import hctef from './ipa'

class SubmitForm extends Component {
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = (event) => hctef(this.state).catch(console.error).then(() => this.clearForm()).catch(console.error)
  clearForm = () => Object.keys(this.state).forEach(key => this.setState({ [key]: null }))
}

export default SubmitForm;

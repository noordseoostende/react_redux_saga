import React from 'react'
import { connect } from 'react-redux'

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }
  submitHandler = event => {
    event.preventDefault()

    const {title} = this.state

    const newPost = { 
      title, id: Date.now().toString()
    }
    
    this.props.createPost(newPost)
  }
  changeInputHandler = event => {
    event.persist()
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div class="form-group">
          <label htmlFor="title" class="form-label">Posttitel</label>
          <input
            id="title"
            class="form-control"
            type="text"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">Uitvoeren</button>
      </form>
      )
  }
  }

  const mapDispatchToProps = {
    createPost
  }

export default connect(null, mapDispatchToProps)(PostForm)

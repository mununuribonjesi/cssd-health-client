import React from 'react'

const loginForm = (props) =>  <section className="hero is-fullheight">
<div className="hero-body"></div>
<div className="container">
  <div className="columns is-centered">
    <form onSubmit={props.submitForm} action="" className="box">
      <div className="field">
        <label for="" className="label">Username</label>
        <div className="control has-icons-left">
          <input onChange={props.onChange} value={props.username} name="username" type="text" className="input" required />
        </div>
      </div>
      <div className="field">
        <label for="" className="label">Password</label>
        <div className="control has-icons-left">
          <input onChange={props.onChange} value={props.password} name="password" type="password" className="input" required />
        </div>
      </div>
      <div className="field">
        <button className="button is-primary" type="submit">
          Login
      </button>
      </div>
    </form>
  </div>
</div>
</section>

export default loginForm;
import React from 'react'

const loginForm = (props) =>  <section className="hero is-fullheight">
<div className="hero-body is-centered">
<div className="columns"> 

</div>
</div>

<div className="container">
  <div className="columns is-centered">
    <form onSubmit={props.submitForm} action="" className="box">
      <div className="field">
        <div className="control has-icons-left">
          <input onChange={props.onChange} value={props.username} name="username" type="text" placeholder="Enter Username" className="input" required />
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input onChange={props.onChange} value={props.password} name="password" type="password" placeholder="Enter Password" className="input" required />
        </div>
      </div>
      <div className="field">
        <button className="button is-primary is-large" type="submit">
          Login
      </button>
      </div>
    </form>
  </div>
</div>
</section>

export default loginForm;
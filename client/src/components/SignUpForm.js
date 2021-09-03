import React, { useState } from 'react';


 const SignupForm = ()=>{

    const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addThought({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'thoughtText') {
      setFormState({ ...formState, [name]: value });
    }
  };
return  (
    <>

<div>
    <img/>   
    <section>
        <form>
        <h3>Sign Up</h3>
        <label for="userName">Username:</label>
        <input type="text" id="userName"/>
        <label for="passWord">Password:</label>
        <input type="text" id="passWord"/>
            <button>Sign Up</button>
        </form>
    </section>
</div>
</>
)
  }


  export default SignupForm;
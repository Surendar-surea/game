import react from "react";
import { useState } from "react";
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'


function PlayerInput({setplayer1name,setplayer2name,postdata}) {
  const [pi1, setPi1] = useState("");
  const [pi2, setPi2] = useState("");
  function handleSubmit(){
    postdata()
    setplayer1name(pi1)
    setplayer2name(pi2)

  }

  return (
    <div>
       <Form>
    <FormField>
      <label>First Name</label>
      <input placeholder='First Name' type="text" value={pi1} onChange={(e)=>{setPi1(e.target.value)}}/>
    </FormField>
    <FormField>
      <label>Last Name</label>
      <input placeholder='Last Name' type="text" value={pi2} onChange={(e)=>{setPi2(e.target.value)}}/>
    </FormField>
    
    <Button type="submit" onClick={handleSubmit}>Submit</Button>
  </Form>
     
      
    </div>
  );
}
export default PlayerInput;
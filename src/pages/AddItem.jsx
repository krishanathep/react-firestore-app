import React, { useState } from "react";
import firebase from "../config/firebase";

const AddItem = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [qty, setQty] = useState(null);
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("items")
      .add({
        name,
        type,
        qty,
        description,
      })
      .then(() => setName(""), setType(""), setQty(""), setDescription(""));
      console.log('Your item has been successfully sumitted!')
      //alert('Your item has been successfully submitted!')
  };

  return (
    <div>
      <h3>Add item</h3>
      <form onSubmit={onSubmit}>
        Name: <input type="text" name='name' value={name} onChange={e=> setName(e.currentTarget.value)} />
        Type: <input type="text" name='type' value={type} onChange={e=>setType(e.currentTarget.value)} />
        Qty: <input type="text" name='qty' value={qty} onChange={e=>setQty(e.currentTarget.value)} />
        Description: <input type="text" name='description' value={description} onChange={e=>setDescription(e.currentTarget.value)} /> 
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default AddItem;

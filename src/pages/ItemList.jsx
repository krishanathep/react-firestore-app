import React, { useState, useEffect } from "react";
import firebase from "../config/firebase";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("items")
      .onSnapshot((snapshot) => {
        const listItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(listItems);
      });
    return () => unsubscribe();
  }, []);
  return items;
};

const ItemList = () => {
  const listItem = useItems();

  const deleteStorage = (id) => {
    firebase.firestore().collection("items").doc(id).delete();
  };

  return (
    <div>
      <h3>List item</h3>
      <table border="1" width="80%">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </tbody>
        {listItem.map((item) => (
          <tbody key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.qty}</td>
            <td>{item.description}</td>
            <td>
              <button>Update</button>
              <button onClick={()=>deleteStorage(item.id)}>Delete</button>
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ItemList;

import React, { useState, useEffect } from "react";
import firebase from "../config/firebase";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("items")
      .onSnapshot((snapshot) => {
        const listItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(listItems);
      });
  }, []);
  return items;
};

const ItemList = () => {
    const listItem = useItems();
  return (
    <div>
      <table border="1" width='50%'>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </tbody>
        {listItem.map(item=>(
            <tbody>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.qty}</td>
            <td>{item.description}</td>
            <td>
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ItemList;

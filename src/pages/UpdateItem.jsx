import React from "react";

const UpdateItem = () => {
  return (
    <div>
      <h3>Update item</h3>
      <form>
        Name:{" "}
        <input
          type="text"
          name="name"
        />
        Type:{" "}
        <input
          type="text"
          name="type"
        />
        Qty:{" "}
        <input
          type="text"
          name="qty"
        />
        Description:{" "}
        <input
          type="text"
          name="description"
        />{' '}
        <button>UPDATE</button>{" "}<button>CANCEL</button>
      </form>
    </div>
  );
};

export default UpdateItem;

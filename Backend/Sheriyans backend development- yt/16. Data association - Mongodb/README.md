## Referencing and Embedding in Databases

### 1. Referencing (Normalization)

- Stores related data in separate collections/tables and links them using IDs.
- Reduces data duplication, ensures consistency.
- Requires joins or multiple queries.

- Example (MongoDB referencing)
```js
const user = {
  _id: ObjectId("user123"),
  name: "Saakshi",
  orders: [ObjectId("order1"), ObjectId("order2")]
};

const order = {
  _id: ObjectId("order1"),
  userId: ObjectId("user123"),
  product: "Laptop"
};
```

### 2. Embedding (Denormalization)

- Stores related data inside the same document.
- Improves read performance but increases redundancy.

- Example (MongoDB Embedding)
```js
const user = {
  _id: ObjectId("user123"),
  name: "Saakshi",
  orders: [
    { product: "Laptop" },
    { product: "Phone" }
  ]
};
```




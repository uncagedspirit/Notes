### Data storage

saving digital information in a structured or unstructured format for future access and retrieval.

#### Types of databases
- SQL : in format of tables, for more structured data
- NoSQL : for unstructured data, data is stored in the form of documents and objects


## MongoDB

MongoDB is a NoSQL database that stores data in a document-oriented format using JSON-like BSON (Binary JSON) objects. 

#### Features :
- Schema-less (Flexible Structure) – No predefined schema, stores data in dynamic documents.
- Scalability – Supports horizontal scaling (sharding).
- High Performance – Fast read/write operations using indexes.
- Replication – Data redundancy via Replica Sets (automatic failover).
- Sharding – Splits data across multiple servers for large-scale applications.
- Aggregation Framework – Powerful data processing and transformation.

Database -> collection -> document

|CODE             |  DATABASE       |
|-----------------|-----------------|
|mongoose.connect | database create |
|model create     | collection      |
|CREATE           | document        |

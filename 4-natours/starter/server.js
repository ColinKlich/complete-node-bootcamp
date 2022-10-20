const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {console.log('DB connection successful');
  });
  /*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://guest1:<3BkeLHu1wsS2LKhx>@cluster0.gcxouic.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  console.log('DB connection successful');
  const collection = client.db('natours').collection('tours');
  // perform actions on the collection object
  client.close();
});
*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//mongodb+srv://guest1:<3BkeLHu1wsS2LKhx>@cluster0.gcxouic.mongodb.net/admin

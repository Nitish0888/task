import { createRequire } from 'https://deno.land/std@0.177.0/node/module.ts';


/*express js */
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


/* connection */
const require = createRequire(import.meta.url);

const mongoose = require('mongoose');

mongodb+srv:'Nitishprasad:task@123@cluster0.adpudoh.mongodb.net'
  .then(() => console.log('Connected!'));


/* schema */
  const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
 
});

module.exports = mongoose.model('Task', TaskSchema);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

// Create an Express app
const app = express();

// Middleware
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Connect to MongoDB locally
mongoose.connect('mongodb://localhost:27017')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

/*const newMongoose = new User({
    name: 'Ricky',
    age: 3,
    species: 'common Mongoose'
});
newMongoose.save()
.then((result) => {
    console.log('new mongoose saved', result);
})
.catch((error) =>{
    console.error('error saving mongoose', error);
});

// Get route to return all users
app.get('/users', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users)
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

// Post route to add a new user to the database
app.post('/users', async (req, res) => {
    const user = new User ({
        name: 'John',
        age: 15,
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})
// PUT route to edit a user by ID
app.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            user.name = 'Ahmad';
            user.age = 30;
            const updatedUser = await user.save();
            res.json(updatedUser);
        } else{
            res.status(404).json({ message: 'user not found'});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});*/
// DELETE route to remove a user by ID
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (user) {
            res.json({ message: 'User Removed' });
        } else {
            res.status(404).json({ message: 'user not found'})
        }
    } catch (error) {
        res.status(500).json({ message: 'error message'});
    }
});
// Set up server to listen on a port

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`);
});
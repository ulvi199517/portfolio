const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../src', 'index.html'));
});
app.listen(process.env.PORT || 3001, ()=> {
    console.log(`app is running on port ${process.env.PORT}` );
}); 
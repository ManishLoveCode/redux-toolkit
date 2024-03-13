const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testpath").then(() => console.log('connection successful...')).catch((error) => console.log(error))

const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist", playListSchema)

const createDocument = async () => {
    try {
        const jsPlaylist = new Playlist({
            name: "JavaScript",
            ctype: "Front End",
            videos: 50,
            author: "New Technical",
            active: true
        })
        const nodePlaylist = new Playlist({
            name: "Node JS",
            ctype: "Back End",
            videos: 45,
            author: "New Technical",
            active: true
        })
        const mongoPlaylist = new Playlist({
            name: "mongoDB",
            ctype: "Back End",
            videos: 25,
            author: "New Technical",
            active: true
        })
        const reactPlaylist = new Playlist({
            name: "React JS",
            ctype: "Front End",
            videos: 35,
            author: "New Technical",
            active: true
        })
        
        const result = await Playlist.insertMany([jsPlaylist, nodePlaylist, mongoPlaylist, reactPlaylist])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
createDocument()
import ye from '../Data/ye.mp3';
import las from '../Data/las.mp3';
import party from '../Data/party.mp3';

const data = {
    productItems:[
        {
            id: "1",
            name: "Burna boy - Last Last",
            price: 999,
            image: "./Pics/last.jpg",
            genre: "AfroBeats",
            details: "125 BPM,  3:45mins", 
            audio: las,
            type: "Exclusive",
            about: "The African Giant comes through again with this hit from his record breaking new album set to be released soon.",
        },
        {
            id: "2",
            name: "Burna boy - Like To Party",
            price: 889,
            image: "./Pics/plenty.jpg",
            genre: "AfroBeats",
            details: "125 BPM,  3:45mins",
            audio: party,
            type: "Exclusive",
            about: "The African Giant comes through again with this hit from his record breaking new album set to be released soon.",
        },
        {
            id: "3",
            name: "Burna boy - Ye",
            price: 500,
            image: "./Pics/yepic.jpg", 
            genre: "AfroBeats",
            details: "125 BPM,  3:45mins",
            audio: ye,
            type: "Exclusive",
            about: "The African Giant comes through again with this hit from his record breaking new album set to be released soon.",
        },
    ]
}

export default data;
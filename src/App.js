import React, { Component } from 'react';
import './App.css';
import MusicPlayer from './components/musicPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: []
    };
  }
  componentWillMount() {
    this.setState({
      musics: [
        {
          key: 1,
          src: "http://www.sousound.com/music/mondo_lounge/mondo_01.mp3",
          name: "music1"
        },
        {
          key: 2,
          src: "http://www.sousound.com/music/mondo_lounge/mondo_02.mp3",
          name: "music2"
        }
      ]
    });
  }
  render() {
    const { musics } = this.state;
      console.log(musics);
    return (
      <div>
        {musics.map((music) => <div key={music.key}>{music.name}({music.src})</div>)}
        <MusicPlayer musics={musics} />
      </div>
    );
  }
}

export default App;

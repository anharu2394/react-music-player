import React, { Component } from 'react';
import Music from './music';
export default class MusicPlayer extends Component {
  playMusic() {
    let musics = document.getElementsByClassName("music");
    musics =  Array.prototype.slice.call(musics);
    const playMusic = (n) => {
      musics[n].play();
      musics[n].addEventListener("ended",() => {
        if (n < musics.length) {
          playMusic(n + 1);
        }
      });
    }
    playMusic(0);
  }
  componentDidMount() {
    this.playMusic();
  }
  render() {
    console.log(this.props)
    return this.props.musics.map((music) => <Music {...music} />);
  }
}

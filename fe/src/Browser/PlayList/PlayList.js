import "./PlayList.scss";
import { Window } from "../../Interface/Window";
import axios from "axios";
import { TRACK_DATA } from "./Data/Track_Data";
import { useState, useEffect, useRef } from "react";


export function PlayList({ 창닫기 }) {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const getData = async () => { 
    try {
      const searchResults = await Promise.all(
        TRACK_DATA.map(async (track) => {
          const response = await axios.get("https://itunes.apple.com/search", {
            params: {
              term: `${track.artist} ${track.trackName}`,
              entity: "song",
              country: "KR"
            }
          });

          // 아스트명과 앨범명으로 정확한 트랙 찾기
          const matchedTrack = response.data.results.find(
            result => 
              result.artistName === track.artist && 
              result.trackName === track.trackName
          );

          // 이미지 URL 크기 변경 (100x100 -> 600x600)
          const largeArtworkUrl = matchedTrack 
            ? matchedTrack.artworkUrl100.replace("100x100", "600x600") 
            : response.data.results[0].artworkUrl100.replace("100x100", "600x600");

          return { 
            ...track,
            ...matchedTrack || response.data.results[0],
            artworkUrl600: largeArtworkUrl,
            previewUrl: matchedTrack?.previewUrl || response.data.results[0].previewUrl
          };
        })
      );

      setTracks(searchResults.filter(track => track));
    } catch (error) {
      console.error("음악 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const handleTrackPlay = (track) => {
    setCurrentTrack(track);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Window id="PlayList" tabText="플레이리스트" 닫기={창닫기}>
      <div className="Container">
        {tracks.map((track, index) => (
          <VinylChip 
            key={index}
            track={track}
            isCurrentTrack={currentTrack === track}
            onPlay={() => handleTrackPlay(track)}
          />
        ))}
      </div>
    </Window>
  );
}

export function VinylChip({ track, isCurrentTrack, onPlay }) {
  const { artworkUrl600, artistName, collectionName, trackName, previewUrl } = track;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(previewUrl);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      onPlay();
    }
  };

  useEffect(() => {
    if (!isCurrentTrack && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isCurrentTrack]);

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleEnded = () => {
      setIsPlaying(false);
    };

    if (audioElement) {
      audioElement.addEventListener("ended", handleEnded);
      return () => {
        audioElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  return (
    <div className="VinylChip" onClick={handlePlay}>
      <div className="top">
        <div className={`hole ${isPlaying ? "playing" : ""}`} />
        <img 
          src={artworkUrl600} 
          alt="앨범 아트워크" 
          className={isPlaying ? "playing" : ""} 
        />
      </div>
      <div className="bot">
        <p>{artistName} - {trackName}</p>
        <p>{collectionName}</p>
      </div>
    </div>
  );
}

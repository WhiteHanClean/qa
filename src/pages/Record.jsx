import React, { useState, useEffect } from "react";
import axios from "axios";

const Record = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');

  const API_KEY = "563492ad6f91700001000001aa29a62e46f2496c831cc3d5dd7aa551";

  async function onloadImage() {
    await axios
      .get(`https://api.pexels.com/v1/search?query=${query}&per_page=20`, {
        headers: { Authorization: API_KEY },
      })
      .then((response) => {
        setPhotos(response.data.photos);
        console.log(response.data.photos);
      })
      .catch((error) => {
       setQuery(false)
       console.log(error)
      });
  };

  const moods = [
    "😌",
    "😊",
    "😄",
    "🤣",
    "😰",
    "🥰",
    "🙃",
    "😔",
    "😇",
    "🤔",
    "😩",
    "😭",
    "😤",
    "😵",
    "🤒",
    "🤤",
    "🗿",
  ];

  console.log(photos)

  function serchPhoto(){
    onloadImage();
  }

  return (
    <div className="record">
      <div className="record_create">
        <input type="text" placeholder="Название" className="record_name" />

        <div className="record_data">
          <select name="moods" className="moods">
            {moods.map((mood, index) => {
              return (
                <option key={index} value={mood}>
                  {mood}
                </option>
              );
            })}
          </select>

          <input type="text" placeholder="Название" className="data" />

          <input type="text" placeholder="Название" className="description" />

          <button className="btn_create">Создать</button>
        </div>
      </div>

      <div className="record_block">
        <div className="record_serch_block">
          <input
            type="text"
            placeholder="Название"
            className="record_query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn_seacrh" onClick={() => {serchPhoto()}}>Search</button>
        </div>


        {
        photos.length > 0 ?  photos.map((photo) => { 
          return (<> 
             <img className='image_record' src={photo.src.original} alt="ok" />
            </>)
        }) : <h2 className="title">Error</h2>
        }
      </div>
    </div>
  );
};

export default Record;

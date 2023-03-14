import "../allNovels/AllNovelStyle.css"
import Scroll from './Scroll';
import SearchList from './SearchList';import React, {useState, useEffect} from "react";

function Search() {
  const [searchField, setSearchField] = useState("");
  const [state, setState] = useState(0);
const [data,setData] = useState([]);

useEffect(()=>{
    async function getData(){
        const get = await fetch('https://mocki.io/v1/0b6f721e-74bd-4084-a821-4c08c2d53455');
        const res = await get.json();
        setData(res);
        console.log(res);
    }
    getData();
},[state])

  const filteredPersons = data.filter(
    person => {
      return (
        person
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );
  
  const handleChange = e => {
    setSearchField(e.target.value);
  };
  
  function searchList() {
    return (
        <SearchList filteredPersons={filteredPersons} />
    );
  }
  return (
    <>
    <div className="search-section">
        <div className="search-box">
          <div className="search-fav">
          <input className="search" type="text" placeholder="Search for your favourites" onChange={handleChange}/>
          <div className="search-icon">
          <i style={{color: "white", fontSize: "20px", justifyContent: "center"}} className ="fas fa-search"></i>
            </div>
          </div>
          
          <div className="stars">
              <div className="allStar">
                <i style={{color: "purple"}} className="fas fa-star"> </i>
                <p >.  1 Star</p>
              </div>
              <div className="allStar">
                <i style={{color: "purple"}} className="fas fa-star"> </i>
                <p >.  2 Star</p>
              </div>
              <div className="allStar">
                <i style={{color: "purple"}} className="fas fa-star"> </i>
                <p >.  3 Star</p>
              </div>
              <div className="allStar">
                <i style={{color: "purple"}} className="fas fa-star"> </i>
                <p >.  4 Star</p>
              </div>
              <div className="allStar">
                <i style={{color: "purple"}} className="fas fa-star"> </i>
                <p >.  5 Star</p>
              </div>
          </div>
          <div className="complete">

<select style={{padding: "5px"}} name="completed" id="completed">
  <option value="complete">Completed</option>
  <option value="notComplete">Not Completed</option>
</select>
          </div>
        </div>
        <div className="categories-box">
          <div className="inside-box">
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
            <div className="single-cat">
              <p >Romance</p>
            </div>
          
          </div>
          

        </div>
    </div>
    <div>
    </div>
    {searchList()}

    </>
  )
}

export default Search
import './Search.css'

export const Search = () => {
    return (
      <div className="search">
        <div className="container">
          <form>
            <div className="right-content">
              <div className="select-item">
                <p>Select Year</p>
                <select name="" className="select-box">
                  <option value="">2020</option>
                  <option value="">2021</option>
                  <option value="">2022</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Make</p>
                <select name="" className="select-box">
                  <option value="">BMW</option>
                  <option value="">Ford</option>
                  <option value="">VW</option>
                  <option value="">Tesla</option>
                  <option value="">Toyta</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Fuel Type</p>
                <select name="" className="select-box">
                  <option value="">Petrol</option>
                  <option value="">Diesel</option>
                  <option value="">Gas</option>
                  <option value="">Electric</option>
                  <option value="">Hybrid</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Body Style</p>
                <select name="" className="select-box">
                  <option value="">Sedan</option>
                  <option value="">Coupe</option>
                  <option value="">Hatcback</option>
                  <option value="">Combi</option>
                  <option value="">Station Wagon</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Transmission</p>
                <select name="" className="select-box">
                  <option value="">Auto</option>
                  <option value="">Electric</option>
                  <option value="">Manual</option>
                </select>
              </div>
              <div className="select-item">
                <p>Select Price per Day</p>
                <select name="" className="select-box">
                  <option value="">45</option>
                  <option value="">60</option>
                  <option value="">80</option>
                </select>
              </div>
            </div>
            <div className="left-content">
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    );
}
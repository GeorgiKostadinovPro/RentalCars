import './Search.css'

export const Search = () => {
    return (
      <div className="search">
        <div className="container">
          <form>
            <div className="option-item">
                <p>Year</p>
                <select name="" id="">
                    <option value="">2010</option>
                    <option value="">2011</option>
                    <option value="">2012</option>
                    <option value="">2013</option>
                    <option value="">2014</option>
                    <option value="">2015</option>
                    <option value="">2016</option>
                    <option value="">2017</option>
                    <option value="">2018</option>
                    <option value="">2019</option>
                    <option value="">2020</option>
                    <option value="">2021</option>
                    <option value="">2022</option>
                    <option value="">2023</option>
                    <option value="">2024</option>
                </select>
            </div>
          </form>
        </div>
      </div>
    );
}
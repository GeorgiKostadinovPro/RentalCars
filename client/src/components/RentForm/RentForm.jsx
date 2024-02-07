import './RentForm.css'

export const RentForm = () => {
    return (
      <form action="">
        <div className="input-content">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="input-content">
          <label htmlFor="">Email Address</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="input-content">
          <label htmlFor="">Pick-up Date</label>
          <input type="date" />
        </div>
        <div className="input-content">
          <label htmlFor="">Pick-up Time</label>
          <input type="time" />
        </div>
        <div className="input-content">
          <label htmlFor="">Returning Time</label>
          <input type="date" />
        </div>
        <div className="input-content">
          <label htmlFor="">Returning Time</label>
          <input type="time" />
        </div>
        <input className="rent-btn" type="submit" value="Rent" />
      </form>
    );
}
import './CarReview.css'

export const CarReview = () => {
    return (
        <div className="single-review">
            <img
              src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
              alt=""
            />
            <div className="review-content">
              <h5>
                Username or Email <span>mm/dd/yyyy</span>
              </h5>
              <p className="review-stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus expedita numquam perspiciatis autem aperiam
                corporis quaerat maiores est, accusamus animi a inventore veniam
                sit repellat cum ab quibusdam vel quis?
              </p>
            </div>
        </div>
    );
}
import './CreateReview.css'

export const CreateReview = () => {
    return (
        <div className="create-review">
            <h2>Leave a Review</h2>
            <form action="">
                <div class="set-rating">
				    <input type="number" name="rating" hidden />
				    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
			    </div>
                <div className="set-message">
                    <textarea className="opinion" cols="45" rows="5" placeholder='Your message...'>

                    </textarea>
                </div>
                <div class="btn-group">
				    <button type="submit">Post Review</button>
			    </div>
            </form>
        </div>
    );
}
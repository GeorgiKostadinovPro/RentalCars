const Constants = {
    email: {
        required: "This field is required!",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
          message: "This email is invalid!",
        },
    },
    password: {
        required: "This field is required!",
        pattern: {
          value: /[A-z]+[0-9]+\W+/g,
          message: "This password is invalid!",
        },
        minLength: {
          value: 5,
          message: "The minimal length is 5!",
        },
    },
    fullName: {
      required: "This field is required!",
      pattern: {
        value: /^[A-z]{3,} [A-z]{3,}$/g,
        message: "This full name is invalid"
      }
    },
    rent: {
      pickUpDateAndTime: {
        required: "This field is required!"
      },
      returningDateAndTime: {
        required: "This field is required!"
      }
    },
    pagination: {
      carsPageSize: 3,
      reviewsPageSize: 1
    },
    reviews: {
      maxRating: 5,
      message: {
        required: "A valid message is required!",
        minLength: {
          value: 5,
          message: "The message should be at least 5 symbols long!"
        }
      }
    },
    contact: {
      subject: {
        required: "Please write a valid subject!",
        minLength: {
          value: 10,
          message: "Please type at least 10 symbols!"
        }
      },
      message: {
        required: "Please write a valid message!",
        minLength: {
          value: 100,
          message: "The subject must be at least 100 symbols long!"
        }
      }
    }
};

export { Constants }

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
    }
};

export { Constants }
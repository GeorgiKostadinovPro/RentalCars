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
        value: /^[A-Z]{1}[A-z]{3,} [A-Z]{1}[A-z]{3,}$/g,
        message: "This full name is invalid"
      }
    },
    car: {
      make: {
        required: "Please enter a valid make!"
      },
      model: {
        required: "Please enter a valid model!"
      },
      year: {
        required: "Please enter a valid year!",
        min: {
          value: 2000,
          message: "The year must be at least 2000!"
        },
        max: {
          value: 2024,
          message: "The year cannot be above 2024!"
        }
      },
      type: {
        required: "Please enter a valid body type!"
      },
      mileAge: {
        required: "Please enter a valid mileage!",
        min: {
          value: 2000,
          message: "The mileage must be at least 2000 km!"
        },
        max: {
          value: 300000,
          message: "The mileage cannot be above 300 000 km!"
        }
      },
      transmission: {
        required: "Please enter a valid transmission!"
      },
      fuelType: {
        required: "Please enter a valid fuel type!"
      },
      horsePower: {
        required: "Please enter a valid horsepower!",
        min: {
          value: 75,
          message: "The horsepower must be at least 75 hp!"
        },
        max: {
          value: 2300,
          message: "The horsepower cannot be above 2300 hp!"
        }
      },
      doors: {
        required: "Please enter a valid doors number!",
        min: {
          value: 2,
          message: "The doors must be at least 2!"
        },
        max: {
          value: 8,
          message: "The doors cannot be above 8!"
        }
      },
      luggageCapacity: {
        required: "Please enter a valid luggage capacity!",
        min: {
          value: 1,
          message: "The luggages must be at least 2!"
        },
        max: {
          value: 10,
          message: "The luggages cannot be above 10!"
        }
      },
      maxPeople: {
        required: "Please enter a valid people number!",
        min: {
          value: 2,
          message: "The people must be at least 2!"
        },
        max: {
          value: 8,
          message: "The people cannot be above 8!"
        }
      },
      location: {
        required: "Please enter a valid location!",
        pattern: {
          value: /^[A-Z]{1}[A-z]+, [A-Z]{1}[A-z]+$/g,
          message: "You should follow the example!"
        }
      },
      pricePerDay: {
        required: "Please enter a valid price!",
        min: {
          value: 10,
          message: "The price must be at least $10!"
        },
        max: {
          value: 1000,
          message: "The price cannot be above $1000!"
        }
      },
      description: {
        required: "Please eneter a valid description!",
        minLength: {
          value: 50,
          message: "Write at least 50 characters!"
        }
      },
      gallery: {
        required: "Please choose at least two pictures!"
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
    payment: {
      cardNumber: {
        required: "The card number is required!",
        pattern: {
          value: /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/g,
          message: 'The card number is invalid!'
        }
      },
      CVC: {
        required: "The card CVC is required!",
        pattern: {
          value: /^[0-9]{3,4}$/g,
          message: "The CVC is invalid!"
        }
      },
      expires: {
        required: "The expiration date is required!",
        pattern: {
          value: /^[1-9]{2}\/[1-9]{2}$/g,
          message: "The expiriation date is inavlid!"
        }
      }
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
    posts: {
      title: {
        required: "The title is required!",
        minLength: {
          value: 50,
          message: "The title should be at least 50 symbols long!"
        }
      },
      tags: {
        required: "The tags are required!",
        minLength: {
          value: 3,
          message: "Please enter at least 1 tag!"
        }
      },
      content: {
        required: "The content is required!",
        minLength: {
          value: 100,
          message: "The content should be at least 100 symbols long!"
        }
      },
      image: {
        required: "Please choose a picture!"
      }
    },
    comments: {
      message: {
        required: "A valid message is required!",
        minLength: {
          value: 5,
          message: "The message should be at least 5 symbols long!"
        }
      }
    },
    pagination: {
      carsPageSize: 3,
      reviewsPageSize: 1,
      postsPageSize: 2,
      commentsPageSize: 2
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

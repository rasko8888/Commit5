const bcrypt = require('bcryptjs');

const db = require('../data/database');

class User {
  constructor(email, password, fullname, street, postal, city) {
    this.email = email;
    this.password = password;
    this.name = fullname;
    this.adress = {
      street: street,
      postalCode: postal,
      city: city
    };
  }

  async signup() {
    const hashedPassword = await bcrypt.hash(this.password, 12);

    db.getDb().collection('users').insertOne({
      email: this.email,
      password: hashedPassword,
      name: this.name,
      address: this.address
    });
  }
}

module.exports = User;

//git Ανέβασμα
//git Ανέβασμα 2
//git Ανέβασμα 3

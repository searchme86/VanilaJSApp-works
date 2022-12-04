const URL = 'https://randomuser.me/api/';

export const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;

  return {
    phone,
    email,
    image,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} $${last}`,
  };
};

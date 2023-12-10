/* eslint-disable import/prefer-default-export */
const readAllUsers = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const users = await response.json();
    console.log('Categories :', users);
    return users;
  } catch (err) {
    console.error('readAllUsers::error: ', err);
    throw err;
  }
};

export { readAllUsers };

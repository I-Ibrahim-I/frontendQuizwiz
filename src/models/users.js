const readAllUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
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

const updateUserPoint = async (id, score) => {
  try {
    const options = {
      method: 'PATCH',
      body: JSON.stringify({ score }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`http://localhost:3000/users/${id}`, options);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const updatedPoint = await response.json();
    return updatedPoint;
  } catch (err) {
    console.error('updateUserPoint::error: ', err);
    throw err;
  }
};

async function logIn(username, password) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch('http://localhost:3000/users/login', options);

    return response;
  } catch (err) {
    console.error('Login::error: ', err);
    throw err;
  }
}

async function register(username, password) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch('http://localhost:3000/users/register', options);
    return response;
  } catch (err) {
    console.error('Register::error: ', err);
    throw err;
  }
}

export { readAllUsers, updateUserPoint, logIn, register };

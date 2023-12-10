/* eslint-disable import/prefer-default-export */
const readAllBadgesByUser = async (id) => {
    try {
      const response = await fetch(`${process.env.API_BASE_URL}/badges/?user-id=${id}`);
      if (!response.ok) {
        if (response.status === 400) {
          console.log("reponse40000");
          return [];
        }
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      const badges = await response.json();
      console.log('Badges :', badges);
      return badges;
    } catch (err) {
      console.error('readAllUserBadges::error: ', err);
      throw err;
    }
  };
  
  export { readAllBadgesByUser };
  
async function getChefBirthday(id) {
  try {
    const Reciep = await fetch(` https://dummyjson.com/recipes/${id}`);
    const recipRes = await Reciep.json();
    const chief = await fetch(`https://dummyjson.com/users/${recipRes.userId}`);
    const BirthdayDate = await chief.json();
    const ChiefBirthday = BirthdayDate.birthDate;
    return ChiefBirthday;
  } catch {
    throw new Error("No chef found ");
  }
}

(async () => {
  try {
    const birthday = await getChefBirthday(1);
    console.log("Data di nascita dello chef:", birthday);
  } catch (error) {
    console.error("Errore:", error.message);
  }
})();

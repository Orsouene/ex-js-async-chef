async function getChefBirthday(id) {
  let recipRes;
  try {
    const ricetta = await fetch(` https://dummyjson.com/recipes/${id}`);
    // const ricetta = await fetch(` https://dummyjson.com/recipes/${58454}`); // !<= error Test bonus 1

    recipRes = await ricetta.json();
  } catch (error) {
    console.error(error);
    throw new Error("nessun ricetta trovata");
  }
  if (recipRes.message) {
    throw new Error(recipRes.message);
  }
  let BirthdayDate;
  try {
    const chief = await fetch(`https://dummyjson.com/users/${recipRes.userId}`);
    BirthdayDate = await chief.json();
  } catch (error) {
    console.error(error);
    throw new Error("nessun chief trovato");
  }
  const ChiefBirthday = dayjs(BirthdayDate.birthDate).format("DD/MM/YYYY");
  return ChiefBirthday;
}

(async () => {
  try {
    const birthday = await getChefBirthday(1);
    console.log("Data di nascita dello chef:", birthday);
  } catch (error) {
    console.error("Errore:", error.message);
  }
})();

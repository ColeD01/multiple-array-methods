var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function sortedOfAge(arr) {
  //? how does this work
  //! need to learn how to do this 
  //* this is cool 
  //TODO i need to do this 
    arr.sort(function (a, b) {
      const textA = a.firstName.toUpperCase();
      const textB = b.lastName.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    arr.sort(function (a, b) {
        return a.lastName.localeCompare(b.lastName);
      });

    return arr.reduce(function (final, person) {
      if (person.age >= 18)
        final.push(
          `<li> ${person.firstName} ${person.lastName} age: ${person.age} </li>`
        );
      return final;
    }, []);
  }
console.log(sortedOfAge(peopleArray))

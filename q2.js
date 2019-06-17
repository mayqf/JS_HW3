//Make an array of pet objects, this pet object should include animal name animal weight animalSound
const myPets = [
   pet1 = {
            name: "caddy",
            animalWeight: 15,
            animalSound: function () {
                console.log("                meow meow!") 
            }
        },
   pet2 = {
                name: "cowy",
                animalWeight: 15,
                animalSound: function () {
                    console.log("                moo moo!") 
                }
            },
   pet3 = {
                name: "piggy",
                animalWeight: 15,
                animalSound: function () {
                    console.log("                oink oink!") 
                }
            }
]
for (i=0;i<myPets.length;i++){
    console.log("A "+myPets[i].name+" sounds:")
    myPets[i].animalSound()
}

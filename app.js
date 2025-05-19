console.log("hola")

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let ext = ['.com', '.net'];

  for (let z of pronoun){
    for (let x of adj){
        for (let c of noun){
            for (let n of ext){
                console.log(z + x + c + n);
 
            }
        }
    }
  }
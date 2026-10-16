function makeFunc(){
        const name="Mozilla";
        function displayName(){
            // console.log(name);
            return name;
        }
        return displayName; //when we return a function the complete lexical scope of the function returns
    }

    const myFunc= makeFunc();
  console.log(myFunc());

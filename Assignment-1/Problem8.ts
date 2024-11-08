{
    ///Problem-8

   

    function validateKeys<T extends object>(person: T, key: (keyof T)[]): boolean {
        
        return key.every(key => key in person);

      }
      
      const person = { name: "Alice", age: 25, email: "alice@example.com" };
      console.log(validateKeys(person, ["name", "email"]));
      

}
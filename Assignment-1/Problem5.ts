{
    //////Problem -5......
   
    function getProperty<T, K extends keyof T>(T: T, K: K): T[K] {
          
         return T[K];
     }

     
   

     const person = { name: "Alice", age: 30 };
     console.log(getProperty(person, "name"));
     
           
}
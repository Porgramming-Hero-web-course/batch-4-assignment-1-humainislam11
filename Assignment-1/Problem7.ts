{
    ////Problem-7


  class Car {

    constructor(
        public brand: string, 
        public model: string,
        public year: number) {}

        getCarAge():number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
          }
  }

        const car = new Car("Honda", "Civic", 2018);
        console.log(`The DeveloperCar's age is: ${car.getCarAge()} years`);


}
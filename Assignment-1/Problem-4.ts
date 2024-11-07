{
    ///Problem-4.........................

    type Circle ={
         shape: "circle",
         radius: number
    }

    type Rectangle ={
        shape: "rectangle",
        width: number,
        height: number
    }

    type AreaType = Circle | Rectangle ;


     function calculateShapeArea(Area : AreaType):number{
          if(Area.shape === "circle"){
            return Math.PI * Area.radius * Area.radius
          }
          else if (Area.shape === "rectangle"){
            return Area.width * Area.height
          }
          throw new Error("Unknown shape");
     }


     const NewCircle: Circle = { shape: "circle", radius: 5 };
     const NewRectangle: Rectangle = { shape: "rectangle", width: 4, height: 6 };



    const ResultCircle = calculateShapeArea(NewCircle);
    const ResultRectangle = calculateShapeArea(NewRectangle);
    console.log(ResultCircle);
    console.log(ResultRectangle)





}
////  Union

By using Union type, we can keep the value of multiple types in a variable. 

Like:

const value: string | number;
value = "hi";
value = 123;

It makes the work of developers much easier, especially for functions and variables.


////Intersection

Using the intersection type, we combine multiple types, which makes a new type ready. 

Like:

type Name = { name: string };
type Email = { email: string };

type ManDetails = Name & Email;

const Man: ManDetails = {
  name: "Humain",
  email: "humain1@gmail.com"
};





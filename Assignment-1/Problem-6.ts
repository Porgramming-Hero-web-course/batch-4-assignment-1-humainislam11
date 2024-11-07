{

    ///Problem-6

    interface MyProfile {
          name: string;
          age: number;
          email: string;
      }


      const MyProfile: MyProfile = {
        name: "Humain Islam",
        age: 18,
        email: "humainislam11@gmail.com",
      };

      const updateProfile =(MyProfile: MyProfile, updatesProfile: Partial<MyProfile>): MyProfile=> {
        return { ...MyProfile, ...updatesProfile };
      }

      
console.log(updateProfile(MyProfile, { name: 'Humain Islam Rabbi' }));
      
    


}
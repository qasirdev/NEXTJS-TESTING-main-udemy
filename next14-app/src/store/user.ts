import { create } from "zustand"

export const userStore = create((set) => ({
  user: {
    full_name: "Qasir Mehmood"
  },
  updateUser: (newUser:any) => set((state:any) => ({
    user: {...state.user, ...newUser}
  })),
  fetchUser:async (userId:number) => {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "GET",
            cache: "force-cache",
        next: {
        revalidate: 5,
        },
    });
    
    const {data} = await response.json();
    set({user:{
        full_name: data[0].name
      }})
    }
}))
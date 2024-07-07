import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

export const authOptions={
    providers:[
        GithubProvider({
            clientId:'Ov23liqn4zLrnWnOvyM4' ,
            clientSecret:'5451f5d5ff315ffe6f0b6bcdbe24814d5b90436c' ,
        })
    ]
}

export default NextAuth(authOptions);
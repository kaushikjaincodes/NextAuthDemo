import NextAuth  from "next-auth"
import Google from "next-auth/providers/google"

export const {handlers:{GET,POST} ,signIn,signOut,auth} = NextAuth({
    session:{
        strategy:"jwt"
    },
    providers:[
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID || "",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET || "",
        })
    ],
})
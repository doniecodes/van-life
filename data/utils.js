import { redirect } from "react-router-dom";

export async function requireAuth (request) {
    const isLoggedIn = localStorage.getItem("loggedIn");
    const pathname = new URL(request.url).pathname;
    
    if(!isLoggedIn){
        const response = redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
        response.body = true  // It's silly, but it works
        return response
    }
}
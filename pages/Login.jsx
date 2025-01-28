import React, { useState } from "react"
import { useLoaderData, useNavigation, redirect, useActionData} from "react-router-dom"
import { loginUser } from "../data/api"
import { Form } from "react-router-dom"

/*  loader */
export function loader ({ request }){
    return new URL(request.url).searchParams.get("message")
}

/* action */
export async function action ({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host";
    try{
        await loginUser({email, password})
        localStorage.setItem("loggedIn", true)
        // redirecting to /host if successful
        const response = redirect(pathname)
        response.body = true  // It's silly, but it works
        return response
    }
    catch(err){
        return err.message
    }
}

const Login = () => {
    const actionError = useActionData();
    const loginMsg = useLoaderData();
    const navigation = useNavigation();


    return (
        <div className="login-container">
            <h1 className="heading-2">Sign in to your account</h1>
            { actionError && <h2 className="red-text">{actionError}</h2> }
            <h2 className="red-text">{loginMsg}</h2>
            <Form replace method="post" className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === "submitting"}>
                  {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )
}

export default Login
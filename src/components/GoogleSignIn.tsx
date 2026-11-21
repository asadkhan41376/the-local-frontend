
"use client";

import { GoogleLogin } from "@react-oauth/google";

export default function GoogleSignIn() {
    const handleGoogleSuccess = async (
        credentialResponse: { credential?: string }
    ) => {
        try {
            const credential = credentialResponse.credential;

            if (!credential) {
                throw new Error("Google credential missing");
            }

            const apiUrl = process.env.NEXT_PUBLIC_API_URL;

            if (!apiUrl) {
                throw new Error(
                    "NEXT_PUBLIC_API_URL is missing from .env.local"
                );
            }

            const response = await fetch(
                `${apiUrl}/api/auth/google`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({ credential }),
                }
            );

            const contentType =
                response.headers.get("content-type") || "";

            if (!contentType.includes("application/json")) {
                const responseText = await response.text();

                console.error(
                    "Non-JSON API response:",
                    response.status,
                    response.url,
                    responseText.slice(0, 300)
                );

                throw new Error(
                    "Backend returned HTML instead of JSON. Check API URL and backend route."
                );
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Google login failed"
                );
            }

            console.log("Login successful:", data);
            console.log("Needs city:", data.needsCity);
        } catch (error) {
            console.error("Google login error:", error);
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
                console.error("Google Sign-In failed");
            }}
            useOneTap={false}
            text="continue_with"
            shape="rectangular"
            theme="outline"
            size="large"
        />
    );
}

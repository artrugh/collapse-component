export const faq = [
    {
        q: "Is the Podio API free to use?",
        a: "The Podio API is free to use for both premium and free Podio accounts. Both have full access to the API and have the same rate limits. There is no extra charge for using the API.",
        state: false
    },
    {
        q: "How do I get an API key?",
        a: "You have to sign in or sign up with Podio. Then you find your API keys as a tab under your account settings.",
        state: false
    },
    {
        q: "What are the limitation on API requests?",
        a: "To ensure the Podio runs well for everyone your API integration is bound by certain rate limits. If you exceed that limit all your API requests will result in errors. You can read more about the specific limits and how to monitor your usage in the rate limits section.",
        state: false
    },
    {
        q: "Can I get a higher rate limit?",
        a: "If your API integration requires a higher rate limit it's possible that your rate limits can be increased. First make sure you follow our tips for reducing your usage. If you still require higher limits, visit https://help.podio.com and contact us with a brief description of your project, your estimated usage and the client_id of the API key you are using.",
        state: false
    },
    {
        q: "I'm building an automated script, how do I authenticate automatically?",
        a: "The recommended authentication method for the Podio API is the OAuth server-side flow. We recognize that this is not a great way to authenticate automated scripts. For those situations it's recommended that you authenticate using app authentication. With app authentication you can authenticate as a single Podio app using a special app token.",
        state: false
    }
];


export const fetch_post = (url: string, body: object) =>
    fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "content-type": "application/json" },
    });

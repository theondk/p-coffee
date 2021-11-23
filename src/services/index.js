export const httpReq = () => {
    const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Coldn't fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch(e) {
            throw e;
        }
    }

    return { request };
}
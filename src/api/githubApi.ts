import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})
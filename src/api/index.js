import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertArticle = payload => api.post(`/article`, payload)
export const getAllArticles = () => api.get(`/articles`)
export const deleteArticleById = id => api.delete(`/article/${id}`)
export const getArticleById = id => api.get(`/article/${id}`)

const apis = {
    insertArticle,
    getAllArticles,
    deleteArticleById,
    getArticleById,
}

export default apis

import { createSlice } from "@reduxjs/toolkit";

const generateId = (posts) => {
    return posts.reduce((acc, post) => acc > post.id ? acc : post.id, 0) + 1;
}

const postSlice = createSlice({
    name: 'Posts',
    initialState: {
        posts: [{ id: 1, title: 'Javacvript the best', views: 99999999 },
        { id: 2, title: 'Python', views: 1 }
        ],
    },
    reducers: {
        addPost: (state, actions) => {
            state.posts = [...state.posts, { title: actions.payload.title, views: 0, id: generateId(state.posts) }]
        },
        editPost: (state, { payload }) => {
            const { id, title } = payload;
            state.posts = state.posts.map(post => {
                if (id !== post.id) {
                    return post;
                }
                return { ...post, title }
            })
        },
        removePost: (state, { payload: id }) => {
            state.posts = state.posts.filter(post => post.id !== id)
        }
    }
})

export const { addPost, editPost, removePost } = postSlice.actions;
export default postSlice.reducer;
import React, { useState, createContext } from 'react';
// Movie context như 1 kho lưu trữ dùng ở đâu thì import ở đó
export const MovieContext = createContext();
const MovieProvider = (props) => {
//Data của context provider
    const [movies, setMovies] = useState(
        [
            {
                name: 'Harry Potter',
                price: "$10"
            },
            {
                name: 'Iron man 3',
                price: "$10"
            },
            {
                name: 'Avenger Endgame',
                price: "$10"
            }
        ]
    );
    return (
            // Tạo component với createContext. provider có value bằng data và phương thức thay đổi data như là set state
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children} 
            {/* props.children để component được bao bọc sử dụng data */}
        </MovieContext.Provider>
    );
}
export default MovieProvider;
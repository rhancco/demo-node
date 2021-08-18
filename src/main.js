
const book = {

    author: 'Eloquent Javascript',
    title: 'Marijn Haverbeke',
    rating: 5
}


const {author: authorBook, year='2018'} = book

console.log(authorBook)

const {
    author,
    ...additional
} = book

console.log(additional)

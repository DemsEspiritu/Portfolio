

const calculateMoviesScore = (ratng: number, reviews: number) => {
    console.log('Calculating Movie Score');
    for(let i = 0; i < 1000000000; i++) {}
    return (rating * reviews) / 10
}




export default function movieUnoptomized() {
    const [count. setCount] = useState(0);
    const [movies] = useState([
        { id: 1, title: 'Spiderman', rating: 4.5, reviews: 100},
        { id: 2, title: 'Superman', rating: 4.0, reviews: 100}, 
    ]);

    //The function is re-created on every render
    const handleLike = (movieId) => {
        console.log('👍 Like Movie:', movieId);
    }
    return (
        <div>movieUnoptomized</div>
    )
}

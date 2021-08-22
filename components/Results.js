import Thumbnail from './Thumbnail';

const Results = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Thumbnail key={movie.id} result={movie} />
      ))}
    </div>
  );
};

export default Results;

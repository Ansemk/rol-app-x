import { useContext, useEffect, useState } from 'react';
import { getGames } from '../services/getGames';
import GamesContext from '../context/GamesContext';

const INITIAL_PAGE = 0;

export function useGames({}) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(INITIAL_PAGE);
  const { games, setGames } = useContext(GamesContext);

  useEffect(() => {
    setLoading(true);

    getGames({}).then((games) => {
      setGames(games);
      setLoading(false);
    });
  }, [setGames]);

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      setLoadingNextPage(true);

      getGames({}).then((nextGames) => {
        setGames((prevGames) => prevGames.concat(nextGames));
        setLoadingNextPage(false);
      });
    },
    [page]
  );

  return { games, setGames, loading, loadingNextPage, setPage };
}

import { useSelector } from 'react-redux';
import {
  selectUserPosts,
  selectAllPosts,
  selectLikes,
  selectComments,
  selectIsRefreshing,
} from '../redux/posts/postsSelectors';
import { useEffect } from 'react';

export const usePosts = () => {
  const userPosts = useSelector(selectUserPosts);
  const allPosts = useSelector(selectAllPosts);
  const likes = useSelector(selectLikes);
  const allComments = useSelector(selectComments);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    userPosts,
    allPosts,
    likes,
    allComments,
    isRefreshing,
  };
};

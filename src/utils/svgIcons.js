// import * as React from 'react';
import { SvgXml, SvgCss } from 'react-native-svg';

// icons SVG
import addPhotoSvg from '../assets/images/add-photo-btn.svg';
import postsIconSvg from '../assets/images/posts-icon.svg';
import createPostIconSvg from '../assets/images/create-posts-icon.svg';
import profileIconSvg from '../assets/images/profile-icon.svg';

const AddPhotoBtnIcon = ({ width, height, color }) => (
  <SvgXml width={width} height={height} xml={addPhotoSvg} />
);

const PostsIcon = ({ width, height, color }) => (
  <SvgXml xml={postsIconSvg} width={width} height={height} fill={color} />
);

const CreatePostsIcon = ({ width, height, color }) => (
  <SvgXml xml={createPostIconSvg} width={width} height={height} fill={color} />
);

const ProfileIcon = ({ width, height, color }) => (
  <SvgXml xml={profileIconSvg} width={width} height={height} fill={color} />
);
export { AddPhotoBtnIcon, PostsIcon, CreatePostsIcon, ProfileIcon };

// import * as React from 'react';
// import { SvgXml } from 'react-native-svg';
// import postsIcon from '../assets/images/posts-icon.svg';

// export default () => <SvgXml xml={postsIcon} />;

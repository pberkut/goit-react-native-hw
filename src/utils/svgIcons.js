// import * as React from 'react';
import { SvgXml, SvgCss } from 'react-native-svg';

// icons SVG
import addPhotoSvg from '../assets/images/add-photo-btn.svg';
import postsIconSvg from '../assets/images/posts-icon.svg';
import createPostIconSvg from '../assets/images/create-posts-icon.svg';
import profileIconSvg from '../assets/images/profile-icon.svg';
import logoutIconSvg from '../assets/images/log-out-icon.svg';
import arrowLeftSvg from '../assets/images/arrow-left-icon.svg';
import trashSvg from '../assets/images/trash-icon.svg';
import cameraSvg from '../assets/images/camera-icon.svg';
import mapPinSvg from '../assets/images/map-pin-icon.svg';
import commentsSvg from '../assets/images/comments-icon.svg';
import removeAvatarSvg from '../assets/images/remove-avatar-icon.svg';
import thumbUpSvg from '../assets/images/thumbs-up-icon.svg';
import sendSvg from '../assets/images/send-icon.svg';

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

const LogoutIcon = ({ width, height, color }) => (
  <SvgXml xml={logoutIconSvg} width={width} height={height} fill={color} />
);

const ArrowLeftIcon = ({ width, height, color }) => (
  <SvgXml xml={arrowLeftSvg} width={width} height={height} fill={color} />
);

const TrashIcon = ({ width, height, color }) => (
  <SvgXml xml={trashSvg} width={width} height={height} fill={color} />
);

const CameraIcon = ({ width, height, color }) => (
  <SvgXml xml={cameraSvg} width={width} height={height} fill={color} />
);

const MapPinIcon = ({ width, height, color }) => (
  <SvgXml xml={mapPinSvg} width={width} height={height} fill={color} />
);

const CommentsIcon = ({ width, height, color }) => (
  <SvgXml xml={commentsSvg} width={width} height={height} fill={color} />
);

const RemoveAvatarIcon = ({ width, height, color }) => (
  <SvgXml xml={removeAvatarSvg} width={width} height={height} fill={color} />
);

const ThumbUpIcon = ({ width, height, color }) => (
  <SvgXml xml={thumbUpSvg} width={width} height={height} fill={color} />
);

const SendIcon = ({ width, height, color }) => (
  <SvgXml xml={sendSvg} width={width} height={height} fill={color} />
);

export {
  AddPhotoBtnIcon,
  PostsIcon,
  CreatePostsIcon,
  ProfileIcon,
  LogoutIcon,
  ArrowLeftIcon,
  TrashIcon,
  CameraIcon,
  MapPinIcon,
  CommentsIcon,
  RemoveAvatarIcon,
  ThumbUpIcon,
  SendIcon,
};

// import * as React from 'react';
// import { SvgXml } from 'react-native-svg';
// import postsIcon from '../assets/images/posts-icon.svg';

// export default () => <SvgXml xml={postsIcon} />;

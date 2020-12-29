/** @format */

import React from 'react';

import data from './data';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamDescription,
  StreamCategory,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const StreamList: React.FC = () => {
  const StreamItem: React.FC<ItemProps> = ({ item }) => (
    <StreamContainer>
      <StreamThumbnail source={item.source} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>{item.username}</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            {item.description}
          </StreamDescription>

          <StreamCategory>{item.category}</StreamCategory>
        </StreamRow>

        <TagRow>
          {item.tags.map((tagItem, index) => (
            <TagView key={`${item.username}:${tagItem}:${index}`}>
              <TagText>{tagItem}</TagText>
            </TagView>
          ))}
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
  return (
    <List>
      {data.map((item) => (
        <StreamItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default StreamList;

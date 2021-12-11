import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import Image from '@utils/local-img';

const MediaWithPoints = ({
  media,
  children,
  mediaAlignment,
  imageClassName,
}) => {
  mediaAlignment = mediaAlignment ?? 'left';

  return (
    <Wrapper mediaAlignment={mediaAlignment} style={{ maxWidth: 960 }}>
      <div className={`w-1/2 transform ${imageClassName}`}>
        <Image src={media} className="max-h-screen" />
      </div>
      {/* can't use space-x-# class because the flex direction reverses (margin on wrong side) */}
      <div className="mx-5"></div>
      <div className="w-1/2 space-y-2">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div(
  ({ mediaAlignment }) => css`
    ${tw`flex mx-auto w-full items-center`}
    ${mediaAlignment === 'left' ? tw`flex-row` : tw`flex-row-reverse`}

    max-width: 960px;
  `
);

export default MediaWithPoints;

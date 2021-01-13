import React from 'react';
import ReactTooltip from 'react-tooltip';
import Img from '@utils/local-img';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

const RoomObject = ({ children, src, tooltip, width, left, top }) => {
  let place = top > 50 ? 'top' : 'bottom';

  //generate unique key for tooltip association
  var crypto = require('crypto');
  var id = crypto.randomBytes(20).toString('hex');

  return (
    <>
      <div
        data-tip={id}
        data-for={id}
        className="absolute h-auto"
        style={{
          width: `${width}%`,
          left: `${left}%`,
          top: `${top}%`,
        }}
      >
        {tooltip && <Pointer />}
        <Img src={src} />
      </div>
      {tooltip && (
        <Tooltip
          id={id}
          aria-haspopup="true"
          place={place}
          type="light"
          effect="float"
        >
          {children}
        </Tooltip>
      )}
    </>
  );
};

const Tooltip = styled(ReactTooltip)`
  border: 5px solid var(--primaryLight) !important;
  border-radius: 1rem !important;
  padding: 1rem !important;
  width: max(20%, 12rem);
`;

const glowing = keyframes`
    0% {
      box-shadow: 0 0 0px 0px;
    }
    50% {
      box-shadow: 0 0 10px 3px #4895ea;
    }
    100% {
      box-shadow: 0 0 0px 0px;
    }
`;

const Pointer = styled.span`
  //center pointer
  ${tw`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
  ${tw`bg-white border-2 border-solid w-4 h-4 rounded-full z-10`}

  border-color: #4895ea;
  animation: ${glowing} 2.5s infinite;
  -webkit-animation: ${glowing} 2.5s infinite;
  -moz-animation: ${glowing} 2.5s infinite;
  -o-animation: ${glowing} 2.5s infinite;
`;

export default RoomObject;

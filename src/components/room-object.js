import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import Img from '@utils/local-img';
import styled, { keyframes, css } from 'styled-components';
import tw from 'twin.macro';

const RoomObject = ({
  children,
  src,
  tooltip,
  width,
  left,
  top,
  className,
}) => {
  let place = top > 50 ? 'top' : 'bottom';

  //generate unique key for tooltip association
  var crypto = require('crypto');
  var id = crypto.randomBytes(20).toString('hex');

  // convert all illustration-specific props to arrays (or else we can't map over strings)
  // could simply wrap all inputs in [], but that's inefficient for inputs
  let src_array = Array.isArray(src) ? src : [src];
  let width_array = Array.isArray(width) ? width : [width];
  let left_array = Array.isArray(left) ? left : [left];
  let top_array = Array.isArray(top) ? top : [top];
  let className_array = Array.isArray(className) ? className : [className];

  useEffect(() => {
    ReactTooltip.rebuild();
    // var all = document.getElementsByClassName('__react_component_tooltip');
    // for (var i = 0; i < all.length; i++) {
    //   all[i].style.setProperty('opacity', '0.95', 'important');
    // }
  }, []);

  return (
    <>
      <Wrapper tooltip={tooltip} className="group">
        {src_array.map((value, i) => {
          console.log({ value });
          return (
            <div
              key={i}
              data-tip={id}
              data-for={id}
              className={`absolute h-auto ${className_array[i]}`}
              style={{
                width: `${width_array[i]}%`,
                left: `${left_array[i]}%`,
                top: `${top_array[i]}%`,
              }}
            >
              {/* only render glowing pointer once for double tooltips */}
              {/* render it on the last object so point stays at the highest z-index on hover */}
              {tooltip && i === src_array.length - 1 && <Pointer />}
              <Img src={value} />
            </div>
          );
        })}
      </Wrapper>
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

const Wrapper = styled.span(
  ({ tooltip }) => css`
    &:hover div {
      ${tooltip &&
      tw`transform-gpu transition-transform duration-500 group-hover:-translate-y-2`}
    }

    .__react_component_tooltip {
      border-radius: 3px;
      display: inline-block;
      font-size: 13px;
      left: -999em;
      opacity: 0;
      padding: 8px 21px;
      position: fixed;
      pointer-events: none;
      transition: opacity 0.3s ease-out;
      top: -999em;
      visibility: hidden;
      z-index: 999;
    }

    .__react_component_tooltip.show {
      opacity: 0.9;
      margin-left: 0;
      margin-top: 0;
      visibility: visible;
    }
  `
);

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
  ${tw`bg-white border-2 border-solid w-4 h-4 rounded-full z-50`}

  border-color: #4895ea;
  animation: ${glowing} 2.5s infinite;
  -webkit-animation: ${glowing} 2.5s infinite;
  -moz-animation: ${glowing} 2.5s infinite;
  -o-animation: ${glowing} 2.5s infinite;
`;

export default RoomObject;

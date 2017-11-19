import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { number, bool, arrayOf, string } from 'prop-types';
import { applyAlpha } from '../logic/colors';

const horizontalProps = {
  start: { x: 0, y: 1 },
  end: { x: 1, y: 1 },
};

const Gradient = ({
  horizontal,
  alpha,
  colors,
  ...props
}) => {
  const hProps = horizontal ? horizontalProps : null;
  return (
    <LinearGradient
      colors={alpha === undefined ? colors : colors.map(color => applyAlpha(color, Number(alpha)))}
      {...hProps}
      {...props}
    />
  );
};

Gradient.propTypes = {
  horizontal: bool,
  alpha: number,
  colors: arrayOf(string).isRequired,
};
Gradient.defaultProps = {
  horizontal: false,
  alpha: undefined,
};


export default Gradient;

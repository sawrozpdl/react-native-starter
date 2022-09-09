import iconMap from "./map";

const getIcon = (alias) => {
  const { Component, name } = iconMap[alias];
  return ({ color, size, ...rest }) => (
    <Component name={name} color={color} size={size} {...rest} />
  );
};

export { getIcon };

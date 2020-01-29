import * as React from 'react';

interface Props {
  name?: string;
}

const Header: React.FC<Props> = (props: Props) => <h1>Hello, {props.name}!</h1>;

Header.defaultProps = {
  name: 'world',
};

export default Header;

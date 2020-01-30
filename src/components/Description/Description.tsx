import * as React from 'react';
import style from './Description.module.scss';

interface Props {
  countBy: number;
}

interface State {
  count: number;
}

export default class Description extends React.Component<Props, State> {
  public static defaultProps: Props = {
    countBy: 1,
  };

  public state: State = {
    count: 0,
  };

  public increase = (): void => {
    const countBy: number = this.props.countBy;
    const count = this.state.count + countBy;
    this.setState({ count });
  };

  public render(): JSX.Element {
    return (
      <div>
        <p>My favorite number is {this.state.count}</p>
        <button className={style.btn} onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}
